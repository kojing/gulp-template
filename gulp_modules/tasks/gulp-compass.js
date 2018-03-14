//----------------------------------------------------------------------------
// gulp-compass: Compile with Compass
//----------------------------------------------------------------------------

var gulp					= require("gulp");
var gulpUtil			= require("gulp-util");
var compass				= require("gulp-compass");
var minifyCss 		= require('gulp-minify-css');
var autoprefixer 	= require('gulp-autoprefixer');
var config				= require("../config");
var plumber				= require("gulp-plumber");
var notify				= require("gulp-notify");
var browserSync		= require("browser-sync");

var path				= config.path;
var devPath 		= path.dev;
var deployPath 	= path.deploy;


gulp.task("compass:dev", function()
	{
		return gulp.src(devPath+path.sass+"**/*.sass")
		.pipe(plumber({errorHandler: notify.onError("<%= error.message %>")}))
		.pipe(
			compass(
				{
					// config_file						: path.compass,
					relative 							: true,
					sourcemap							: true,
					style									: "nested",
					environment						: "development",
					css										: devPath+path.css,
					sass									: devPath+path.sass,
					image									: devPath+path.images,
					generated_images_path	: devPath+path.images
				}
			)
		)
		.pipe(
			autoprefixer(
				{
					browsers: ['last 2 versions'],
					cascade: false
				}
			)
		)
		.pipe(gulp.dest(devPath+path.css))
		.pipe(browserSync.reload({stream:true}));
	}
);

gulp.task("compass:deploy", function()
	{
		return gulp.src(devPath+path.sass+"**/*.sass")
		.pipe(plumber({errorHandler: notify.onError("<%= error.message %>")}))
		.pipe(
			compass(
				{
					// config_file						: path.compass,
					relative 							: true,
					sourcemap							: false,
					output_style					: "compressed",
					environment						: "production",
					css										: devPath+path.css,
					sass									: devPath+path.sass,
					image									: devPath+path.images,
					generated_images_path	: devPath	+path.images
				}
			)
		)
		.pipe(
			autoprefixer(
				{
					browsers: ['last 2 versions'],
					cascade: false
				}
			)
		)
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(gulp.dest(deployPath+path.css));
	}
);
