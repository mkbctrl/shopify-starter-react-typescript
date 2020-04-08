const path = require('path')
const APP_DIR = path.resolve(__dirname, 'src')

module.exports = {
  mode: 'production',
  entry: `${APP_DIR}/scripts/common.js`,
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'application.js'
  }
}