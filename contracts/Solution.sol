// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract Solution {
    fallback(bytes calldata I) external returns (bytes memory O) {
        (uint x) =  abi.decode(I, (uint));
        for (uint y = 0; y <= x; y++) {
            if ((y*y <= x) &&  (x < (y+1)*(y+1))) {
                O = abi.encode(y);
                break;
            }
        }
    }
}
