$(function(){
	/*$(".myshop").menu();*/
//	$(".business-handle dl").menu();
	//shopcar-我的收藏;
	$(".business-handle dl dt").click(function(){
		if($(this).parent().hasClass("collapsed")){
			$(this).parent().animate({"height":96}).removeClass("collapsed");
		}else{
			$(this).parent().animate({"height":32}).addClass("collapsed");
		}
	});
	
	/*====搜索框特效====*/
	$(".searchtxt").hover(function(){
		$(this).css({"width":240});
	},function(){	
		if($(this).is(":focus")){
			
			$(this).css({"width":240});
		}else{
			$(this).css({"width":200});
			
		}	
	}).focus(function(){
		$(this).css({"width":240});
	}).blur(function(){
		$(this).css({"width":200});
	});
});
