// Webpack Config
const webpackMerge = require('webpack-merge')
const { ERR_NO_ENV_FLAG } = require('./utils/paths')

// Add addons feature

module.exports = () => {
  const env = process.env.NODE_ENV

  if(!env) {
    throw new Error(ERR_NO_ENV_FLAG)
  }

  const envConfig = require(`./utils/builds/${env}.js`)
  const commonConfig = require('./utils/config')
  const mergedConfig = webpackMerge(
    commonConfig,
    envConfig
  )

  return mergedConfig
}

