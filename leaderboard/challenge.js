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
    for (global.i = 0; global.i < lenbest.length || global.i < gasbest.length || global.i < lenrank.length || global.i < gasrank.length; global.i++) {
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
        tnc.innerText = global.i;
        tlbc.innerText = `${lenbest[global.i].length} (@${lenbest[global.i].user})`;
        tgbc.innerText = `${gasbest[global.i].gas} (@${gasbest[global.i].user})`;
        tlrc.innerText = `${lenrank[global.i].length} (@${lenrank[global.i].user})`;
        tgrc.innerText = `${gasrank[global.i].gas} (@${gasrank[global.i].user})`;
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