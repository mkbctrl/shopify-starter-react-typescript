const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DIR_SRC = path.resolve(__dirname, 'src')
const DIR_PROD = path.resolve(__dirname, 'assets')

module.exports = {
  entry: {
    assets: `${DIR_SRC}/index.js`,
    'react-apps': `${DIR_SRC}/scripts/react-apps/react-cart/index.ts`
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].bundle.css`
    })
  ],
  output: {
    path: DIR_PROD,
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss']
  }
}