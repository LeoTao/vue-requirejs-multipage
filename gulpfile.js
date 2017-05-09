var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('sass', function () {
	return gulp.src('./source/sass/**/import.scss')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(rename(function (path) {
		    path.basename = "main";
		}))
		.pipe(gulp.dest('./dist/css/'));
});