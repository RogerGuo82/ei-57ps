/**
 *  @author 应开翔
 *  @update 2016-7-1
 *  @update 2016-7-7
 *    添加图片压缩
 *  @Email: rubykaikai@gmail.com
 *  @QQ: 540719103
 */

var gulp       = require('gulp');
var htmlConcat = require('gulp-content-includer');
var livereload = require('gulp-livereload');
var sass       = require('gulp-ruby-sass');
var imagemin   = require('gulp-imagemin');
var cache      = require('gulp-cache');

// 说明
gulp.task('help', function(){
	console.log('- gulp help          帮助说明');
	console.log('- gulp dev           调试模式');
	console.log('- gulp pack          项目打包');
});

// 调试
gulp.task('dev', ['reload', 'sass', 'html', 'imagemin']);

// 自动刷新
gulp.task('reload', function(){
	livereload.listen();
	gulp.watch('./src/**/*.*',function(file){
      livereload.changed(file.path);
  });
});

// 编译sass
gulp.task('sass', function(){
	gulp.watch('src/sass/*.scss', function(file){
		return sass('src/sass/*.scss', {style:'expanded'})
      .pipe(gulp.dest('dist/css/'));
	});
});

// 合并html
gulp.task('html', function(){
  gulp.watch('src/*.html', function(){
    gulp.src('src/*.html')
      .pipe(htmlConcat({
        includerReg:/<!\-\-include\s+"([^"]+)"\-\->/g
      }))
      .pipe(gulp.dest('dist/'))
  });
});

// 图片压缩
gulp.task('imagemin', function(){
  gulp.watch('./src/**/*.*',function(file){
    gulp.src('./src/img/*.{png,jpg,gif,ico}')
      .pipe(cache(imagemin({
        optimizationLevel:5,
        progressive: true
      })))
      .pipe(gulp.dest('dist/img/'))
  });
});