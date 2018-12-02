module.exports = {
  rootDir: '../',
  moduleNameMapper: {
    '\\.css$': require.resolve('../test/style-mock.js')
  },
  setupTestFrameworkScriptFile: require.resolve('../test/jest.setup.js'),
}
