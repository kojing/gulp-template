//----------------------------------------------------------------------------
// gulp-browserify : Browserify bundle
//----------------------------------------------------------------------------
var gulp				= require("gulp");
var browserify	= require("browserify");
var babelify 		= require("babelify");
var watchify    = require("gulp-watchify");
var uglify			= require("gulp-uglify");
var sourceMaps	= require("gulp-sourcemaps");
var plumber			= require("gulp-plumber");
var notify			= require("gulp-notify");
var buffer			= require("vinyl-buffer");
var source 			= require("vinyl-source-stream");
var pathmodify 	= require('pathmodify');
var config 			= require("../config");
var browserSync	= require("browser-sync");
var path				= config.path;
var devPath 		= path.dev;
var deployPath 	= path.deploy;



//----------------------------------------------------------------------------
//  bundle
//----------------------------------------------------------------------------

//gulp.task 'browserify:dev',watchify (watchify) ->
//	return plumber errorHandler: notify.onError '<%= error.message %>'
//	.pipe browserify
//		entries: "#{devPath+path.coffee+path.browserifyMain}"
//		transform: ['coffee-reactify']
//	.bundle()
//	.pipe source('bundle.js')
//	.pipe buffer()
//	.pipe sourceMaps.init loadMaps: true
//	.pipe sourceMaps.write('./maps')
//	.pipe gulp.dest("#{devPath+path.js}")
//
//
//gulp.task 'browserify:deploy',watchify (watchify) ->
//	return plumber errorHandler: notify.onError '<%= error.message %>'
//	.pipe browserify
//		entries: "#{devPath+path.coffee+path.browserifyMain}"
//		transform: ['coffee-reactify']
//	.bundle()
//	.pipe source('bundle.js')
//	.pipe buffer()
//	.pipe uglify(
//		sequences     : false  // join consecutive statemets with the “comma operator”
//		properties    : false  // optimize property access: a["foo"] → a.foo
//		dead_code     : false  // discard unreachable code
//		drop_debugger : false  // discard “debugger” statements
//		unsafe        : false  // some unsafe optimizations (see below)
//		conditionals  : false  // optimize if-s and conditional expressions
//		comparisons   : false  // optimize comparisons
//		evaluate      : false  // evaluate constant expressions
//		booleans      : false  // optimize boolean expressions
//		loops         : false  // optimize loops
//		unused        : false  // drop unused variables/functions
//		hoist_funs    : false  // hoist function declarations
//		hoist_vars    : false  // hoist variable declarations
//		if_return     : false  // optimize if-s followed by return/continue
//		join_vars     : false  // join var declarations
//		cascade       : false  // try to cascade `right` into `left` in sequences
//		side_effects  : false  // drop side-effect-free statements
//		warnings      : false  // warn about potentially dangerous optimizations/code
//		global_defs   :
//		    DEBUG: false
//	)
//	.pipe gulp.dest("#{deployPath+path.js}")



//----------------------------------------------------------------------------
//  bundle
//----------------------------------------------------------------------------

gulp.task('browserify:dev', watchify(function(watchify)
		{
			return plumber({errorHandler: notify.onError('<%= error.message %>')})
			.pipe(

					browserify(
						{
							entries	: devPath+path.es6+path.browserifyMain,
							debug		: true,
							"transform": ["babelify"]
						}
					)
				.exclude("jquery")
				.exclude("react")
				.exclude("react-router")
				.exclude("react-dom")
				.plugin(pathmodify, {mods: [
						pathmodify.mod.dir("$root",path.root+devPath+path.es6)
				]})
				.bundle()
			)
			.pipe(source('main.js'))
			.pipe(buffer())
			.pipe(sourceMaps.init({loadMaps: true}))
			.pipe(sourceMaps.write('./maps'))
			.pipe(gulp.dest(devPath+path.js))
			.pipe(browserSync.reload({stream:true}));
		}
	)
);

gulp.task('browserify:deploy',watchify(function(watchify)
		{
			return plumber({errorHandler: notify.onError('<%= error.message %>')})
			.pipe(
				browserify(
					{
						entries	: devPath+path.es6+path.browserifyMain,
						debug		: false,
						"transform": [["babelify", { "presets": ["es2015","react"]}]]
					}
				)
				.exclude("jquery")
				.exclude("react")
				.exclude("react-router")
				.exclude("react-dom")
				.plugin(pathmodify, {mods: [
						pathmodify.mod.dir("$root", path.root+devPath+path.es6)
				]})
				.bundle()
			)
			.pipe(source('main.js'))
			.pipe(buffer())
			.pipe(
				uglify(
					{
						sequences     : false,  // join consecutive statemets with the “comma operator”
						properties    : false,  // optimize property access: a["foo"] → a.foo
						dead_code     : false,  // discard unreachable code
						drop_debugger : false,  // discard “debugger” statements
						unsafe        : false,  // some unsafe optimizations (see below)
						conditionals  : false,  // optimize if-s and conditional expressions
						comparisons   : false,  // optimize comparisons
						evaluate      : false,  // evaluate constant expressions
						booleans      : false,  // optimize boolean expressions
						loops         : false,  // optimize loops
						unused        : false,  // drop unused variables/functions
						hoist_funs    : false,  // hoist function declarations
						hoist_vars    : false,  // hoist variable declarations
						if_return     : false,  // optimize if-s followed by return/continue
						join_vars     : false,  // join var declarations
						cascade       : false,  // try to cascade `right` into `left` in sequences
						side_effects  : false,  // drop side-effect-free statements
						warnings      : false,  // warn about potentially dangerous optimizations/code
						compress: {
							drop_console: true
						}
					}
				)
			)
			.pipe(gulp.dest(deployPath+path.js))

		}
	)
);

//----------------------------------------------------------------------------
//  library
//----------------------------------------------------------------------------

gulp.task('browserify:dev-lib', watchify(function(watchify)
		{
			return plumber({errorHandler: notify.onError('<%= error.message %>')})
			.pipe(
					browserify(
						{
							debug		: true
						}
					)

				.require("jquery")
				.require("react")
				.require("react-router")
				.require("react-dom")
				.bundle()
			)
			.pipe(source('common.js'))
			.pipe(buffer())
			.pipe(sourceMaps.init({loadMaps: true}))
			.pipe(sourceMaps.write('./maps'))
			.pipe(gulp.dest(devPath+path.js));
		}
	)
);


gulp.task('browserify:deploy-lib',watchify(function(watchify)
		{
			return plumber({errorHandler: notify.onError('<%= error.message %>')})
			.pipe(
				browserify()
				.require("jquery")
				.require("react")
				.require("react-router")
				.require("react-dom")
				.bundle()
			)
			.pipe(source('common.js'))
			.pipe(buffer())
			.pipe(
				uglify(
					{
						sequences     : false,  // join consecutive statemets with the “comma operator”
						properties    : false,  // optimize property access: a["foo"] → a.foo
						dead_code     : false,  // discard unreachable code
						drop_debugger : false,  // discard “debugger” statements
						unsafe        : false,  // some unsafe optimizations (see below)
						conditionals  : false,  // optimize if-s and conditional expressions
						comparisons   : false,  // optimize comparisons
						evaluate      : false,  // evaluate constant expressions
						booleans      : false,  // optimize boolean expressions
						loops         : false,  // optimize loops
						unused        : false,  // drop unused variables/functions
						hoist_funs    : false,  // hoist function declarations
						hoist_vars    : false,  // hoist variable declarations
						if_return     : false,  // optimize if-s followed by return/continue
						join_vars     : false,  // join var declarations
						cascade       : false,  // try to cascade `right` into `left` in sequences
						side_effects  : false,  // drop side-effect-free statements
						warnings      : false,  // warn about potentially dangerous optimizations/code
						compress: {
							drop_console: true
						}
					}
				)
			)
			.pipe(gulp.dest(deployPath+path.js))
		}
	)
);
