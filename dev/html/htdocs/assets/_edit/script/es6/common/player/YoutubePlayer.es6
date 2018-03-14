var EventEmitter 	= require("events").EventEmitter;
var Util 					=  require("./common/util/Util.es6");
var Variables 		= require("$root/common/params/Variables.es6");

class YoutubePlayer extends EventEmitter
{
	constructor(embedID_, videoID_, slides_=[], showBtnFirst_ = true)
	{
		super();

		this.player 			= null;
		this.$playerSet 	= $("#"+embedID_);
		this.$videoSlide 	= this.$playerSet.find(".video-slides");
		this.slideImages 	= [];
		this.$player 			= null;
		this.isMobile 		= false;
		this.isTablet 		= false;
		this.isReady 			= false;
		this.sw 					= $(window).width();
		this.sh						= Math.floor(this.sw/16*9);
		this.embedID 			= embedID_+"_yt_player";
		this.videoID			= videoID_;
		this.isPlaying 		= false;
		this.showBtnFirst = showBtnFirst_;
		this.slides 			= slides_;
		this.currentSlide = -1

		this.$playBtn = $(this.$playerSet.find(".play-btn"));
		this.$playBtn.hide();

		if(Variables.MOBILE_VIEW.indexOf(Util.getUserAgent()) != -1) this.isMobile = true;
		if(Variables.TABLET_VIEW.indexOf(Util.getUserAgent()) != -1) this.isTablet = true;

		this.sw = $(window).width();
		this.sh = Math.floor(this.sw/16*9);
	}


	setSlide()
	{
		var def_ = new $.Deferred();
		this.loadTopSlide()
		.then(()=> this.loadSlide())
		.then(()=>
			{
				this.updateSlide(true);
				if(this.slideImages.length > 1)
				{
					this.slideTimer = setInterval(()=>{this.updateSlide();},4000);
				}

				def_.resolve()
			}
		);
		return def_.promise();
	}


	loadTopSlide()
	{
		var def_ = new $.Deferred();
		if(this.slides.length > 0)
		{
			this.loadImage(this.slides[0])
			.then(()=>def_.resolve())
		}
		else {
			def_.resolve();
		}
		return def_.promise();
	}


	loadSlide()
	{
		var def_ = new $.Deferred();
		var dfs_ = [];
		if(this.slides.length > 1)
		{
			for(var i=1; i<this.slides.length; i++)
			{
				dfs_.push(this.loadImage(this.slides[i]));
			}
			$.when.apply(null, dfs_)
			.then(()=>{def_.resolve()});
		}
		else {
			def_.resolve();
		}
		return def_.promise();
	}


	loadImage(imageURL_)
	{
		var def_ = new $.Deferred();
		var image_ = new Image();
		console.log("load "+imageURL_);
		image_.onload = ()=>
		{
			this.$videoSlide.append(image_);
			this.slideImages.push(image_);
			this.currentSlide = this.slideImages.length-1;
			console.log("loaded "+imageURL_);
			def_.resolve();
		}
		image_.src = imageURL_;
		return def_.promise();
	}


	setPlayer()
	{
		console.log("set player")
		this.playerDef = new $.Deferred();
		this.player = new YT.Player(this.embedID,
			{
				width: this.sw,
				height: this.sh,
				videoId: this.videoID,
				playerVars: { 'autoplay': 0, 'showinfo': 0, 'rel': 0, 'controls':0},
				events: {
					'onReady': (e)=> this.onPlayerReady(e)
				,	'onStateChange': (e)=> this.onPlayerStateChange(e)
				}
			}
		);

		return this.playerDef.promise();
	}


	updateSlide(isFirst_ = false)
	{

		for (var i = 0; i < this.slideImages.length; i++) {
			if(i != this.currentSlide) $(this.slideImages[i]).css({"z-index":1});
		}
		$(this.slideImages[this.currentSlide]).css({"opacity":1,"z-index":3});
		this.currentSlide = (this.currentSlide+1)%this.slideImages.length;

		if(isFirst_)
		{
			$(this.slideImages[this.currentSlide]).css({"opacity":1,"z-index":5});
			// $(this.slideImages[this.currentSlide]).animate({"opacity":1,"z-index":5},1000);
		}
		else
		{
			$(this.slideImages[this.currentSlide]).css({"opacity":0,"z-index":5});
			$(this.slideImages[this.currentSlide]).animate({"opacity":1},1000);
		}
	}



	onPlayerReady(e)
	{
		this.player  = e.target;
		this.$player = $("#"+this.embedID);
		this.isReady = true;

		if(this.showBtnFirst) this.$playBtn.show();
		if(!this.isMobile || !this.isTablet)
		{
			this.$playBtn.on("click", (e)=> this.start());
		}
		this.trigger("callReady");
		this.playerDef.resolve();
	}


	onPlayerStateChange(e)
	{
		if(this.player.getPlaybackQuality() != "hd1080")
		{
			this.player.setPlaybackQuality("hd1080");
		}
		console.log(e.data)
		switch(e.data)
		{
			case -1:
			case 3:
				this.$playerSet.addClass("loading");
				this.$playerSet.removeClass("play");
				this.trigger("callPre");
				this.isPlaying = false;
				break;

			case 2:
				this.$playerSet.removeClass("loading");
				this.trigger("callStop");
				this.isPlaying = false;
				break;

			case 1:
				this.$playerSet.removeClass("loading");
				this.$playerSet.addClass("play");
				this.trigger("callResize");
				this.trigger("callPlay");
				this.player.setVolume(100);
				this.isPlaying = true;
				break;

			case 0:
				this.trigger("endMovie");
				this.isPlaying = false;
				break;
		}
	}

	start(delay_ = 0)
	{
		if(delay_ == 0)
		{
			if(this.isReady && !this.isMobile && !this.isTablet)
			{
				this.player.playVideo();
			}
			//this.$cover.hide();
			this.isPlaying = true;
		}
		else
		{
			var df_ = new $.Deferred();
			setTimeout(()=>df_.resolve() ,delay_);

			df_.promise()
			// .then()
			.then(()=>
				{
					// //this.$cover.animate({opacity: 0}, 700).promise()
					// .then(()=>
					// 	{
					// 		//this.$cover.css("opacity",1)
					// 		//this.$cover.hide();
					// 		this.isPlaying = true;
					// 	}
					// );
					if(this.isReady && !this.isMobile && !this.isTablet)
					{
						this.player.playVideo();
					}
				}
			)
		}
	}


	stop()
	{
		if(this.isReady && !this.isMobile && !this.isTablet)
		{
			this.player.stopVideo();
		}

		// this.$playBtn.show();
		//this.$cover.show();
		this.isPlaying = false;
	}


	reset()
	{
		// this.$playBtn.show();
		this.player.seekTo(0)
		//this.$cover.show();
	}


	show()
	{
		//this.$cover.show();
		this.$playerSet.show();
		if(this.$player) this.$player.show()
	}

	hide(delay_ = 0)
	{
		//this.$cover.hide();
		this.$playerSet.hide();
		if(this.$player) this.$player.hide()
	}

	onClickPLayList()
	{
		if(this.isPlaying) {
			this.stop();
		}
		else {
			this.show();
			this.start();
		}
		if(this.isMobile || this.isTablet)	this.trigger("callPlay");
	}

	hideBtn()
	{
		this.$playBtn.hide();
	}

	showBtn()
	{
		this.$playBtn.hide();
	}

	getCurrentTime()
	{
		if(this.player)
		{
			return this.player.getCurrentTime();
		}
		else
		{
			return -1;
		}

	}


	resize(sw_, sh_, top_=0, left_=0)
	{
		if(this.$player)
		{
			this.$player.attr({width:sw_, height:sh_})
			this.$player.css({top:top_, left:left_})
		}

		this.resizeSlide(sw_, sh_, top_, left_)
	}


	resizeSlide(sw_, sh_, top_=0, left_=0)
	{
		if(this.$videoSlide)
		{
			this.$videoSlide.width(sw_);
			this.$videoSlide.height(sh_);
			this.$videoSlide.css("top",top_);
			this.$videoSlide.css("left",left_);
		}
	}
}

module.exports = YoutubePlayer;
