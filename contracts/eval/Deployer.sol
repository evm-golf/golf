// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract Deployer {
    constructor(bytes memory code) {
        assembly {
            return(add(code, 0x20), mload(code))
        }
    }
}
