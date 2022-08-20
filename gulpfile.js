var gulp = require('gulp');

gulp.task('hello', function() {
    return new Promise(function(resolve, reject) {
    console.log('Hello Zell');
    resolve();
});
});