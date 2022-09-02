(async function () {
    const data = await fetch('https://evm-golf.github.io/statistics/index.json');
    const json = await data.json();
    const table = document.getElementById('data');
    for (const [challenge, { gas, length }] of Object.entries(json)) {
        const tr = document.createElement('tr');
        const tc = document.createElement('td');
        const tg = document.createElement('td');
        const tl = document.createElement('td');
        const tgc = document.createElement('code');
        const tlc = document.createElement('code');
        tc.innerText = challenge;
        tgc.innerText = `${gas.gas} (@${gas.user})`;
        tlc.innerText = `${length.length} (@${length.user})`;
        tg.appendChild(tgc);
        tl.appendChild(tlc);
        tr.appendChild(tc);
        tr.appendChild(tg);
        tr.appendChild(tl);
    }
})();