
/* curent gulpfile config */
var gulp=require('gulp');
var sass=require('gulp-sass');
var browserSync=require('browser-sync').create();

/* Sass init */

gulp.task('sass',function(){
	gulp.src('sass/**/*.scss')
	.pipe(sass({
		sourceComments:true,
		outputStyle:'compressed',
		errLogToConsole:true
	}))
	.pipe(gulp.dest('css'))
	.pipe(browserSync.stream());
})

/* sass watch */

gulp.task('watch',['sass'],function(){
	gulp.watch('sass/**/.scss',['sass']);
})



gulp.task('serve',['sass'],function(){
	browserSync.init({
		server:"./"
	});
gulp.watch('sass/**/*.scss',['sass']);
gulp.watch('**/*.html').on('change',browserSync.reload);
});


gulp.task('default', ['serve'], function(){

})