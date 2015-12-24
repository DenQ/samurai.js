var gulp = require('gulp');
var nodemon = require('nodemon');
var watch = require('gulp-watch');

nodemon({
    script: 'app.js',
    ext: 'js html',
    env: {
        'NODE_ENV': 'development'
    }
});

gulp.task('watch', function () {
    watch(['server.js', './app/**/*'], function () {
        nodemon.restart();
    });
});

gulp.task('default', function() { });