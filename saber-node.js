const path = require('path')

exports.getWebpackConfig = function(config, { type }) {
  config.resolve.alias['#'] = path.resolve(__dirname, '')
  config.resolve.alias['#components'] = path.resolve(__dirname, 'components')
  config.resolve.alias['#content'] = path.resolve(__dirname, 'content')
  return config
}
