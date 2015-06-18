var gulp = require('gulp');





gulp.task('prebem', function() {

	var html = '.html';
	var css  = '.css';

	var htmls = 'exemples/**/*'+html;

	gulp.src(htmls)
		.pipe(function(){
			console.log(arguments);
		})

});

gulp.task('default', ['prebem']);