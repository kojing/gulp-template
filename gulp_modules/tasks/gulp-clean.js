//----------------------------------------------------------------------------
// gulp-clean : Delete files
//----------------------------------------------------------------------------

var gulp				= require("gulp");
var del					= require("del");
var run					= require("run-sequence");
var config 			= require("../config");
var path				= config.path;
var devPath 		= path.dev;
var deployPath 	= path.deploy;

//----------------------------------------------------------------------------
// css
//----------------------------------------------------------------------------

gulp.task("clean:dev", function()
	{
		return run(["clean:css-dev","clean:js-dev"]);
	}
);

gulp.task("clean:deploy", function()
	{
		return del(deployPath+"**/*");
	}
);

//----------------------------------------------------------------------------
// css
//----------------------------------------------------------------------------

gulp.task("clean:css-dev", function()
	{
		return del(devPath+path.css+"**/*");
	}
);

gulp.task("clean:css-deploy", function()
	{
		return del(deployPath+path.css+"**/*");
	}
);

//----------------------------------------------------------------------------
// sass
//----------------------------------------------------------------------------

gulp.task("clean:sass", function()
	{
		return del(devPath+path.sass+"**/*.sass");
	}
);

//----------------------------------------------------------------------------
// javascript
//----------------------------------------------------------------------------

gulp.task("clean:js-dev", function()
	{
		return del(
			[
				devPath+path.js+"*.js",
				devPath+path.js+"**/*.js.map"
			]
		);
	}
);

gulp.task("clean:js-deploy", function()
	{
		del(
			[
				deployPath+path.js+"*.js",
				deployPath+path.js+"**/*.js.map"
			]
		);
	}
);

gulp.task("clean:jsLib-dev", function()
	{
		return del(devPath+path.jsLib+"**/*.js");
	}
);

gulp.task("clean:jsLib-deploy", function()
	{
		return del(devPath+path.jsLib+"**/*.js");
	}
);
//----------------------------------------------------------------------------
// coffeescript
//----------------------------------------------------------------------------

gulp.task("clean:coffee", function()
	{
		return del(devPath+path.coffee+"**/*.coffee");
	}
);

//----------------------------------------------------------------------------
// page
//----------------------------------------------------------------------------

gulp.task("clean:page-dev", function()
	{
		return del(
			[
				devPath+"**/*.html",
				devPath+"**/*.php",
				"!"+devPath+"wp/**/*"
			]
		);
	}
);

//----------------------------------------------------------------------------
// settings
//----------------------------------------------------------------------------

gulp.task("clean:settings-dev", function()
	{
		return del(
			[
				devPath+"*.xml",
				devPath+".htaccess"
			]
		);
	}
);

gulp.task("clean:settings-deploy", function()
	{
		return del(
			[
				deployPath+"*.xml",
				deployPath+".htaccess"
			]
		);
	}
);

//----------------------------------------------------------------------------
// wordpress
//----------------------------------------------------------------------------

gulp.task("clean:wp-dev-all", function()
	{
		return del(devPath+path.wp+"**/*");
	}
);

gulp.task("clean:wp-dev-config", function()
	{
		return del(
			[
				devPath+path.wp+"wp-config.php",
				devPath+path.wp+"wp-config-sample.php"
			]
		);
	}
);

gulp.task("clean:wp-dev-theme", function()
	{
		return del(devPath+path.wp+"wp-content/themes/"+path.wpTheme+"/**");
	}
);

gulp.task("clean:wp-dev-plugin", function()
	{
			return del(devPath+path.wp+"wp-content/plugins/**");
	}
);

gulp.task("clean:wp-deploy-all", function()
	{
		return del(deployPath+path.wp+"**/*");
	}
);


gulp.task("clean:wp-deploy-config", function()
	{
			return del(
				[
					deployPath+path.wp+"wp-config.php",
					deployPath+path.wp+"wp-config-sample.php"
				]
			);
	}
);


gulp.task("clean:wp-deploy-theme", function()
	{
		return del(deployPath+path.wp+"wp-content/themes/"+path.wpTheme+"/**");
	}
);


gulp.task("clean:wp-deploy-plugin", function()
	{
			return del(deployPath+path.wp+"wp-content/plugins/**");
	}
);


//----------------------------------------------------------------------------
// swf
//----------------------------------------------------------------------------

gulp.task("clean:swf-dev", function()
	{
		return del(devPath+path.swf+"**");
	}
);

gulp.task("clean:swf-deploy", function()
	{
		return del(deployPath+path.swf+"**");
	}
);

//----------------------------------------------------------------------------
// font
//----------------------------------------------------------------------------

gulp.task("clean:font-dev", function()
	{
			return del(devPath+path.fonts+"**");
	}
);

gulp.task("clean:font-deploy", function()
	{
			return del(deployPath+path.fonts+"**");
	}
);

//----------------------------------------------------------------------------
// json / xml
//----------------------------------------------------------------------------

gulp.task("clean:data-dev", function()
	{
		return del(
			[
				devPath+path.data+"**/*.json",
				devPath+path.data+"**/*.xml"
			]
		);
	}
);

gulp.task("clean:data-deploy", function()
	{
		return del(
			[
				deployPath+path.data+"**/*.json",
				deployPath+path.data+"**/*.xml"
			]
		);
	}
);

//----------------------------------------------------------------------------
// images
//----------------------------------------------------------------------------

gulp.task("clean:images-dev", function()
	{
		return del(devPath+path.images+"**/*");
	}
);

gulp.task("clean:images-deploy", function()
	{
		return del(deployPath+path.images+"**/*");
	}
);
