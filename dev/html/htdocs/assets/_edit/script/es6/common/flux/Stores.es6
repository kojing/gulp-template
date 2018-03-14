var Reflux 		= require("Reflux");
var Logger		= require("$root/common/util/Logger.es6");
var Actions 	= require("$root/common/flux/Actions.es6");
var Messages 	= require("$root/common/flux/Messages.es6");
var Constants = require("$root/common/params/Constants.es6");
var Logger	 	= require("$root/common/util/Logger.es6");

var Stores = Reflux.createStore(
{
		init: function()
		{
			Logger.debug("Stores.init");
			this.listenTo(Actions[Messages.CHANGE_LANGUAGE], this.onChangeLanguage);
			this.listenTo(Actions[Messages.START_MORE_CONTETNS], this.onStartMoreContents);
		},

		//---------------------------------------------------
		// CHANGE LANGUAGE
		//---------------------------------------------------

		onChangeLanguage: function()
		{
			Logger.debug("Stores.onChangeLanguage");
			this.trigger(Messages.CHANGE_LANGUAGE);
		},


		onStartMoreContents: function()
		{
			Logger.debug("Stores.onStartMoreContents");
			this.trigger(Messages.START_MORE_CONTETNS);
		}
});


module.exports = Stores;
