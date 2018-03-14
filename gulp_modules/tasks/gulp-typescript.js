var gulp 				= require('gulp');
var uglify 			= require('gulp-uglify');
var babel 			= require('gulp-babel');
var ts 					= require('gulp-typescript');
var config 			= require("../config");
var run					= require('run-sequence');
var path				= config.path;
var devPath 		= path.dev;
var deployPath 	= path.deploy;

var awayPath_Core 						= './node_modules/awayjs-core/lib/';
var awayPath_Display 					= './node_modules/awayjs-display/lib/';
var awayPath_MethodMaterials 	= './node_modules/awayjs-methodmaterials/lib/';
var awayPath_Player 					= './node_modules/awayjs-player/lib/';
var awayPath_Parsers 					= './node_modules/awayjs-parsers/lib/';
var awayPath_RendererGL 			= './node_modules/awayjs-renderergl/lib/';
var awayPath_StageGL 					= './node_modules/awayjs-stagegl/lib/';


gulp.task('ts', function()
	{
		return run(
				['ts:core','ts:display','ts:methodmaterials','ts:player','ts:parsers','ts:renderergl','ts:stagegl']
		);
	}
);



gulp.task('ts:core', function()
	{
		gulp.src(awayPath_Core+'**/*.ts')
		.pipe(
			ts(
				{
					declarationFiles: true,
					noExternalResolve: true,
					target: 'ES5',
					module: 'commonjs',
					moduleResolution: 'classic'
				}
			)
		)
		.pipe(gulp.dest(awayPath_Core))
	}
);


gulp.task('ts:display', function()
	{
		gulp.src(awayPath_Display+'**/*.ts')
		.pipe(
			ts(
				{
					declarationFiles: true,
					noExternalResolve: true,
					target: 'ES5',
					module: 'commonjs',
					moduleResolution: 'classic'
				}
			)
		)
		.pipe(gulp.dest(awayPath_Display))
	}
);

gulp.task('ts:methodmaterials', function()
	{
		gulp.src(awayPath_MethodMaterials+'**/*.ts')
		.pipe(
			ts(
				{
					declarationFiles: true,
					noExternalResolve: true,
					target: 'ES5',
					module: 'commonjs',
					moduleResolution: 'classic'
				}
			)
		)
		.pipe(gulp.dest(awayPath_MethodMaterials))
	}
);

gulp.task('ts:player', function()
	{
		gulp.src(awayPath_Player+'**/*.ts')
		.pipe(
			ts(
				{
					declarationFiles: true,
					noExternalResolve: true,
					target: 'ES5',
					module: 'commonjs',
					moduleResolution: 'classic'
				}
			)
		)
		.pipe(gulp.dest(awayPath_Player))
	}
);


gulp.task('ts:parsers', function()
	{
		gulp.src(awayPath_Parsers+'**/*.ts')
		.pipe(
			ts(
				{
					declarationFiles: true,
					noExternalResolve: true,
					target: 'ES5',
					module: 'commonjs',
					moduleResolution: 'classic'
				}
			)
		)
		.pipe(gulp.dest(awayPath_Parsers))
	}
);


gulp.task('ts:renderergl', function()
	{
		gulp.src(awayPath_RendererGL+'**/*.ts')
		.pipe(
			ts(
				{
					declarationFiles: true,
					noExternalResolve: true,
					target: 'ES5',
					module: 'commonjs',
					moduleResolution: 'classic'
				}
			)
		)
		.pipe(gulp.dest(awayPath_RendererGL))
	}
);

gulp.task('ts:stagegl', function()
	{
		gulp.src(awayPath_StageGL+'**/*.ts')
		.pipe(
			ts(
				{
					declarationFiles: true,
					noExternalResolve: true,
					target: 'ES5',
					module: 'commonjs',
					moduleResolution: 'classic'
				}
			)
		)
		.pipe(gulp.dest(awayPath_StageGL))
	}
);
