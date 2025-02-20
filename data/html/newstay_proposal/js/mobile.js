// JavaScript Document

$(function(){
	
	
	// mobile - mypage
	
	$("#mGnb a").click(function(){
		
		$("body.mobile #mobileWraper").css( "overflow", "hidden");
		$("body.mobile #contentsWrap").css( "height", "756px");
		$("body.mobile #contentsWrap .myArea").css("display", "block");
		
	});
	
	$("body.mobile #contentsWrap .myArea .close").click(function(){
		
		$("body.mobile #mobileWraper").css( "overflow", "visible");
		$("body.mobile #contentsWrap").css( "height", "auto");
		$("body.mobile #contentsWrap .myArea").css("display", "none");
		
	});
	
	
});
