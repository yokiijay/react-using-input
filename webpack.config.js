const path = require('path')
const pkg = require('./package.json')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
    library: pkg.name,
    libraryTarget: 'commonjs2',
    // libraryExport: 'default',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          } 
        }
      }
    ]
  },
  externals: {
    react: 'react'
  }
}