//----------------------------------------------------------------------------
// gulp-coffee: Compile CoffeeScript
//----------------------------------------------------------------------------

var gulp 				= require("gulp");
var gulpUtil		= require("gulp-util");
var config 			= require("../config");
var coffee			= require("gulp-coffee");
var sourceMaps	= require("gulp-sourcemaps");
var plumber			= require("gulp-plumber");
var notify			= require("gulp-notify");
var path				= config.path;
var devPath 		= path.dev;
var deployPath 	= path.deploy;

gulp.task("coffee:dev", function()
	{
		return gulp.src(devPath+path.coffee+"**/*.coffee")
		.pipe(plumber({errorHandler: notify.onError("<%= error.message %>")}))
		.pipe(sourceMaps.init())
		.pipe(coffee({bare:true}).on("error", gulpUtil.log))
		.pipe(sourceMaps.write("./maps"))
		.pipe(gulp.dest(devPath+path.js))
	}
);

gulp.task("coffee:deploy", function()
	{
		return gulp.src(devPath+path.coffee+"**/*.coffee")
		.pipe(plumber({errorHandler: notify.onError("<%= error.message %>")}))
		.pipe(coffee({bare: true}).on("error", gulpUtil.log))
		.pipe(gulp.dest(deployPath+path.js))
	}
);
