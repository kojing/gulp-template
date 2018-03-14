var Stores 				= require("$root/common/flux/Stores.es6");
var Actions 			= require("$root/common/flux/Actions.es6");
var Messages 			= require("$root/common/flux/Messages.es6");
var Logger 				= require("$root/common/util/Logger.es6");
var Variables 		= require("$root/common/params/Variables.es6");
var GlobalData 		= require("$root/common/data/GlobalData.es6");


var AbstractPage =
{
	updating: true,
	pageTitleJp: "",
	pageTitleEn: "",

	getInitialState: function()
	{
		return {
			language: Variables.LANGUAGE,
		};
	},

	componentWillMount: function()
	{
		window.scrollTo(0, 0);

		if(this.props.url != null)
		{
			Variables.URL = this.props.url;
		}

		if(!this.state.useFullScreen)
		{
			Variables.FIRST_VIEW 	= false;
		}
		this.changeDocumentTitle();
	},

	componentDidMount: function()
	{
		this.updating 				= true;
		this.unsubscribe 			= Stores.listen(this.onStatusChange);
		this.gd 							= GlobalData;
		window.addEventListener("resize", this.onResize);
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
				if(this.setState != null) this.setState({language: Variables.LANGUAGE});
				if(this.$.page)
				{
					switch (Variables.LANGUAGE) {
						case "en":
							this.$.page.removeClass("jp")
							this.$.page.addClass("en")
							break;

						default:
							this.$.page.removeClass("jp")
							this.$.page.removeClass("en")
							break;
					}
				}
				this.changeDocumentTitle();
				break;

			case Messages.START_MORE_CONTETNS:
				break;
		}
	},


	componentWillUnmount: function()
	{
		this.updating = false;
		if (this.unsubscribe) this.unsubscribe();
		this.unsubscribe = null;
		window.removeEventListener("resize", this.onResize);
	},



	update: function()
	{
		if(this.implUpdate != null && this.updating)
		{
			this.implUpdate();
			 window.requestAnimationFrame(()=>this.update());
		}
	},


	onResize: function()
	{
		if(this.implOnResize != null)
		{
			this.implOnResize();
		}
	},


	changeDocumentTitle: function()
	{
		switch(Variables.LANGUAGE)
		{
			case "jp":
			Variables.PAGE_TITLE = this.pageTitleJp;
			break;

			case "en":
			Variables.PAGE_TITLE = this.pageTitleEn;
			break;
		}
	}



}

module.exports = AbstractPage;
