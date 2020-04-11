const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DIR_SRC = path.resolve(__dirname, 'src')
const DIR_PROD = path.resolve(__dirname, 'assets')

// TODO: Block compilation of styles.bundle.js
module.exports = {
  entry: {
    scripts: `${DIR_SRC}/scripts/utils/index.ts`,
    'react-apps': `${DIR_SRC}/scripts/react-apps/react-cart/index.ts`,
    styles: `${DIR_SRC}/styles/index.js`
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
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // options...
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
    extensions: ['.tsx', '.ts', '.js']
  }
}