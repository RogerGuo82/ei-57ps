/**
 *  @author 应开翔
 *  @update 2016-7-1
 *  @Email: rubykaikai@gmail.com
 *  @QQ: 540719103
 */

var gulp       = require('gulp');
var htmlConcat = require('gulp-content-includer');
var livereload = require('gulp-livereload');
var sass       = require('gulp-ruby-sass');

// 说明
gulp.task('help', function(){
	console.log('- gulp help          显示说明');
	console.log('- gulp pack          项目打包');
});

// 自动刷新
gulp.task('reload', function(){
	livereload.listen();
	gulp.watch('./src/**/*.*',function(file){
        livereload.changed(file.path);
    });
});