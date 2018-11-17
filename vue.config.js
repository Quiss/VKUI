const { generatePalette, generateScheme } = require('./src/appearance');

module.exports = {
  devServer: {
    proxy: 'http://localhost:4000'
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
    	generatePalette();
		generateScheme();
    } else {
    	generatePalette();
		generateScheme();
    }
  }
}