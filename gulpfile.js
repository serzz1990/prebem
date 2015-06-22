var gulp = require('gulp');
var prebem = require('prebem');





gulp.task('prebem', function() {

	var html = '.html';
	var css  = '.css';

	var files = 'examples/**/*'+html;

	return gulp.src(files)
		.pipe(prebem({
			styleFile : 'css',
			stylePath : '',
			htmlPath  : ''
		}));



});


gulp.task('default', ['prebem']);