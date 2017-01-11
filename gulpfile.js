var gulp = require('gulp');
connect = require('gulp-connect');

var outputDir = 'Portfolio';

gulp.task('test', function(){
  console.log('test 1 2');
});

gulp.task('connect', function(){
  return connect.server({
    root:[outputDir],
    port: 9090,
    liveReload: true
  });
});

gulp.task('default', ['test', 'connect']);
