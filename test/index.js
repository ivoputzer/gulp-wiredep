const {equal, ok} = require('assert')

test('gulp-wiredep', function () {
  const wiredep = require('..')
  test('exports a callable', function () {
    equal(typeof wiredep, 'function')
  })
  test('exports a callable 1', function () {
    equal(wiredep().constructor.name, 'DestroyableTransform')
  })
})
