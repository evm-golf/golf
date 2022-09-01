const { ethers, artifacts } = require('hardhat');

(async function () {
    if (process.env.EVMCODE === undefined) {
        const buildinfo = await artifacts.readArtifact('Solution');
        process.env.EVMCODE = buildinfo.deployedBytecode;
    }
    const Deployer = await ethers.getContractFactory("Deployer");
    const solution = await Deployer.deploy(process.env.EVMCODE);
    const Checker = await ethers.getContractFactory("Checker");
    const checker = await Checker.deploy(solution.address);
    const cases = require(`../challenges/${process.env.CHALLENGE}`);
    const GPCASE = await checker.GPCASE();
    const gas = await checker.eval(cases, { gasLimit: GPCASE.mul(cases.length) });
    console.log(`LENGTH: ${process.env.EVMCODE.length / 2 - 1}`);
    console.log(`GAS: ${gas.toNumber()}`);
})();
