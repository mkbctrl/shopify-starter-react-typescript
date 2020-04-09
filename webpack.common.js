const path = require('path')
const SRC_DIR = path.resolve(__dirname, 'src')

module.exports = {
  entry: {
    scripts: `${SRC_DIR}/scripts/shared/index.ts`,
    "cart-drawer": `${SRC_DIR}/scripts/shared/index-react-cart.ts`
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
    path: path.resolve(__dirname, 'assets'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}