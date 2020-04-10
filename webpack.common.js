const path = require('path')
const DIR_SRC = path.resolve(__dirname, 'assets/src')
const DIR_PROD = path.resolve(__dirname, 'assets')
const DIR_OUT = {
  scripts: `${DIR_SRC}/scripts`,
  styles: `${DIR_SRC}/styles`
}

module.exports = {
  entry: {
    scripts: `${DIR_SRC}/scripts/utils/index.ts`
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: DIR_PROD,
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}