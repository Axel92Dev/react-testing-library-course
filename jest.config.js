const {jest: jestConfig} = require('kcd-scripts/config')

module.exports = Object.assign(jestConfig, {
  setupTestFrameworkScriptFile: './jestSetup.js',
})
