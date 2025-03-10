const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemap = require('gulp-sourcemaps');

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sourcemap.init())
    .pipe(sass({ outputStyle: 'compressed'}))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('./dist/css'));
}

exports.default = styles;
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}