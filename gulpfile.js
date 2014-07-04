// Gulp
var gulp = require('gulp');

	// Plugins
	var sass = require('gulp-sass'),
	    autoprefixer = require('gulp-autoprefixer'),
	    minifycss = require('gulp-minify-css'),
	    concat = require('gulp-concat'),
	    notify = require('gulp-notify'),
	    clean = require('gulp-clean'),
	    rename = require('gulp-rename');
	    livereload = require('gulp-livereload');
    
	// Paths
	var path = {
		scss: 'assets/sass/**/*.scss'
	};    
    
	// CSS
	gulp.task('styles', function() {
		return gulp.src(path.scss)
			.pipe(sass({ style: 'expanded' }))
			.pipe(autoprefixer('last 1 version'))
			.pipe(minifycss())
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest('assets/css'))
			.pipe(notify({ message: 'Styles compiled! Righteous!' }));
	});
	
	//Clean
	gulp.task('clean', function() {
	  return gulp.src(['assets/css'], {read: false})
	    .pipe(clean());
	});	
	
	// Default task
	gulp.task('default', ['clean'], function() {
		gulp.start('styles');
	});
	
	// Watch
	gulp.task('watch', function() {
		
		// Watch .scss files
		gulp.watch(path.scss, ['styles']);
		
	});
	
	