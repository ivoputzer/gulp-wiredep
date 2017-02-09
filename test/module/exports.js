test('module/exports', function () {
  const exports = require('../..')
  test('is callable', function () {
    require('assert').equal(typeof exports, 'function')
  })
})
