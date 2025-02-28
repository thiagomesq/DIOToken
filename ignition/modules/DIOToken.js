const { buildModule } = require('ignition-core');

module.exports = buildModule('DIOTokenModule', async (m) => {
    const DIOToken = await m.contract('DIOToken');
    return { DIOToken };
});