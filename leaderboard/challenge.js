(async function () {
    const search = location.search.slice(1);
    const [lenbest, gasbest, lenrank, gasrank] = Promise.all([
        fetch(`https://evm-golf.github.io/statistics/${search}/lenbest.json`).then(v => v.json()),
        fetch(`https://evm-golf.github.io/statistics/${search}/gasbest.json`).then(v => v.json()),
        fetch(`https://evm-golf.github.io/statistics/${search}/lenrank.json`).then(v => v.json()),
        fetch(`https://evm-golf.github.io/statistics/${search}/gasrank.json`).then(v => v.json()),
    ])
    const table = document.getElementById('data');
    console.log(lenbest, gasbest, lenrank, gasrank);
})();