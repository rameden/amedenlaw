module.exports = function(gulp, $, browserSync, reload, merge, paths, files, del) {
  return function() {
    gulp.src('node_modules/uikit/src/fonts/*')
    .pipe($.changed(paths.fonts))
    .pipe(gulp.dest(paths.fonts));
  };
};
