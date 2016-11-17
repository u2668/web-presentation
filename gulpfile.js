'use strict';

const paths = {
    src: './src',
    dest: './site'
};

const gulp = require('gulp');
const clean = require('gulp-clean');
const checkJs = require('./gulp/check-js').bind(null, paths.src);
const makeBundle = require('./gulp/make-bundle').bind(null, paths.src, paths.dest);
const watchJs = require('./gulp/watch-js').bind(null, paths.src, checkJs, makeBundle);

//<editor-fold desc="html">
gulp.task('clean-html', () =>
    gulp.src(paths.dest + '/**/*.html', {read: false})
        .pipe(clean({
            force: true
        }))
);

gulp.task('copy-html', ['clean-html'], () =>
    gulp.src(paths.src + '/index.html')
        .pipe(gulp.dest(paths.dest))
);

gulp.task('watch-html', () => gulp.watch([paths.src+ '/index.html'], ['copy-html']));
//</editor-fold>

gulp.task('check-js', checkJs);
gulp.task('clean-js', () =>
    gulp.src([paths.dest + '/**/*.js', paths.dest + '/**/*.map'], {read: false})
        .pipe(clean({
            force: true
        }))
);
gulp.task('make-app-bundle', ['clean-js'], () => makeBundle("PROD"));

gulp.task('watch-js', watchJs);

gulp.task('watch', ['watch-js', 'watch-html']);
gulp.task('build', ['copy-html', 'check-js', 'make-app-bundle']);