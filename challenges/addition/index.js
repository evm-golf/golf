const { ethers } = require("hardhat");

module.exports = [
    { x: ethers.utils.defaultAbiCoder.encode(['uint', 'uint'], [0, 0]), y: ethers.utils.defaultAbiCoder.encode(['uint'], [0]) },
    { x: ethers.utils.defaultAbiCoder.encode(['uint', 'uint'], [0, 1]), y: ethers.utils.defaultAbiCoder.encode(['uint'], [1]) },
    { x: ethers.utils.defaultAbiCoder.encode(['uint', 'uint'], [1, 0]), y: ethers.utils.defaultAbiCoder.encode(['uint'], [1]) },
    { x: ethers.utils.defaultAbiCoder.encode(['uint', 'uint'], [1, 1]), y: ethers.utils.defaultAbiCoder.encode(['uint'], [2]) },
    { x: ethers.utils.defaultAbiCoder.encode(['uint', 'uint'], ['57896044618658097711785492504343953926634992332820282019728792003956564819967', '57896044618658097711785492504343953926634992332820282019728792003956564819967']), y: ethers.utils.defaultAbiCoder.encode(['uint'], ['115792089237316195423570985008687907853269984665640564039457584007913129639934']) },
    ...Array.from(Array(31), (_, i) => {
        const x0 = ethers.BigNumber.from(ethers.utils.randomBytes(i + 1));
        const x1 = ethers.BigNumber.from(ethers.utils.randomBytes(i + 1));
        const y0 = x0.add(x1);
        const x = ethers.utils.defaultAbiCoder.encode(['uint', 'uint'], [x0, x1]);
        const y = ethers.utils.defaultAbiCoder.encode(['uint'], [y0]);
        return { x: x, y: y };
    }),
    ...Array.from(Array(0xf), () => {
        const b255 = ethers.BigNumber.from(2).pow(255);
        const x0 = ethers.BigNumber.from(ethers.utils.randomBytes(32)).mod(b255);
        const x1 = ethers.BigNumber.from(ethers.utils.randomBytes(32)).mod(b255);
        const y0 = x0.add(x1);
        const x = ethers.utils.defaultAbiCoder.encode(['uint', 'uint'], [x0, x1]);
        const y = ethers.utils.defaultAbiCoder.encode(['uint'], [y0]);
        return { x: x, y: y };
    }),
];
