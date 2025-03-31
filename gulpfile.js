const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemap = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin')
const cleancss = require('gulp-clean-css')

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(cleancss())
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images);
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}