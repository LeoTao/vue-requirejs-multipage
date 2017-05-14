var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var runSequence = require('run-sequence');

gulp.task('sass', function () {
	return gulp.src('./source/sass/**/import.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(postcss([autoprefixer(['iOS >= 8', 'Android >= 4.1'])]))
		.pipe(rename(function (path) {
		    path.basename = "main";
		}))
		.pipe(gulp.dest('./dist/css/'));
});

gulp.task('js', function () {
	return gulp.src('./source/js/**/*.js')
		.pipe(gulp.dest('./dist/js/'));
});

gulp.task('default', function(callback) {
    runSequence('sass', 'js')
})