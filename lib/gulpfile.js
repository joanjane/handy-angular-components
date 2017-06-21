var gulp = require('gulp');
var sass = require('gulp-sass');

//style paths
var sassFiles = 'src/assets/styles/hac.scss',
    allSassFiles = 'src/**/*.scss',
    cssDest = '../dist/';

gulp.task('styles', function () {
    gulp.src(allSassFiles)
        .pipe(sass({ style: 'compressed' })
        .on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

gulp.task('watch', ['styles'], function () {
    gulp.watch(allSassFiles, ['styles']);
});

gulp.task('default', ['styles']);
