/**
 * gulp 的作用：
 * 1. 检查 js 文件
 * https://github.com/thu/web-tools-1707n
 * Date: 2017/12/15 10:19
 */

// gulp 的配置文件

// 1. 安装
// 2. 引入
const gulp = require('gulp');
const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

// 3. 定义一个 gulp 的任务 task
gulp.task('default', () => {
    // console.log('Hello, gulp!');
    gulp.watch('./js/*.js', () => {
        gulp.run('scripts');
    });
});

gulp.task('hint', () => {
    gulp.src('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// gulp-concat, gulp-rename, gulp-uglify,
gulp.task('scripts', () => {
    gulp.src(['./js/jquery-3.2.1.js', './js/toggle.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass', () => {
    gulp.src('./sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

