'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del'),
    publicPath = "public/",
    srcPath = "src/";

// Default task
gulp.task('default', ['clean'], function () {
    gulp.start('styles');
});

// Develop task
gulp.task('develop', function () {
    gulp.start('styles');
    gulp.start('watch');
});

// Clean task
gulp.task('clean', function () {
    return del([
        publicPath + 'css/'
    ]);
});

// Style preprocessing
gulp.task('styles', function () {
    gulp.src(srcPath + '/styles/global.scss')
        .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
        .pipe(gulp.dest(publicPath + 'css'));
});

// Watch
gulp.task('watch', function () {
    // Watch .scss files
    gulp.watch(srcPath + 'styles/**/*.scss', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.start('styles');
    });

});