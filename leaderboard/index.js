(async function () {
    const data = await fetch('https://evm-golf.github.io/statistics/index.json');
    const json = await data.json();
    const table = document.getElementById('data');
    for (const [challenge, { gas, length }] of Object.entries(json)) {
        const tr = document.createElement('tr');
        const tc = document.createElement('td');
        const tl = document.createElement('td');
        const tg = document.createElement('td');
        const tlc = document.createElement('code');
        const tgc = document.createElement('code');
        tc.innerText = challenge;
        tlc.innerText = `${length.length} (@${length.user})`;
        tgc.innerText = `${gas.gas} (@${gas.user})`;
        tl.appendChild(tlc);
        tg.appendChild(tgc);
        tr.appendChild(tc);
        tr.appendChild(tl);
        tr.appendChild(tg);
        table.appendChild(tr);
    }
})();