var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass');
	// plumber = require('gulp-plumber');

// Scripts Task
// Uglifies, 
gulp.task('scripts', function(){
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('build/minjs'));

});


// Styles
// should be the sass task
gulp.task('sass', function(){
	console.log('ya bish');
	// gulp.src('css/wawr.scss')
	// .pipe(sass())
	// .pipe(gulp.dest('css/wawr2.css'))
});

// Sample Sass Task
// gulp.task('new', function () {
//     return gulp.src('src/scss/app.scss')
//         .pipe(sass({sourcemap: true, sourcemapPath: '../scss'}))
//         .on('error', function (err) { console.log(err.message); })
//         .pipe(gulp.dest('dist/css'));
// });


// Watch Task
gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'sass', 'watch' ]);

