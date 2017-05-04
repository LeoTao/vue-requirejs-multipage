var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
	return gulp.src('./source/sass/**/import.scss')
		.pipe(sass())
		.pipe(gulp.dest('./dist/css/'));
});