const isProduction = process.env.ENVIRONMENT == 'production'
const log = isProduction ? () => {} : console.log
const logErr = isProduction ? () => {} : console.error

module.exports = {
  log,
  logErr,
  isProduction,
}
