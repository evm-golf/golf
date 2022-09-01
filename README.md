# golf

This is the EVM Golf environment repo.

The challenges are listed in the `challenges` folder.

## Guide

1. initialize

    ```sh
    npm install --save-dev
    ```

1. choose a challenge and write your solution 

    you can write solidity solution in `contracts/Solution.sol` and run command below to test where `<challenge>` is the chosen challenge

    ```sh
    CHALLENGE=<challenge> npx hardhat run scripts/test.js
    ```

    or you can provide EVM code directly; notice that the `<code>` is execution code instead of creation code

    ```sh
    EVMCODE=<code> CHALLENGE=<challenge> npx hardhat run scripts/test.js
    ```

1. submit your solution

    ```sh
    CHALLENGE=<challenge> npx hardhat run scripts/submit.js
    ```

    or

    ```sh
    EVMCODE=<code> CHALLENGE=<challenge> npx hardhat run scripts/submit.js
    ```

    enter the printed code in the shown github login page and then it will be submitted

    if you want to skip the github login step:

    ```sh
    export GITHUB_AUTH_TOKEN=<assess-token>
    ```
