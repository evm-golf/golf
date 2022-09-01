const { ethers } = require('hardhat');
const { Octokit } = require('octokit');

(async function () {
    const ID = parseInt(process.env.ISSUE);
    const octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN });
    const issue = await octokit.rest.issues.get({
        owner: `evm-golf`,
        repo: `solutions`,
        issue_number: ID,
    });
    try {
        const [, challenge] = issue.data.title.match(/^\[Solution\]\[(\w+)\]$/);
        const [, evmcode] = issue.data.body.match(/^\`\`\`\n(0x[0-9a-f]*)\n\`\`\`$/);
        console.log(issue.data.created_at)
        console.log(issue.data.updated_at)
        const Deployer = await ethers.getContractFactory("Deployer");
        const solution = await Deployer.deploy(evmcode);
        const Checker = await ethers.getContractFactory("Checker");
        const checker = await Checker.deploy(solution.address);
        const cases = require(`../challenges/${challenge}`);
        const GPCASE = await checker.GPCASE();
        const gas = await checker.eval(cases, { gasLimit: GPCASE.mul(cases.length) });
        const report = {
            user: `${issue.data.user.login}`,
            id: ID,
            challenge: challenge,
            code: evmcode,
            length: evmcode.length / 2 - 1,
            gas: gas.toNumber(),
        };
        const json = JSON.stringify(report);
        await octokit.rest.issues.createComment({
            owner: `evm-golf`,
            repo: `solutions`,
            issue_number: ID,
            body: `\`\`\`json\n${json}\n\`\`\``,
        });
    } catch {
        await octokit.rest.issues.createComment({
            owner: `evm-golf`,
            repo: `solutions`,
            issue_number: ID,
            body: `EVALUATION FAILED`,
        });
    } finally {
        await octokit.rest.issues.update({
            owner: `evm-golf`,
            repo: `solutions`,
            issue_number: ID,
            state: 'closed',
        });
    }
})();
