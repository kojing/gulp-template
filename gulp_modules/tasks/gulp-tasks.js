var gulp 	= require('gulp');
var run		= require('run-sequence');

gulp.task('compile:dev', function()
	{
		return run(
				'clean:dev',
				['browserify:dev','browserify:dev-lib','compass:dev'],
				['cmq:dev']
		);
	}
);



gulp.task('compile:deploy', function()
	{
		return run(
				'clean:deploy',
				['browserify:deploy','browserify:deploy-lib','compass:deploy'],
				['cmq:deploy','copy:page','copy:settings','copy:js-worker','copy:swf','copy:font','copy:data','copy:rss','copy:images','copy:movie','copy:wp-module','copy:wp-theme','copy:wp-plugin']
		);
	}
);
