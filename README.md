EVM Golf is a recreational game designed to show off your code-fu by solving challenges in the **shortest code size** or the **least gas usage**.

# EVM Golf Guide

Follow steps below to participate in EVM Golf.

> parameters should be set in environment variables while ways to set environment variables is different among different platforms. see [more](#set-environment-variables)

1. initialize

    ```sh
    git clone https://github.com/evm-golf/golf.git
    cd golf
    npm install --save-dev
    ```

1. develop your solution for a challenge and test your solution locally. challenges can be viewed in the [`challenges`](challenges) folder

    to test the solidity solution writen in [`contracts/Solution.sol`](contracts/Solution.sol):

    > note `<challenge>` is the chosen challenge (i.e. `addition`)

    ```sh
    CHALLENGE=<challenge> npx hardhat run scripts/test.js
    ```

    to test the EVM code directly:

    > note `<code>` is the evm runtime bytecode (deployed bytecode) starts with `0x`. see the difference between runtime code and creation bytecode [here](https://medium.com/authereum/bytecode-and-init-code-and-runtime-code-oh-my-7bcd89065904)

    ```sh
    EVMCODE=<code> CHALLENGE=<challenge> npx hardhat run scripts/test.js
    ```

1. submit your solution once you bypass the local test

    > this will submit your solution to the issue in [solutions](https://github.com/evm-golf/solutions) repository using your github account

    > when executing the commands below, you need to open the github login page in the browser and enter the printed code there. after the successful authorization your solution will be submitted automatically.

    ```sh
    CHALLENGE=<challenge> npx hardhat run scripts/submit.js
    ```

    or

    ```sh
    EVMCODE=<code> CHALLENGE=<challenge> npx hardhat run scripts/submit.js
    ```

    > you can get your assess token with `public_repo` scope of your github accout and set it in environment variable then the login step will be skiped.
    > ```sh
    > export GITHUB_AUTH_TOKEN=<assess-token>
    > ```

## Set Environment Variables

- linux / osx / bsd

    ```sh
    CHALLENGE=addition npx hardhat run scripts/test.js
    ```

    or

    ```sh
    export CHALLENGE=addition
    npx hardhat run scripts/test.js
    ```

- windows cmd

    ```sh
    set CHALLENGE=addition
    npx hardhat run scripts/test.js
    ```

- windows powershell

    ```sh
    $env:CHALLENGE='addition'
    npx hardhat run scripts/test.js
    ```
