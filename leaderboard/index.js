(async function () {
    const data = await fetch('https://evm-golf.github.io/statistics/index.json');
    const json = data.json();
    console.log(json)
  })();