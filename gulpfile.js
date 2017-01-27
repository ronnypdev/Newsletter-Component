var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer');

 //Scripts Task
 // Uglyfies
gulp.task('srcipts', function() {
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('build/js'));
});

//Styles Task
gulp.task('styles', function() {
    gulp.src('css/sass/**/*.scss')
        .pipe(sass({
        	includePaths: require('node-bourbon').includePaths,
        	outputStyle: 'compressed',
            quiet: true

        }).on('error', sass.logError))
        .pipe(prefix('last 2 versions'))
        .pipe(gulp.dest('./css/'))
});

//Watch Task
gulp.task('watch', function() {

	gulp.watch('js/*.js', ['srcipts']);
	gulp.watch('css/sass/**/*.scss',['styles']);
	

	
});

gulp.task('default', ['srcipts', 'styles', 'watch']);