/* eslint-disable */
var gulp = require('gulp'),
  path = require('path'),
  del = require('del'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  wait = require("gulp-wait"),
  sourcemaps = require('gulp-sourcemaps'),
  cleanCSS = require('gulp-clean-css');

const rootFolder = path.join(__dirname);
const srcFolder = path.join(rootFolder, 'src');
const distFolder = '../dist/handy-angular-components';
const sassFiles = './src/**/*.scss';

gulp.task('clean', function () {
  // Delete contents but not dist folder to avoid broken npm links
  // when dist directory is removed while npm link references it.
  return del([
      distFolder + '/**/*.css',
      distFolder + '/**/*.scss',
      distFolder + '/**/*.md',
      distFolder + '/assets'
    ], {
      force: true
    });
});

gulp.task('copy:readme', function () {
  return gulp.src(['../README.md'])
    .pipe(gulp.dest(distFolder));
});

gulp.task('copy:sass', function () {
  return gulp.src([sassFiles])
    .pipe(gulp.dest(`${distFolder}`));
});

gulp.task('build:styles', function () {
  return gulp.src(sassFiles)
    .pipe(wait(500))
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded', sourceMap: true })
      .on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(distFolder))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(distFolder));
});

gulp.task('watch:styles', function () {
  return gulp.watch(sassFiles, ['build:styles']);
});

gulp.task('build', ['copy:readme', 'copy:sass', 'build:styles']);
gulp.task('rebuild', ['clean', 'build']);
gulp.task('default', ['rebuild']);
