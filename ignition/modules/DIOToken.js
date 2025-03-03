const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule('DIOTokenModule', (m) => {
    const DIOToken = m.contract('DIOToken');
    return { DIOToken };
});