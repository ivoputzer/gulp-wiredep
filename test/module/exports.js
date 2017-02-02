const wiredep = require('../..')
const equal = require('assert').equal

test('module/exports', function () {
  test('is callable', function () {
    equal(typeof wiredep, 'function')
  })
})
