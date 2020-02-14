const path = require('path')
const pkg = require('./package.json')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
    library: pkg.name,
    libraryTarget: 'umd',
    // libraryExport: 'default',  // enable if export only the default one
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  // externals: {
  //   react: 'react'
  // },
  // resolve: {
  //   alias: {
  //     react: path.resolve('./node_modules/react')
  //   }
  // }
}