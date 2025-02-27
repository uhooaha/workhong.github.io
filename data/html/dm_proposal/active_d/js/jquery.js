// JavaScript Document

$(function(){
	
	var ua = window.navigator.userAgent.toLowerCase(); 

	if ( /iphone/.test(ua) || /ipad/.test(ua) || /android/.test(ua) || /opera/.test(ua) || /bada/.test(ua) ) { 
		$("#visual").addClass("mobile");
	} 
	
	$(".btnLogin").click(function(){
		
		$("#wrapper").animate({"top":0},500,"easeInOutExpo");
		return false;	
		
	});
	
	$(".btnLoginClose").click(function(){
		
		$("#wrapper").animate({"top":-400},500,"easeInOutExpo");
		$("#smart").slideDown(500,"easeInOutExpo");
		return false;	
		
	});
	
	
	$(".btnSmartClose").click(function(){
	
		$("#smart").slideUp(500,"easeInOutExpo");
		return false;	
		
	});
	
	$(".resortAll").click(function(){
	
		$("#resortAll").slideDown(500,"easeInOutExpo");
		return false;	
		
	});
	
	
	$("#resortAll a").click(function(){
	
		$("#resortAll").slideUp(500,"easeInOutExpo");
		return false;	
		
	});
	
	$("#gnb .sub").click(function(){
	
		$("#gnbOpen").slideDown(500,"easeInOutExpo");
		return false;	
		
	});
	
	$("#gnbOpen .close").click(function(){
	
		$("#gnbOpen").slideUp(500,"easeInOutExpo");
		return false;	
		
	});
	
	$("#event .open").mouseover(function(){
	
		$("#event .reservation,#event .event,#event .package,#event .food,#event .close").css("display","block");
		$(this).css("display","none");
		$("#event .reservation").stop().animate({"bottom":440},500,"easeInOutExpo");
		$("#event .event").stop().animate({"bottom":380},500,"easeInOutExpo");
		$("#event .package").stop().animate({"bottom":320},500,"easeInOutExpo");
		$("#event .food").stop().animate({"bottom":260},500,"easeInOutExpo",function(){
			
			if($(window).width()>1200){
				$("#event .reservation,#event .event,#event .package,#event .food,#event .close").animate({"width":120,"margin-left":530},500,"easeInOutExpo");
			}else{
				$("#event .reservation,#event .event,#event .package,#event .food,#event .close").animate({"width":120,"margin-left":370},500,"easeInOutExpo");
			}
			
		});
		return false;	
		
	});
	
	$("#event .close").click(function(){
	
		if($(window).width()>1200){
			$("#event .reservation,#event .event,#event .package,#event .food,#event .close").animate({"width":50,"margin-left":600},500,"easeInOutExpo",function(){
				
				$(this).animate({"bottom":200},500,"easeInOutExpo",function(){
					
					$(this).css("display","none");
					$("#event .open").css("display","block");
					
				});	
				
			});
		}else{
			$("#event .reservation,#event .event,#event .package,#event .food,#event .close").animate({"width":50,"margin-left":450},500,"easeInOutExpo",function(){
				
				$(this).animate({"bottom":200},500,"easeInOutExpo",function(){
					
					$(this).css("display","none");
					$("#event .open").css("display","block");
					
				});	
				
			});

			
		}
		return false;	
		
	});
	
	$("#eventOpen a").click(function(){
	
		$("#eventOpen").animate({"left":"100%"},500,"easeInOutExpo");
		return false;	
		
	});
	
	$("#event .reservation,#event .event,#event .package,#event .food").click(function(){
	
		$("#eventOpen").animate({"left":0},500,"easeInOutExpo");
		return false;	
		
	});
	
	
	//////////////////////////////    델피노    /////////////////////////////////////
	
	$("#about .left").click(function(){
	
		$("#about .image").animate({backgroundPosition:"left top"},500,"easeInOutExpo");
		$("#about .text").animate({backgroundPosition:"left top"},500,"easeInOutExpo");
		return false;	
		
	});
	
	$("#about .right").click(function(){
	
		$("#about .image").animate({backgroundPosition:"right top"},500,"easeInOutExpo");
		$("#about .text").animate({backgroundPosition:"right top"},500,"easeInOutExpo");
		return false;	
		
	});
	
});
