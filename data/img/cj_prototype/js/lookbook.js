// JavaScript Document

$(function(){
	
	// lookbook
	var page_bottom = 80;
	
	$(window).scroll(function(){
		conFixed();
	});
	
	conFixed();
	
	function conFixed(){
		
		var st = $(window).scrollTop();
		
		if( st > page_bottom && st < $("#wrapper").height() - $("#footer").height() - $("#content .left").height() + 60 ) {
			
			$("#content .left").css({ "position":"fixed", "top":"-60px", "left":"50%", "margin-left":"-400px" });
			
		} else if ( st <= page_bottom ) {
			
			$("#content .left").css({ "position":"absolute", "top":0, "left":0, "margin-left":0 });
			
		} else {
			
			$("#content .left").css({ "position":"absolute", "top": $("#wrapper").height() - $("#content .left").height() - $("#footer").height(), "left":0, "margin-left":0 });
		}
		
	}
	
	
});
