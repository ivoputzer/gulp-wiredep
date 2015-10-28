gulp-wiredep
===

## standard usage

```
var gulp = require('gulp')
  , wiredep = require('gulp-wiredep')

gulp.task('bower', function () {
  gulp.src('./src/footer.html')
    .pipe(wiredep({
      optional: 'configuration',
      goes: 'here'
    }))
    .pipe(gulp.dest('./dest'));
});
```

## usage with plugin loader

```
var gulp = require('gulp')
  , plug = require('gulp-plugin-loader')

gulp.task('bower', function () {
  gulp.src('./src/footer.html')
    .pipe(plug.wiredep({
      optional: 'configuration',
      goes: 'here'
    }))
    .pipe(gulp.dest('./dest'));
});
```
