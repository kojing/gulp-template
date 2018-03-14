if(!Array.indexOf)
{
	Array.prototype.indexOf = function(obj)
	{
		for(var i=0; i<this.length; i++)
		{
			if(this[i]==obj)
			{
				return i;
			}
		}
		return -1;
	}
}


var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||　window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;



var Util =
{
	getUserAgent:()=>
	{
		var ret_ = "unknown"
		var _userAgent = window.navigator.userAgent.toLowerCase()
		var _appVersion = window.navigator.appVersion.toLowerCase()

		if(_userAgent.indexOf('msie') != -1)
			ret_ = 'ie'
		if(_appVersion.indexOf('msie 6.') != -1)
			ret_ = 'ie6'
		else if(_appVersion.indexOf('msie 7.') != -1)
			ret_ = 'ie7'
		else if(_appVersion.indexOf('msie 8.') != -1)
			ret_ = 'ie8'
		else if(_appVersion.indexOf('msie 9.') != -1)
			ret_ = 'ie9'
		else if(_appVersion.indexOf('msie 10.') != -1)
			ret_ = 'ie10'
		else if(_userAgent.indexOf('trident/7') != -1)
			ret_ = 'ie11'
		else if(_userAgent.indexOf('edge') != -1)
			ret_ = 'edge'
		else if(_userAgent.indexOf('chrome') != -1)
			ret_ = 'chrome'
		else if(_userAgent.indexOf('ipad') != -1)
			ret_ = 'ipad'
		else if(_userAgent.indexOf('ipod') != -1)
			ret_ = 'ipod'
		else if(_userAgent.indexOf('iphone') != -1)
			ret_ = 'iphone'
		else if(_userAgent.indexOf('safari') != -1)
			ret_ = 'safari'
		else if(_userAgent.indexOf('gecko') != -1)
			ret_ = 'gecko'
		else if(_userAgent.indexOf('opera') != -1)
			ret_ = 'opera'
		else if(_userAgent.indexOf('android') != -1)
			ret_ = 'android'
		else if(_userAgent.indexOf('mobile') != -1)
			ret_ = 'mobile'
		return ret_
	},
}

module.exports = Util;
