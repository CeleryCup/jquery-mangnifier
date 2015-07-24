(function($){
	$.fn.easyzoom = function(options) {
		var settings = $.extend({
			transformer: function(name) {
                     return name.replace(/thumbnail/,'photo');
                   },
            xzoom: 350,       // default width for zoomed area
            yzoom: 350,       // default height for zoomed area
            offset: 10, 	  // the offset distance between two areas
            position: 'right' // the position relative to original pic, determines the offset value
		}, options || {});

		$(this).hover(function(){
			var imageLeft = $(this).get(0).offsetLeft;
			var imageRight = $(this).get(0).offsetRight;
			var imageTop =  $(this).get(0).offsetTop;
			var imageWidth = $(this).get(0).offsetWidth;
			var imageHeight = $(this).get(0).offsetHeight;
			var srcLocation = settings.transformer($(this).attr('src'));
		

			if($("div.zoomedArea").get().length === 0) {
				$(this).after("<div class='zoomedArea'><img class='bigImg' src='"+srcLocation+"'/></div>");
			}
			if(settings.position == "right") {
				leftpos = imageLeft + imageWidth + settings.offset;
			} else{	
				leftpos = imageLeft - settings.xzoom - settings.offset;
			}
			$("div.zoomedArea").css({position: "absolute", "top": imageTop, "left": leftpos, "overflow": "hidden", "border":"1px soldi red"});
			$("div.zoomedArea").width(settings.xzoom);
			$("div.zoomedArea").height(settings.yzoom);
			$("div.zoomedArea").show();

			// when move mouse in thumbnail, th zoomed Area will scroll automatically
			$(document.body).bind('mousemove', function(e){
				var bigWidth = $('.bigImg').get(0).offsetWidth;
				var bigHeight = $('.bigImg').get(0).offsetHeight;
				
				// the ratio between zoomedArea versus thumbnail
				var scaleX = Math.round(bigWidth / imageWidth);
				var scaleY = Math.round(bigHeight / imageHeight);

				mouse = new MouseEvent(e);
				// different offset for directions
				scrollY = mouse.y - imageTop - imageHeight / 2;
				$("div.zoomedArea").get(0).scrollTop = scrollY * scaleY * 0.9;
				scrollX = mouse.x - imageLeft - imageWidth/ 2;
				$("div.zoomedArea").get(0).scrollLeft = scrollX * scaleX * 1.1;



			});
			
		}, function(){
			$("div.zoomedArea").hide();
			$(document.body).unbind("mousemove");
			$("div.zoomedArea").remove();
		});

	}

	function MouseEvent(e) {
		this.x = e.pageX
		this.y = e.pageY
	}
	return this;
})(jQuery);

