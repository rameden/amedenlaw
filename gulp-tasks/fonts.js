module.exports = function(gulp, $, browserSync, reload, merge, paths, files, del) {
  return function() {
    gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.build));
  };
};
