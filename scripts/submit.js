const { ethers, artifacts } = require('hardhat');
const { execSync } = require('child_process');
const { Octokit } = require('octokit');
const { createOAuthDeviceAuth } = require('@octokit/auth-oauth-device');

(async function () {
  if (process.env.EVMCODE === undefined) {
    const buildinfo = await artifacts.readArtifact('Solution');
    process.env.EVMCODE = buildinfo.deployedBytecode;
  }

  console.error('[INFO]: local test start ...');
  execSync(`npx hardhat run scripts/test.js`);
  console.error('[INFO]: local test bypassed');

  if (process.env.GITHUB_AUTH_TOKEN) {
    global.octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN });
  } else {
    global.octokit = new Octokit({
      authStrategy: createOAuthDeviceAuth,
      auth: {
        clientId: 'c70e3f7ef445b54312ba',
        scopes: [`public_repo`],
        onVerification(verification) {
          console.error(`please visit the following link in your browser (login your github account if required):`);
          console.error();
          console.error(`${verification.verification_uri}`);
          console.error();
          console.error(`and then enter the following code:`);
          console.error();
          console.error(`${verification.user_code}`);
          console.error();
        },
      },
    });
    const auth = await octokit.auth({ type: 'oauth' });
    console.error(`github authentication succeed; execute the following command to skip github login in the future (and append it in the bash profile):`);
    console.error();
    console.error(`export GITHUB_AUTH_TOKEN=${auth.token}`);
    console.error();
  }

  await octokit.rest.issues.create({
    owner: `evm-golf`,
    repo: `solutions`,
    title: `[Solution][${process.env.CHALLENGE}]`,
    body: `\`\`\`\n${process.env.EVMCODE}\n\`\`\``,
  });

  console.error(`done!`);
})();
