(async function () {
    const data = await fetch('https://evm-golf.github.io/statistics/index.json');
    const json = await data.json();
    const table = document.getElementById('data');
    for (const [challenge, { gas, length }] of Object.entries(json)) {
        const tr = document.createElement('tr');
        const tc = document.createElement('td');
        const tl = document.createElement('td');
        const tg = document.createElement('td');
        const tca = document.createElement('a');
        const tlc = document.createElement('code');
        const tgc = document.createElement('code');
        tca.innerText = challenge;
        tca.href = `challenge?${challenge}`;
        tlc.innerText = `${length.length} (@${length.user})`;
        tgc.innerText = `${gas.gas} (@${gas.user})`;
        tc.appendChild(tca);
        tl.appendChild(tlc);
        tg.appendChild(tgc);
        tr.appendChild(tc);
        tr.appendChild(tl);
        tr.appendChild(tg);
        table.appendChild(tr);
    }
})();