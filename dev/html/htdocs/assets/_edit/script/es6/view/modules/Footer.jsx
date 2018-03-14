var React 					= require('react');
var Router 					= require('react-router');
var Variables 			= require("$root/common/params/Variables.es6");
var Constants 			= require("$root/common/params/Constants.es6");
var Stores 					= require("$root/common/flux/Stores.es6");
var Actions 				= require("$root/common/flux/Actions.es6");
var Messages 				= require("$root/common/flux/Messages.es6");
var Actions 				= require("$root/common/flux/Actions.es6");
var Messages 				= require("$root/common/flux/Messages.es6");
var Util 						= require("$root/common/util/Util.es6");
var GlobalData 			= require("$root/common/data/GlobalData.es6");
var AbstractModule 	= require("$root/view/modules/AbstractModule.es6");
var Link 						= Router.Link;

var Footer = React.createClass({

	mixins: [AbstractModule],


	render: function()
	{
		return (
			<div id="footer">
			</div>
		);
	},

	componentDidMount: function()
	{
		this.gd 				= GlobalData;
		this.$ 					= [];
	},

	componentWillUnmount: function()
	{
	},


	implOnStageChange: function(data_)
	{
		switch(data_)
		{
			case Messages.CHANGE_LANGUAGE:
				this.setLangageBtn();
				break;

			case Messages.START_MORE_CONTETNS:
				break;
		}
	}
});

module.exports = Footer;
