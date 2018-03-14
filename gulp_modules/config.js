//----------------------------------------------------------------------------
// config
//----------------------------------------------------------------------------
var path = require("path");

module.exports =
{
	useWp : false,
	port	: 9001,
	host	: "127.0.0.1",
	path	:
	{
			root 						: path.join(__dirname, '../'),
		newerCash				: '.newer-cash/',
		dev							: './dev/html/htdocs/',
		deploy					: './deploy/htdocs/',

		//css <-> sass path
		compass					: "config.rb",
		sass						: 'assets/_edit/sass/',
		css 						: 'assets/css/',

		//js <-> coffee path / ts path
		browserifyMain		: "Main.es6",
		browserifyPreload	: "Preload.es6",
		coffee						: 'assets/_edit/script/coffee/',
		es6								: 'assets/_edit/script/es6/',
		ts								: 'assets/_edit/script/ts/',
		js								: 'assets/scripts/js/',
		worker						: "assets/_edit/script/worker/",
		jsWorker					: "assets/scripts/js/worker/",


		//js library path
		jsLib						: 'assets/_edit/script/lib/',

		//images path
		images					: 'assets/images/',

		//swf path
		swf 						: 'assets/swf/',

		//datas path
		data						: 'assets/datas/',

		//video path
		movies 						: "assets/movie/",

		//fonts path
		fonts						: 'assets/fonts/',

		//cjsx path
		cjsx						: 'mujitogo/assets/_edit/cjsx/',

		//wordpress path
		wp							: 'wp/',
		wpTheme					: ''
	}
};
