
module.exports = function* (headers) {
  var remaining = parseInt(headers['x-ratelimit-remaining'], 0)
  if (remaining) return
  yield function (done) {
    var unix = parseInt(headers['x-ratelimit-reset'], 0)
    setTimeout(done, 1000 * unix  - Date.now())
  }
}