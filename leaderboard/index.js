(async function () {
    const data = await fetch('https://evm-golf.github.io/statistics/index.json');
    const json = await data.json();
    const table = document.getElementById('data');
    for (const [challenge, { gas, length }] of Object.entries(json)) {
        console.log(challenge);
        console.log(gas);
        console.log(length);
    }
})();