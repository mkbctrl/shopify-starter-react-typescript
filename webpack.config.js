const path = require('path')
const SRC_DIR = path.resolve(__dirname, 'src')

module.exports = {
  mode: 'production',
  entry: {
    scripts: `${SRC_DIR}/scripts/shared/index.ts`
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'application.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}