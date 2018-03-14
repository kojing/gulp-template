//----------------------------------------------------------------------------
// gulp-compass: Watch update files
//----------------------------------------------------------------------------

var gulp 				= require("gulp");
var gulpUtil		= require("gulp-util");
var config 			= require("../config");
var cmq 				= require('gulp-combine-media-queries');
var path				= config.path;
var devPath 		= path.dev;
var deployPath 	= path.deploy;


gulp.task('cmq:dev', function () {
	gulp.src(devPath+path.css+"**/*.css")
		.pipe(cmq(
			{
				log: true
			}
		))
		.pipe(gulp.dest(devPath+path.css));
});



gulp.task('cmq:deploy', function () {
	gulp.src(deployPath+path.css+"**/*.css")
		.pipe(cmq(
			{
				log: false
			}
		))
		.pipe(gulp.dest(deployPath+path.css));
});
