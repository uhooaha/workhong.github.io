// JavaScript Document

$(function(){

	
	$("#gnb .tooltipBtn").mouseover(function(){
		
			$("#gnb .tooltip").css({"display":"block"});
		
	});
	
	$("#gnb .tooltipBtn").mouseout(function(){
		
			$("#gnb .tooltip").css({"display":"none"});
		
	});
	
	$("#util .tooltipBtn").mouseover(function(){
		
			$("#util .tooltip").css({"display":"block"});
		
	});
	
	$("#util .tooltipBtn").mouseout(function(){
		
			$("#util .tooltip").css({"display":"none"});
		
	});
	
	
	$("#visual .ui .right").click(function(){
		
			$("#visual .imageWrap .container").animate({"left":-780},500,"easeInOutExpo");
			$("#visual .textWrap .container").animate({"left":-400},500,"easeInOutExpo");
			return false;
		
	});
	
	$("#visual .ui .left").click(function(){
		
			$("#visual .imageWrap .container").animate({"left":0},500,"easeInOutExpo");
			$("#visual .textWrap .container").animate({"left":0},500,"easeInOutExpo");
			return false;
		
	});
	
	
	$("#story .conWrap .ui .left").click(function(){
		
			$("#story .textWrap .container").animate({"left":0},500,"easeInOutExpo");
			$("#story .imageWrap .container").animate({"left":0},500,"easeInOutExpo");
			$("#story .conWrap .container").animate({"left":0},500,"easeInOutExpo");
			$("#story .conWrap .ui").css({"background-position":"center top"},"easeInOutExpo");
			return false;
		
	});
	
	$("#story .conWrap .ui .right").click(function(){
		
			$("#story .textWrap .container").animate({"left":-850},500,"easeInOutExpo");
			$("#story .imageWrap .container").animate({"left":-1070},500,"easeInOutExpo");
			$("#story .conWrap .container").animate({"left":-951},500,"easeInOutExpo");
			$("#story .conWrap .ui").css({"background-position":"center bottom"},"easeInOutExpo");
			return false;
		
	});
	
	
	$("#goods .goodsWrap .w1 div,#goods .goodsWrap .w2 div").mouseover(function(){
		
			$(this).css({"z-index":1});
			return false;
		
	});
	
	$("#goods .goodsWrap .w1 div,#goods .goodsWrap .w2 div").mouseout(function(){
		
			$(this).css({"z-index":0});
			return false;
		
	});
	
	$(window).scroll(function(){
		
		var st = $(window).scrollTop();
		console.log(st);
		
		if(st > 240){
			
			$("#story .box").addClass('animated fadeInLeft');
			$("#story .textWrap").addClass('animated fadeInRight');
			$("#story .conWrap").addClass('animated fadeInRight');
				
		}
		
		if(st > 1500){
			
			$("#goods .goodsWrap .w1 .obj1").addClass('animated fadeInRight');
			$("#goods .goodsWrap .w1 .obj2").addClass('animated fadeInLeft');
			$("#goods .goodsWrap .w1 .obj3").addClass('animated fadeInRight');
			$("#goods .goodsWrap .w2 .obj1").addClass('animated fadeInRight');
			$("#goods .goodsWrap .w2 .obj2").addClass('animated fadeInLeft');
			$("#goods .goodsWrap .w2 .obj3").addClass('animated fadeInRight');
				
		}
		
	});
	
	$(window).scroll();
	
	$("#goods .goodsWrap .ui .left,#goods .tab .left").click(function(){
		
			$("#goods .goodsWrap .w2").css({"display":"none"});
			$("#goods .goodsWrap .w1").css({"display":"block"});
			$("#goods .goodsWrap .w1 .obj1").addClass('animated fadeInRight');
			$("#goods .goodsWrap .w1 .obj2").addClass('animated fadeInLeft');
			$("#goods .goodsWrap .w1 .obj3").addClass('animated fadeInRight');
			$("#goods .tab").css({"background":"url(images/tab1.png) no-repeat center top"});
			return false;
		
	});
	
	$("#goods .goodsWrap .ui .right,#goods .tab .right").click(function(){
		
			$("#goods .goodsWrap .w1").css({"display":"none"});
			$("#goods .goodsWrap .w2").css({"display":"block"});
			$("#goods .goodsWrap .w2 .obj1").addClass('animated fadeInRight');
			$("#goods .goodsWrap .w2 .obj2").addClass('animated fadeInLeft');
			$("#goods .goodsWrap .w2 .obj3").addClass('animated fadeInRight');
			$("#goods .tab").css({"background":"url(images/tab2.png) no-repeat center top"});
			return false;
		
	});
	
	$("#content .view .left,#content .top .thumb .left").click(function(){
		
			$("#content .view .imageWrap .one").animate({"opacity":1},500,"easeInOutExpo");
			$("#content .view .imageWrap .two").animate({"opacity":0},500,"easeInOutExpo");
			$("#content .top .thumb").removeClass("on");
			return false;
		
	});
	
	$("#content .view .right,#content .top .thumb .right").click(function(){
		
			$("#content .view .imageWrap .one").animate({"opacity":0},500,"easeInOutExpo");
			$("#content .view .imageWrap .two").animate({"opacity":1},500,"easeInOutExpo");
			$("#content .top .thumb").addClass("on");
			return false;
		
	});
	
	
	$("#content .view").click(function(){
		
			$("#popWrap").css({"display":"block"});
			return false;
		
	});
	
	$("#content .view .imageWrap").mouseenter(function(){
		
		$("#mouseTrailer").css({"opacity":1});
		$(this).mousemove(function(e){
			
			var mouseX = e.pageX;
			var mouseY = e.pageY;
			$("#mouseTrailer").css({"left":mouseX+10,"top":mouseY+10});
			
		});		
	});
	
	$("#content .view .imageWrap").mouseleave(function(){
		
		$("#mouseTrailer").css({"opacity":0});
		
	});
	
	$("#popWrap .pop .view .left,#popWrap .pop .thumb .left").click(function(){
		
			$("#popWrap .pop .view .imageWrap .one").animate({"opacity":1},500,"easeInOutExpo");
			$("#popWrap .pop .view .imageWrap .two").animate({"opacity":0},500,"easeInOutExpo");
			$("#popWrap .pop .thumb").removeClass("on");
			return false;
		
	});
	
	$("#popWrap .pop .view .right,#popWrap .pop .thumb .right").click(function(){
		
			$("#popWrap .pop .view .imageWrap .one").animate({"opacity":0},500,"easeInOutExpo");
			$("#popWrap .pop .view .imageWrap .two").animate({"opacity":1},500,"easeInOutExpo");
			$("#popWrap .pop .thumb").addClass("on");
			return false;
		
	});
	
	$("#popWrap .pop .close").click(function(){
		
			$("#popWrap").css({"display":"none"});
			return false;
		
	});
	
	/*
	<script>
  function testAnim(x) {
    $('#animationSandbox').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
    });
  };

  $(document).ready(function(){
    $('.js--triggerAnimation').click(function(e){
      e.preventDefault();
      var anim = $('.js--animations').val();
      testAnim(anim);
    });

    $('.js--animations').change(function(){
      var anim = $(this).val();
      testAnim(anim);
    });
  });

</script>
	*/
});
