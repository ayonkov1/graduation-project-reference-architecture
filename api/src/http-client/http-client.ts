const got = require('got')

module.exports = {
  get: (url: string) => {
    return got(url)
  },
}
