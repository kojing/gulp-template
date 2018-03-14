var Constants = require("$root/common/params/Constants.es6");

var Variables = {
	URL: "",
	FIRST_VIEW: true,
	LANGUAGE: Constants.LANGUAGE_JP,
	IS_MOBILE: false,
	IS_IE: false,

	PAGE_TITLE: "",

	WINDOW_WIDTH: 0,
	WINDOW_HEIGHT: 0,

	STAGE_WIDTH: 0,
	STAGE_HEIGHT: 0,
	MOBILE_SIZE: 480+1,
	IPAD_SIZE: 768+1,

	TABLET_VIEW: ['ipad', 'android'],
	MOBILE_VIEW: ['ie6', 'ie7', 'ie8', 'ipod', 'iphone', 'mobile'],
	PC_VIEW: ['ie9', 'ie10', 'ie11', 'chrome', 'safari', 'opera', 'gecko']
}

module.exports = Variables;
