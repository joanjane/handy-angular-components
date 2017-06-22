var gulp = require('gulp'),
    sass = require('gulp-sass');

//style paths
var sassFiles = 'src/**/*.scss',
    cssDest = '../dist/';

gulp.task('styles', function () {
    gulp.src(sassFiles)
        .pipe(sass({ style: 'compressed' })
        .on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

gulp.task('watch', ['styles'], function () {
    gulp.watch(sassFiles, ['styles']);
});

gulp.task('default', ['styles']);
