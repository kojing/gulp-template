//--------------------------------------------------
// gulp-livereload: Auto reload brower
//--------------------------------------------------
var gulp				= require("gulp");
var livereload	= require("gulp-livereload");
var config			= require('../config');
var path				= config.path;
var devPath 		= path.dev;
var deployPath 	= path.deploy;


gulp.task('livereload:start',
	function()
	{
		livereload.listen();
	}
);


gulp.task('livereload:reload',
	function()
	{
		livereload.changed();
	}
);
