var React       	= require("react");
var Variables 		= require("$root/common/params/Variables.es6");
var Constants 		= require("$root/common/params/Constants.es6");
var Stores 				= require("$root/common/flux/Stores.es6");
var Actions 			= require("$root/common/flux/Actions.es6");
var Messages 			= require("$root/common/flux/Messages.es6");
var Header  			= require("$root/view/modules/Header.jsx");
var Footer  			= require("$root/view/modules/Footer.jsx");
var AbstractPage 	= require("$root/view/modules/AbstractPage.es6");
var Content 	 		= require("$root/view/pages/contents/top/ContentTop.jsx");
// var GlobalData 		= require("$root/common/data/GlobalData.es6");

var PageTop = React.createClass({

	mixins: [AbstractPage],

	getDefaultProps: function()
	{
		return {
			url: Constants.URL_TOP
		};
	},

	getInitialState: function()
	{
		return {
			useFullScreen: true
		};
	},


	render: function()
	{

		var style_ = Variables.FIRST_VIEW ? "full" : "";

		return (
			<div id="top" className={style_} ref="page">
				<Header ref="header"/>
				<Content ref="content"/>
				<Footer ref="footer"/>
			</div>
		);
	},


	componentWillMount: function()
	{
		Variables.PAGE_TITLE = "";
	},


	componentDidMount: function()
	{
		this.$ = [];
		this.$.page = $(this.refs.page);
		window.requestAnimationFrame(()=>this.update());
		this.onResize();
	},

	startMoreContetns: function()
	{
		Variables.FIRST_VIEW = false;
		this.setState({useFullScreen: false});
	},

	implOnStageChange: function(data_)
	{
		switch(data_)
		{
			case Messages.CHANGE_LANGUAGE:
				break;

			case Messages.START_MORE_CONTETNS:
				this.startMoreContetns();
				break;
		}
	},


	implUpdate: function()
	{
		this.refs.header.update();
		this.refs.content.update();
		this.refs.footer.update();
	},


	implOnResize: function()
	{
		this.refs.header.onResize();
		this.refs.content.onResize();
		this.refs.footer.onResize();
	}


});

module.exports = PageTop;
