
/**
 * @file
 * Gulpfile to support theming in the JSA theme.
 */

(function () {

	'use strict';
	 
	var gulp = require('gulp');
	var sass = require('gulp-sass');
	var sourcemaps = require('gulp-sourcemaps');
	 
	gulp.task('sass', function () {
	  return gulp.src('scss/**/*.scss')
	  	.pipe(sourcemaps.init())
	    .pipe(sass().on('error', sass.logError))
	    .pipe(sourcemaps.write())
	    .pipe(gulp.dest('css'));
	});
	 
	gulp.task('sass:watch', function () {
	  gulp.watch('scss/**/*.scss', ['sass']);
	});

}());