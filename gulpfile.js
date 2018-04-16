var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var del = require('del');

gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  })
})

gulp.task('clean', function () {
  del([paths.tmp, paths.dist]);
});


gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('src/scss/**/*.sass', ['sass']);
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);
})
