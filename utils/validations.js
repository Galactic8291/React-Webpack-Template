// Validation Command
const chalk = require('chalk')

const errString = 'You must pass a env flag!!!'
const ERR_NO_ENV_FLAG = chalk.red(errString)

module.exports = {
  ERR_NO_ENV_FLAG
}

