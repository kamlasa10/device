var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: "app"
  });
  gulp.watch("app/sass/**/*.scss", ['sass']);
  gulp.watch("app/*.html").on('change', browserSync.reload);
  gulp.watch("app/js/**/*.js").on('change', browserSync.reload);
});
gulp.task('sass', function() {
  return gulp.src("app/sass/**/*.scss")
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(gulp.dest("app/css"))
      .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);