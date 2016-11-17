'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const ngHtml2Js = require('browserify-ng-html2js');
const browserifyCss = require('browserify-css');


module.exports = function (srcPath, destPath, env, errorHandler) {
    errorHandler = errorHandler || defaultErrorHandler;
    let bundler = browserify(srcPath + "/app.js", {
        debug: (env === "DEV")
    }).transform(ngHtml2Js({
        module: "templates"
    })).transform(browserifyCss, {
        "autoInject": true,
        "minify": true,
        "rootDir": ".",
        "global": true
    }).transform(babelify);

    let stream = bundler.bundle().on('error', errorHandler)
        .pipe(source("app.js"))
        .pipe(buffer());

    if (env === "DEV") {
        stream = stream.pipe(sourcemaps.init({
            loadMaps: true
        })).pipe(sourcemaps.write("./"))
    }
    return stream.pipe(gulp.dest(destPath));
};

function defaultErrorHandler(er) {
    throw er;
}
