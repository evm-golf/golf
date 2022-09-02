// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract Checker {
    uint256 public constant MAXGAS = 0x10000;
    uint256 public constant GPCASE = 0x200000;
    address immutable solution;

    constructor(address s) {
        solution = s;
    }

    struct Case {
        bytes x;
        bytes y;
    }

    function check(Case calldata c, uint256 g) internal view returns (bool) {
        (bool ok, bytes memory ret) = solution.staticcall{gas: g}(c.x);
        return ok && keccak256(c.y) == keccak256(ret);
    }

    function eval(Case[] calldata cs) external view returns (uint256 min) {
        for (uint256 i = 0; i < cs.length; i++) {
            uint256 max = MAXGAS;
            while (min + 1 < max) {
                uint256 g = (min + max) / 2;
                if (check(cs[i], g)) {
                    max = g;
                } else {
                    min = g;
                }
            }
        }
        require(min + 1 < MAXGAS, "failed");
    }
}
