const { generatePalette, generateScheme } = require('./src/appearance');

module.exports = {
  configureWebpack: config => {
    generatePalette();
    generateScheme();
  }
}