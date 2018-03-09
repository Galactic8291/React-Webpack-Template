// Common Paths For Configs
const path = require('path')
const root = path.resolve(__dirname, '/')

module.exports = {
  rootPath: root,
  entryPath: path.join(root, 'src'),
  outputPath: path.join(root, 'dist')
}

