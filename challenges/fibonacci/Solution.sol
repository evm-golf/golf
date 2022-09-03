// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

// THIS SAMPLE SOLUTION CANNOT BYPASS THE EVALUATION

contract Solution {
    fallback(bytes calldata I) external returns (bytes memory O) {
        uint x =  abi.decode(I, (uint));
        if (x < 2) {
            O = abi.encode(x);
        } else {
            (, O) = address(this).staticcall(abi.encode(x-1));
            uint y1 =  abi.decode(O, (uint));
            (, O) = address(this).staticcall(abi.encode(x-2));
            uint y2 =  abi.decode(O, (uint));
            O = abi.encode(y1 + y2);
        }
    }
}
