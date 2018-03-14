var React 		= require('react');
var Router 		= require('react-router');
var Variables = require("$root/common/params/Variables.es6");
var Constants = require("$root/common/params/Constants.es6");
var Stores 		= require("$root/common/flux/Stores.es6");
var Actions 	= require("$root/common/flux/Actions.es6");
var Messages 	= require("$root/common/flux/Messages.es6");
var Util 			= require("$root/common/util/Util.es6");
var Event 		= require("$root/common/params/Event.es6");
var AbstractModule 	= require("$root/view/modules/AbstractModule.es6");
var Link 						= Router.Link;


var Header = React.createClass({

	mixins: [AbstractModule],


	render: function()
	{
		return (
			<div id="header" ref="header">
			</div>
		);
	},


	componentDidMount: function()
	{
		this.$ 						= [];
		this.$.header 		= $(this.refs.header);
	},


	componentWillUnmount: function()
	{
	},


	implOnStageChange: function(data_)
	{
		switch(data_)
		{
			case Messages.CHANGE_LANGUAGE:
				setTimeout(()=> this.onSelectMenu(), 100);
				break;

			case Messages.START_MORE_CONTETNS:
				break;
		}

	},

	implUpdate: function()
	{

	},

	implOnResize: function()
	{

	}


});

module.exports = Header;
