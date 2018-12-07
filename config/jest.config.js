module.exports = {
  rootDir: '../',
  moduleNameMapper: {
    '\\.(css|scss)$': require.resolve('../test/style-mock.js')
  },
  setupTestFrameworkScriptFile: require.resolve('../test/jest.setup.js')
};
