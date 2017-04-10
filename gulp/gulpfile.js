/**
 * Created by user on 2017/4/10.
 */
var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('main',function(){
    gulp.src(['libs/index1.js','libs/index2.js'])
        .pipe(concat('index.js'))
        .pipe(gulp.dest('js'));
})