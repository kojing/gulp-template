

var React 				 	= require("react");
var Dom 					 	= require("react-dom");
var ReactRouter 	 	= require("react-router");
var BrowserHistory 	= require("react-router/lib/BrowserHistory");
var easing 					= require("jquery.easing");
var transit 				= require("jquery.transit");
window.$ 						= require("jquery");
window.Jquery 			= window.$

var Router 					= ReactRouter.Router;
var Route 					= ReactRouter.Route;
var Link 						= ReactRouter.Link;

var PageTop 				= require("$root/view/pages/PageTop.jsx");
var PageAbout 			= require("$root/view/pages/PageAbout.jsx");
var PageCabins 			= require("$root/view/pages/PageCabins.jsx");
var PageCabinDetail = require("$root/view/pages/PageCabinDetail.jsx");
var PageFoods 			= require("$root/view/pages/PageFoods.jsx");
var PageActivities 	= require("$root/view/pages/PageActivities.jsx");
var PageBlog 				= require("$root/view/pages/PageBlog.jsx");
var PageAccess 			= require("$root/view/pages/PageAccess.jsx");
var PageReservation = require("$root/view/pages/PageReservation.jsx");
var PageNotFound 		= require("$root/view/pages/PageNotFound.jsx");
var Constants 			= require("$root/common/params/Constants.es6");
var Variables 			= require("$root/common/params/Variables.es6");
var Util 						= require("$root/common/util/Util.es6");
var Referer 				= require("$root/common/util/Referer.es6");
var GlobalData 			= require("$root/common/data/GlobalData.es6");

var EventEmitter 		= require("events").EventEmitter;


//localStorageの下方互換を確保
if (!window.localStorage)
{
	window.localStorage = {};
}

window.$.wait = function(msec) {
	var df_ = new $.Deferred;
	setTimeout(function(){df_.resolve(msec);}, msec);
	return df_.promise();
};


var urlUpdateHandler = function()
{
		if (window.ga) window.ga("send", "pageview", location.pathname);
};


class Main
{
	constructor()
	{

		switch(location.hash)
		{
			case "#jp":
				Variables.LANGUAGE = "jp";
				break;

			case "#us":
				Variables.LANGUAGE = "en";
				break;

			case "#en":
				Variables.LANGUAGE = "en";
				break;

			default:
				this.checkLanguage();
				break;
		}

		this.gd 						= GlobalData;
		Referer.$WINDOW 		= $(window);
		Variables.IS_MOBILE = Variables.MOBILE_VIEW.indexOf(Util.getUserAgent()) != -1;
		Variables.IS_IE 		= Util.getUserAgent().indexOf("ie") != -1;

		window.addEventListener("resize", ()=>{this.onResize();});

		$(document).on('keypress',  (e)=>
			{
				if(e.keyCode == 13)
				{
					var lang_ = Variables.LANGUAGE == "en" ? "jp" : "en";
					this.gd.changeLanguage(lang_);
				}
			}
		);

		this.onResize();

		Dom.render(
			(
				<Router history={BrowserHistory} onUpdate={urlUpdateHandler}>
					<Route path={Constants.URL_TOP} 				component={PageTop} 				location="hash"/>
					{/* <Route path={Constants.URL_TOP} 				component={PageAbout} 				location="hash"/> */}
					<Route path={Constants.URL_ABOUT} 			component={PageAbout} 			location="hash" />
					<Route path={Constants.URL_CABINS} 			component={PageCabins} 			location="hash" />
					<Route path={Constants.URL_CABINS+"/:id"} component={PageCabinDetail} 			location="hash" />
					<Route path={Constants.URL_FOODS} 			component={PageFoods} 			location="hash" />
					<Route path={Constants.URL_ACTIVITIES} 	component={PageActivities} 	location="hash" />
					<Route path={Constants.URL_BLOG} 				component={PageBlog} 				location="hash" />
					<Route path={Constants.URL_BLOG+"/:id"} component={PageBlog} 				location="hash" />
					<Route path={Constants.URL_ACCESS} 			component={PageAccess} 			location="hash" />
					<Route path={Constants.URL_RESERVATION} component={PageReservation} location="hash" />
					<Route path={"*"} 											component={PageNotFound} 		location="hash" />
				</Router>
			), $("#wrapper").get(0)
		);
	}


	startContents()
	{
	}


	onStatusChange()
	{
	}


	checkLanguage()
	{
		var lang_ = "";
		// if(navigator.cookieEnabled)
		// {
		// 	var cookie_ = document.cookie.split(";");
		// 	for(var i=0; i<cookie_.length; i++)
		// 	{
		// 		console.log(cookie_[i]);
		// 		if(cookie_[i].indexOf("lang") != -1)
		// 		{
		// 			lang_ = cookie_[i].replace(/.*lang=/,"");
		// 		}
		// 	}
		// }

		if(lang_ == "")
		{
			if(window.region == "JP")
			{
				Variables.LANGUAGE = "jp";
			}
			else {
				Variables.LANGUAGE = "en";
			}
		}
		else
		{
			Variables.LANGUAGE = lang_;
		}


	}

	onResize()
	{
		Variables.WINDOW_WIDTH 	= Referer.$WINDOW.width();
		Variables.WINDOW_HEIGHT = Referer.$WINDOW.height();

		if(Variables.WINDOW_WIDTH < 960 && Variables.WINDOW_WIDTH >= Constants.MQ_SCREEN_XS)
		{
			Variables.WINDOW_WIDTH = 960;
		}
		else if(Variables.WINDOW_WIDTH < Constants.MQ_SCREEN_XS)
		{
			Variables.WINDOW_WIDTH = Constants.MQ_SCREEN_XS-1;
		}
	}
}


$(document).ready(
	function()
	{
		var main = new Main();
	}
);

module.exports = Main;
