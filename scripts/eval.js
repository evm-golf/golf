const { ethers } = require('hardhat');
const { writeFileSync } = require('fs');

(async function () {
    const Deployer = await ethers.getContractFactory("Deployer");
    const solution = await Deployer.deploy(process.env.EVMCODE);
    const Checker = await ethers.getContractFactory("Checker");
    const checker = await Checker.deploy(solution.address);
    const cases = require(`../challenges/${process.env.CHALLENGE}`);
    const GPCASE = await checker.GPCASE();
    const gas = await checker.eval(cases, { gasLimit: GPCASE.mul(cases.length) });
    const report = {
        challenge: process.env.CHALLENGE,
        code: process.env.EVMCODE,
        length: process.env.EVMCODE.length / 2 - 1,
        gas: gas.toNumber(),
    };
    const json = JSON.stringify(report);
    writeFileSync(process.env.OUTPUTFILE, json);
})();
