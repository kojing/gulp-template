//----------------------------------------------------------------------------
// gulp-copy: Copy files to deploy
//----------------------------------------------------------------------------

var gulp 				= require("gulp");
var gulpUtil		= require("gulp-util");
var config 			= require("../config");
var run					= require("run-sequence");
var path				= config.path;
var devPath 		= path.dev;
var deployPath 	= path.deploy;

//----------------------------------------------------------------------------
// css
//----------------------------------------------------------------------------

gulp.task("copy:css", function()
	{
		return gulp.src(devPath+path.css+"**/*.css")
		.pipe(gulp.dest(deployPath+path.css));
	}
);


//----------------------------------------------------------------------------
// javascript
//----------------------------------------------------------------------------

gulp.task("copy:js", function()
	{
		return gulp.src(devPath+path.js+"**/*.js")
		.pipe(gulp.dest(deployPath+path.js));
	}
);

gulp.task("copy:js-worker", function()
	{
		return gulp.src(devPath+path.jsWorker+"**/*.js")
		.pipe(gulp.dest(deployPath+path.jsWorker));
	}
);

//----------------------------------------------------------------------------
// page
//----------------------------------------------------------------------------

gulp.task("copy:page", function()
	{
		return gulp.src(
			[
				devPath+"**/*.html",
				devPath+"**/*.php",
				"!"+devPath+"wp/**/*"
			]
		)
		.pipe(gulp.dest(deployPath));
	}
);

//----------------------------------------------------------------------------
// settings
//----------------------------------------------------------------------------

gulp.task("copy:settings", function()
	{
		return gulp.src(
			[
				devPath+"**/*.xml",
				devPath+"**/.htaccess"
			]
		)
		.pipe(gulp.dest(deployPath));
	}
);

//----------------------------------------------------------------------------
// wordpress
//----------------------------------------------------------------------------

gulp.task("copy:wp-all", function()
	{
		return gulp.src(devPath+path.wp+"**/*")
		.pipe(gulp.dest(deployPath+path.wp));
	}
);

gulp.task("copy:wp-module", function()
	{
		return gulp.src(
			[
				devPath+path.wp+"get_entries.php"
			]
		)
		.pipe(gulp.dest(deployPath+path.wp));
	}
);

gulp.task("copy:wp-config", function()
	{
		return gulp.src(
			[
				devPath+path.wp+"wp-config.php",
				devPath+path.wp+"wp-config-sample.php"
			]
		)
		.pipe(gulp.dest(deployPath+path.wp));
	}
);

gulp.task("copy:wp-theme", function()
	{
		return gulp.src(
			[
				devPath+path.wp+"wp-content/themes/"+path.wpTheme+"/guntu_*/**",
				devPath+path.wp+"wp-content/themes/"+path.wpTheme+"/index.php"
			]
		)
		.pipe(gulp.dest(deployPath+path.wp+"wp-content/themes/"+path.wpTheme+"/"));
	}
);

gulp.task("copy:wp-plugin", function()
	{
		return gulp.src(devPath+path.wp+"wp-content/plugins/**")
		.pipe(gulp.dest(deployPath+path.wp+"wp-content/plugins"));
	}
);

//----------------------------------------------------------------------------
// swf
//----------------------------------------------------------------------------

gulp.task("copy:swf", function()
	{
		return gulp.src(devPath+path.swf+"**")
		.pipe(gulp.dest(deployPath+path.swf));
	}
);

//----------------------------------------------------------------------------
// font
//----------------------------------------------------------------------------

gulp.task("copy:font", function()
	{
		return gulp.src(devPath+path.fonts+"**")
		.pipe(gulp.dest(deployPath+path.fonts));
	}
);

//----------------------------------------------------------------------------
// json / xml
//----------------------------------------------------------------------------

gulp.task("copy:data", function()
	{
		return gulp.src(
			[
				devPath+path.data+"**/*.json",
				devPath+path.data+"**/*.xml",
				devPath+path.data+"**/*.awd",
				devPath+path.data+"**/*.wav"
			]
		)
		.pipe(gulp.dest(deployPath+path.data));
	}
);

gulp.task("copy:rss", function()
	{
		return gulp.src(
			[
				devPath+"2016ss/*.json"
			]
		)
		.pipe(gulp.dest(deployPath+"2016ss/"));
	}
);

//----------------------------------------------------------------------------
// images
//----------------------------------------------------------------------------

gulp.task("copy:images", function()
	{
		return gulp.src(
			[
				devPath+path.images+"**/*.jpg",
				devPath+path.images+"**/*.png",
				devPath+path.images+"**/*.gif",
				devPath+path.images+"**/*.cube",
				devPath+path.images+"**/*.svg",
			]
		)
		.pipe(gulp.dest(deployPath+path.images));
	}
);


//----------------------------------------------------------------------------
// images
//----------------------------------------------------------------------------

gulp.task("copy:movie", function()
	{
		return gulp.src(
			[
				devPath+path.movies+"**/*.mp4",
				devPath+path.movies+"**/*.mov"
			]
		)
		.pipe(gulp.dest(deployPath+path.movies));
	}
);
