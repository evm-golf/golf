(async function () {
    const [, search] = location.search.match(/^\?(\w+)$/);
    document.getElementById('challenge').innerText = search;
    const [lenbest, gasbest, lenrank, gasrank] = await Promise.all([
        fetch(`https://evm-golf.github.io/statistics/${search}/lenbest.json`).then(v => v.json()),
        fetch(`https://evm-golf.github.io/statistics/${search}/gasbest.json`).then(v => v.json()),
        fetch(`https://evm-golf.github.io/statistics/${search}/lenrank.json`).then(v => v.json()),
        fetch(`https://evm-golf.github.io/statistics/${search}/gasrank.json`).then(v => v.json()),
    ])
    const table = document.getElementById('data');
    for (window.i = 0; window.i < lenbest.length || window.i < gasbest.length || window.i < lenrank.length || window.i < gasrank.length; window.i++) {
        const tr = document.createElement('tr');
        const tn = document.createElement('td');
        const tlb = document.createElement('td');
        const tgb = document.createElement('td');
        const tlr = document.createElement('td');
        const tgr = document.createElement('td');
        const tnc = document.createElement('code');
        const tlbc = document.createElement('code');
        const tgbc = document.createElement('code');
        const tlrc = document.createElement('code');
        const tgrc = document.createElement('code');
        tnc.innerText = window.i;
        if (window.i < lenbest.length) {
            tlbc.innerText = `${lenbest[window.i].length} (@${lenbest[window.i].user})`;
        }
        if (window.i < gasbest.length) {
            tgbc.innerText = `${gasbest[window.i].gas} (@${gasbest[window.i].user})`;
        }
        if (window.i < lenrank.length) {
            tlrc.innerText = `${lenrank[window.i].length} (@${lenrank[window.i].user})`;
        }
        if (window.i < gasrank.length) {
            tgrc.innerText = `${gasrank[window.i].gas} (@${gasrank[window.i].user})`;
        }
        tn.appendChild(tnc);
        tlb.appendChild(tlbc);
        tgb.appendChild(tgbc);
        tlr.appendChild(tlrc);
        tgr.appendChild(tgrc);
        tr.appendChild(tn);
        tr.appendChild(tlb);
        tr.appendChild(tgb);
        tr.appendChild(tlr);
        tr.appendChild(tgr);
        table.appendChild(tr);
    }
    console.log(lenbest, gasbest, lenrank, gasrank);
})();
