var Stores 				= require("$root/common/flux/Stores.es6");
var Actions 			= require("$root/common/flux/Actions.es6");
var Messages 			= require("$root/common/flux/Messages.es6");
var Logger 				= require("$root/common/util/Logger.es6");
var Variables 		= require("$root/common/params/Variables.es6");
var GlobalData 		= require("$root/common/data/GlobalData.es6");


var AbstractContent =
{

	getInitialState: function()
	{
		return {
			language: Variables.LANGUAGE
		};
	},


	componentDidMount: function()
	{
		this.unsubscribe 	= Stores.listen(this.onStatusChange);
		this.gd 					= GlobalData;
	},


	onStatusChange: function(data_)
	{
		if(this.implOnStageChange != null)
		{
			this.implOnStageChange(data_);
		}

		switch(data_)
		{
			case Messages.CHANGE_LANGUAGE:
				// if(this.setState != null) this.setState({language: Variables.LANGUAGE});
				break;

			case Messages.START_MORE_CONTETNS:
				break;
		}
	},


	update: function()
	{
		if(this.implUpdate != null)
		{
			this.implUpdate();
		}
	},


	onResize: function()
	{
		if(this.implOnResize != null)
		{
			this.implOnResize();
		}
	},


	componentWillUnmount: function()
	{
		// Logger.debug("AbstractContent.componentWillUnmount");
		if (this.unsubscribe) this.unsubscribe();
		this.unsubscribe = null;
	}

}

module.exports = AbstractContent;
