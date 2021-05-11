'use strict';


var Fiber = require('fibers');
var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var watch = require('gulp-watch');

sass.compiler = require('sass');
gulp.task('sass', function () {
    return gulp.src('./sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});
gulp.task('sass:watch', function () {
  //gulp.watch('./sass/**/*.scss',['sass']) //Değişen kısım
});

gulp.task('views', function buildHTML() {
    return gulp.src('views/*.pug')
    .pipe(pug({
      // Your options in here.
    }))
});