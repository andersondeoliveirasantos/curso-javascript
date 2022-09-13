const path = require('path') // CommonJS

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'Public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {},
  devtool: 'source-map'
}
