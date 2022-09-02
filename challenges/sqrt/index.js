const { ethers } = require("hardhat");

module.exports = [
    { x: ethers.utils.defaultAbiCoder.encode(['uint'], [0]), y: ethers.utils.defaultAbiCoder.encode(['uint'], [0]) },
    { x: ethers.utils.defaultAbiCoder.encode(['uint'], [1]), y: ethers.utils.defaultAbiCoder.encode(['uint'], [1]) },
    { x: ethers.utils.defaultAbiCoder.encode(['uint'], [2]), y: ethers.utils.defaultAbiCoder.encode(['uint'], [1]) },
    { x: ethers.utils.defaultAbiCoder.encode(['uint'], [3]), y: ethers.utils.defaultAbiCoder.encode(['uint'], [1]) },
    { x: ethers.utils.defaultAbiCoder.encode(['uint'], [4]), y: ethers.utils.defaultAbiCoder.encode(['uint'], [2]) },
    { x: ethers.utils.defaultAbiCoder.encode(['uint'], [5]), y: ethers.utils.defaultAbiCoder.encode(['uint'], [2]) },
    { x: ethers.utils.defaultAbiCoder.encode(['uint'], [6]), y: ethers.utils.defaultAbiCoder.encode(['uint'], [2]) },
    { x: ethers.utils.defaultAbiCoder.encode(['uint'], [7]), y: ethers.utils.defaultAbiCoder.encode(['uint'], [2]) },
    ...Array.from(Array(15), (_, i) => {
        const y0 = ethers.BigNumber.from(ethers.utils.randomBytes(i + 1));
        const x0 = y0.mul(y0);
        const x = ethers.utils.defaultAbiCoder.encode(['uint'], [x0]);
        const y = ethers.utils.defaultAbiCoder.encode(['uint'], [y0]);
        return { x: x, y: y };
    }),
    ...Array.from(Array(15), (_, i) => {
        const y0 = ethers.BigNumber.from(ethers.utils.randomBytes(i + 1));
        const x0 = y0.mul(y0);
        const x1 = x0.add(ethers.BigNumber.from(ethers.utils.randomBytes(i + 1)).mod(y0));
        const x2 = x1.add(ethers.BigNumber.from(ethers.utils.randomBytes(i + 1)).mod(y0));
        const x = ethers.utils.defaultAbiCoder.encode(['uint'], [x2]);
        const y = ethers.utils.defaultAbiCoder.encode(['uint'], [y0]);
        return { x: x, y: y };
    }),
    ...Array.from(Array(8), (_, i) => {
        const y0 = ethers.BigNumber.from(ethers.utils.randomBytes(16));
        const x0 = y0.mul(y0);
        const x = ethers.utils.defaultAbiCoder.encode(['uint'], [x0]);
        const y = ethers.utils.defaultAbiCoder.encode(['uint'], [y0]);
        return { x: x, y: y };
    }),
    ...Array.from(Array(8), (_, i) => {
        const y0 = ethers.BigNumber.from(ethers.utils.randomBytes(16));
        const x0 = y0.mul(y0);
        const x1 = x0.add(ethers.BigNumber.from(ethers.utils.randomBytes(16)).mod(y0));
        const x2 = x1.add(ethers.BigNumber.from(ethers.utils.randomBytes(16)).mod(y0));
        const x = ethers.utils.defaultAbiCoder.encode(['uint'], [x2]);
        const y = ethers.utils.defaultAbiCoder.encode(['uint'], [y0]);
        return { x: x, y: y };
    }),
];
