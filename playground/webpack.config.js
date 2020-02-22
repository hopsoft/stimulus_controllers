const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: [path.resolve(__dirname, '../packages'), 'node_modules']
  },
  devServer: {
    port: 3000,
    contentBase: './src',
    watchContentBase: true,
    index: 'html/autosuggest.html'
  }
}
