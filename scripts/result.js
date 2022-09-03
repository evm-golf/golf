const { ethers, artifacts } = require('hardhat');
const { execSync } = require('child_process');
const { Octokit } = require('octokit');
const { createOAuthDeviceAuth } = require('@octokit/auth-oauth-device');

(async function () {
  global.octokit = new Octokit({});
  const cmts = await global.octokit.rest.issues.listComments({
    owner: `evm-golf`,
    repo: `solutions`,
    issue_number: process.env.SUBMIT,
  })
  for (const cmt of cmts.data) {
    if (cmt.user.login !== 'github-actions[bot]') {
      continue;
    }
    try {
      const [, raweval] = cmt.body.match(/\`\`\`json\n(\S+)\n\`\`\`/);
      const evaluation = JSON.parse(raweval);
      console.log(`CODE: ${evaluation.code}`);
      console.log(`CHALLENGE: ${evaluation.challenge}`);
      console.log(`USER: ${evaluation.user}`);
      console.log(`LENGTH: ${evaluation.length}`);
      console.log(`GAS: ${evaluation.gas}`);
      return;
    } catch {
      console.log('evaluation failed')
      return;
    }
  }
  console.log('the evaluation result is not produced. try again later.');
})();
