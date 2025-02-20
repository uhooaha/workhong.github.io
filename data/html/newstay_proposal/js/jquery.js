// JavaScript Document

$(function(){
	
	
	$("#visual .right").click(function(){
		
			$("#visual .image1").stop().animate({"opacity":0},1000,"easeInOutExpo");
			$("#visual .image2").stop().animate({"opacity":1},1000,"easeInOutExpo");

	});
	
	$("#visual .left").click(function(){
		
			$("#visual .image1").stop().animate({"opacity":1},1000,"easeInOutExpo");
			$("#visual .image2").stop().animate({"opacity":0},1000,"easeInOutExpo");
			
	});
	
	
	$("#contents .ui .left").click(function(){
		
		$("#contents .imageWrap .image").animate({"left":0},500,"easeInOutExpo");
		$("#contents .textWrap .text").animate({"left":0},500,"easeInOutExpo");
		$("#contents .con2 .ui").css({"background-position":"center top"});
		
	});
	
	$("#contents .ui .right").click(function(){
		
		$("#contents .imageWrap .image").animate({"left":"-100%"},500,"easeInOutExpo");
		$("#contents .textWrap .text").animate({"left":"-100%"},500,"easeInOutExpo");
		$("#contents .con2 .ui").css({"background-position":"center bottom"});
		
	});
	
	
	$("#gnb .menu").click(function(){
		
		$("#gnbActive").slideDown(500,"easeInOutExpo");
		return false;
		
	});
	
	$("#gnbActive .close").click(function(){
		
		$("#gnbActive").slideUp(500,"easeInOutExpo");
		return false;
		
	});
	
	
	$("#gnb .login").click(function(){
		
		$("#contents .con0").css({"display":"block"});
		$("#contents .con1").css({"display":"none"});
		return false;
		
	});
	
	var brand = false;
	
	$("#gnb .util .brandBtn").click(function(){
		
		if(brand==false){
			$("#gnb .brand").slideDown(500,"easeInOutExpo");
			$("#gnb .util .btn").css({"background-position":"center bottom"});
			brand=true;
			return false;
		}else{
			$("#gnb .brand").slideUp(500,"easeInOutExpo");
			$("#gnb .util .btn").css({"background-position":"center top"});
			brand=false;
			return false;
		}
		
	});
	
	
	var cal = false;
	
	$("#contents .cal").click(function(){
		
		if(cal==false){
			$("#contents .cal .pop").css({"opacity":1});
			cal=true;
			return false;
		}else{
			$("#contents .cal .pop").css({"opacity":0});
			cal=false;
			return false;
		}
		
	});
	
	
	var com = false;
	
	$("#gnb .com").click(function(){
		
		if(com==false){
			$("#gnb .comBtn").slideDown(500,"easeInOutExpo");
			$("#gnb .com").css({"background-position":"center bottom"});
			com=true;
			return false;
		}else{
			$("#gnb .comBtn").slideUp(500,"easeInOutExpo",function(){
				
				$("#gnb .com").css({"background-position":"center top"});	
				
			});
			
			com=false;
			return false;
		}
		
	});
	
	
	
	/////////////////////////////             모바일                 /////////////////////////////
	
	
	var mobileMenu = false;
	
	$("#mobileWraper #top .menu").click(function(){
		
		if(mobileMenu==false){
			$("#contentsWrap .menu").slideDown(500,"easeInOutExpo");
			$(this).css({"background":"url(images/mobile_menu_close.png) no-repeat center top","background-size":"cover"});
			mobileMenu = true;
			return false;
		}else{
			$("#contentsWrap .menu").slideUp(500,"easeInOutExpo");
			$(this).css({"background":"none"});
			 mobileMenu = false;
			 return false;
		}
	});
	
	$("#mobileWraper .visualWrap .left").click(function(){
		
			$("#mobileWraper .visualWrap .image").animate({"left":0},500,"easeInOutExpo",function(){
				
				$("#mobileWraper .visualWrap .text1").animate({"opacity":1},500,"easeInOutExpo");	
				
			});
			$("#mobileWraper .visualWrap .text2").animate({"opacity":0},500,"easeInOutExpo");
			$("#mobileWraper .visualWrap .ui .indi").css({"background-position":"top center"});
			
	});
	
	$("#mobileWraper .visualWrap .right").click(function(){
		
			$("#mobileWraper .visualWrap .image").animate({"left":"-100%"},500,"easeInOutExpo",function(){
				
				$("#mobileWraper .visualWrap .text2").animate({"opacity":1},500,"easeInOutExpo");	
				
			});
			$("#mobileWraper .visualWrap .text1").animate({"opacity":0},500,"easeInOutExpo");
			$("#mobileWraper .visualWrap .ui .indi").css({"background-position":"bottom center"});
			
	});
	
	$("#mobileWraper .con2 .ui .left").click(function(){
		
			$("#mobileWraper .imageWrap .image").animate({"left":0},500,"easeInOutExpo");
			$("#mobileWraper .textWrap .text").animate({"left":0},500,"easeInOutExpo");
			
	});
	
	$("#mobileWraper .con2 .ui .right").click(function(){
		
			$("#mobileWraper .imageWrap .image").animate({"left":"-100%"},500,"easeInOutExpo");
			$("#mobileWraper .textWrap .text").animate({"left":"-100%"},500,"easeInOutExpo");
			
	});
	
	
});
