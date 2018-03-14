var Referer 				= require("$root/common/util/Referer.es6");
var Variables 			= require("$root/common/params/Variables.es6");
var Stores 					= require("$root/common/flux/Stores.es6");
var Actions 				= require("$root/common/flux/Actions.es6");
var Messages 				= require("$root/common/flux/Messages.es6");
var EventEmitter 		= require("events").EventEmitter;

class GlobalData extends EventEmitter
{
	constructor()
	{
		super();
		this.date = new Date();
		this.date = this.date.getTime();
	}


	loadJson()
	{
		var df_ = new $.Deferred();
		var dfs_ = [];

		$.when.apply(null, dfs_)
		.then(()=>df_.resolve());
		return df_.promise();
	}


	loadJsonData(url_,onLoadData_,eventName_)
	{

	}



}

module.exports = new GlobalData();
