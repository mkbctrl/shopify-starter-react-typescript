const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DIR_SRC = path.resolve(__dirname, 'assets/src')
const DIR_PROD = path.resolve(__dirname, 'assets')

module.exports = {
  entry: {
    scripts: `${DIR_SRC}/scripts/utils/index.ts`,
    styles: `${DIR_SRC}/styles/index.ts`
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          `${DIR_SRC}/styles/`
        ],
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