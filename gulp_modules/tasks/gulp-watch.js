//----------------------------------------------------------------------------
// gulp-compass: Watch update files
//----------------------------------------------------------------------------

var gulp 				= require("gulp");
var gulpUtil		= require("gulp-util");
var config 			= require("../config");
var browserSync	= require("browser-sync");
var run					= require("run-sequence");
var livereload 	= require('gulp-livereload');
var path				= config.path;
var devPath 		= path.dev;
var deployPath 	= path.deploy;


gulp.task("watch", function()
	{
		run(
				"bs:build-dev",
				["watch:sass","watch:coffee","watch:es6","watch:typescript","watch:page","watch:swf","watch:images"]
		);
	}
);

//----------------------------------------------------------------------------
// sass
//-------------------------------------------------------------- --------------

gulp.task("watch:sass", function()
	{
		gulp.watch(devPath+path.sass+"**/*.sass", ["compass:dev"]);
	}
);

//----------------------------------------------------------------------------
// coffeescript
//----------------------------------------------------------------------------

gulp.task("watch:coffee", function()
	{
		gulp.watch(devPath+path.coffee+"**/*.coffee", ["coffee:dev"]).on("change", browserSync.reload);
	}
);

//----------------------------------------------------------------------------
// es6
//----------------------------------------------------------------------------

gulp.task("watch:es6", function()
	{
		// gulp.watch(devPath+path.es6+"**/*.es6", ["browserify:dev"]).on("change", browserSync.reload);
		gulp.watch(devPath+path.es6+"**/*.jsx", ["browserify:dev"])
		gulp.watch(devPath+path.es6+"**/*.es6", ["browserify:dev"])
		gulp.watch(devPath+path.es6+path.browserifyMain, ["browserify:dev","browserify:dev-lib"])
	}
);

//----------------------------------------------------------------------------
// typescript
//----------------------------------------------------------------------------

gulp.task("watch:typescript", function()
	{
		gulp.watch(devPath+path.ts+"**/*.ts", ["coffee:dev"]).on("change", browserSync.reload);
	}
);


//----------------------------------------------------------------------------
// page
//----------------------------------------------------------------------------

gulp.task("watch:page", function()
	{
		gulp.watch(devPath+"**/*.html", ["bs:reload"]).on("change", browserSync.reload);
		gulp.watch(devPath+"**/*.php", ["bs:reload"]).on("change", browserSync.reload);
	}
);


//----------------------------------------------------------------------------
// swf
//----------------------------------------------------------------------------

gulp.task("watch:swf", function()
	{
		gulp.watch(devPath+path.swf+"**/*.swf", ["bs:reload"]);
	}
);

//----------------------------------------------------------------------------
// images
//----------------------------------------------------------------------------

gulp.task("watch:images", function()
	{
		gulp.watch(devPath+path.images+"**/*.png",  ["compass:dev"]).on("change", browserSync.reload);
		gulp.watch(devPath+path.images+"**/*.jpg",  ["bs:reload"]);
		gulp.watch(devPath+path.images+"**/*.jpeg", ["bs:reload"]);
		gulp.watch(devPath+path.images+"**/*.gif",  ["bs:reload"]);
	}
);
