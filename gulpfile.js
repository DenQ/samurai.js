var gulp = require('gulp');
var nodemon = require('nodemon');
var watch = require('gulp-watch');

nodemon({
    script: 'server.js',
    ext: 'js html',
    env: {
        'NODE_ENV': 'development'
    }
});

gulp.task('watch', function () {
    watch('server.js', function () {
        nodemon.restart();
        console.log('Server has restarted...');
    });
});

gulp.task('default', function() { });