const gulp = require('gulp');
const jshint = require('gulp-jshint');

module.exports = function (srcPath) {
    return gulp.src(srcPath + '/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
};