//--------------------------------------------------
// gulp-browser-sync: Build Local Server
//--------------------------------------------------
var gulp				= require("gulp");
var browserSync	= require("browser-sync");
var config			= require('../config');
var path				= config.path;
var devPath 		= path.dev;
var deployPath 	= path.deploy;


gulp.task('bs:build-dev',
	function()
	{
		browserSync(
			{
				port		: 3307,
				browser	: ["google chrome"],
				server	: {
					baseDir: devPath
				}
			}
		);
	}
);


gulp.task('bs:build-deploy',
	function()
	{
		browserSync(
			{
				port		: 8888,
				browser	: ["google chrome"],
				server	: {
					baseDir: deployPath
				}
			}
		);
	}
);


gulp.task('bs:reload',
	function()
	{
		return browserSync.reload({stream:true});
	}
);
