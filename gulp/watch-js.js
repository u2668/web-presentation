'use strict';

const _ = require('lodash');
const gulp = require('gulp');
const util = require('gulp-util');

module.exports = function (srcPath, checkJs, makeBundle) {
    let isOk;
    gulp.watch([srcPath + '/**/*.js', srcPath + '/**/*.html'], () => {
        isOk = true;
        checkJs().on('error', commonErrorHandler);
        makeBundle("DEV", bundleErrorHandler).on("end", () => successHandler());
    });

    function bundleErrorHandler(er) {
        util.log(_.pick(er, ['filename', 'loc', 'codeFrame']));
        commonErrorHandler();
    }

    function commonErrorHandler() {
        util.beep();
        util.log("== watch error ==");
        isOk = false;
    }

    function successHandler() {
        if (isOk) {
            util.log(`== watch. bundle created ==`);
        }
    }
};
