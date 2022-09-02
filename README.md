# golf

This is the EVM Golf environment repo.

## Guide

essentially your can follow steps below to participate in this evm golf.

1. [clone this repo](#clone)
1. [initialize](#initialize)
1. [write your solution for a challenge and test your solution locally](#test). all challenges can be viewed in the [`challenges`](challenges) folder
1. [submit your solution](#submit)

> NOTE that parameters should be set in environment variables while the way setting environment variables is different in different platforms
> 
> 1. linux / osx / bsd
> 
>     ```sh
>     CHALLENGE=addition npx hardhat run scripts/test.js
>     ```
> 
>     or
> 
>     ```sh
>     export CHALLENGE=addition
>     npx hardhat run scripts/test.js
>     ```
> 
> 1. windows cmd
> 
>     ```sh
>     set CHALLENGE=addition
>     npx hardhat run scripts/test.js
>     ```
> 
> 1. windows powershell
> 
>     ```sh
>     $env:CHALLENGE='addition'
>     npx hardhat run scripts/test.js
>     ```

### clone

```sh
git clone https://github.com/evm-golf/golf.git
cd golf
```

### initialize

```sh
npm install --save-dev
```

### test

you can develop your solution in ether solidity or evmcode directly.

#### solidity

you can write solidity solution in [`contracts/Solution.sol`](contracts/Solution.sol)

run the command below to test where `<challenge>` is the chosen challenge

```sh
CHALLENGE=<challenge> npx hardhat run scripts/test.js
```

#### evmcode

run the command below to test where `<challenge>` is the chosen challenge and `<code>` is the evm runtime bytecode (deployed bytecode) starts with `0x`. see the difference between runtime code and creation bytecode [here](https://medium.com/authereum/bytecode-and-init-code-and-runtime-code-oh-my-7bcd89065904)

```sh
EVMCODE=<code> CHALLENGE=<challenge> npx hardhat run scripts/test.js
```

### submit

#### login and submit

when executing the commands below, you need to open the github login page in the browser and enter the printed code there. after the successful authorization your solution will be submitted automatically.

```sh
CHALLENGE=<challenge> npx hardhat run scripts/submit.js
```

or

```sh
EVMCODE=<code> CHALLENGE=<challenge> npx hardhat run scripts/submit.js
```

#### skip github login

you can get your assess token with `public_repo` scope of your github accout and set it in environment variable then the login step will be skiped.

```sh
GITHUB_AUTH_TOKEN=<assess-token> CHALLENGE=<challenge> npx hardhat run scripts/submit.js
```

or

```sh
GITHUB_AUTH_TOKEN=<assess-token> EVMCODE=<code> CHALLENGE=<challenge> npx hardhat run scripts/submit.js
```
