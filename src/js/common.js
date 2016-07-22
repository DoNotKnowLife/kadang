$(function(){
	//登录/注册按钮事件start
    //登录框弹出
	$(".enter_a").on("click",function(){
		$(".boss").show();
		enter();
		$(".shade").css({"display":"block"});
		$(".enter_box").animate({"right":0});
		
	});
	//注册框弹出
	$(".login_a").on("click",function(){
		$(".boss").show();
		login();	
		$(".shade").css({"display":"block"});
		$(".enter_box").animate({"right":0});
			
	});
	//登录/注册框关闭按钮
	$(".eb_close").on("click",function(){
		$(".enter_box").animate({"right":-1150},function(){
			$(this).closest(".boss").hide();
			$(".shade").css({"display":"none"});
		});
	});
	//表单注册/登录切换;
	$(".toregister_a").on("click",function(){		
		login();
		
	});
	$(".tologin_a").on("click",function(){
		enter();
	});
	//注册显示
	function login(){
		$(".login_form").show();
		$(".enter_form").hide();
	}
	//登录显示
	function enter(){
		$(".login_form").hide();
		$(".enter_form").show();
	}
	//自动登录点击事件
	$(".autologin").on("click",function(){
		$(this).toggleClass("doauto");
	});
	//登录/注册按钮事件end
	
	//菜单栏滑动下边框特效
	var $ul = $(".menu-list");
	//var $a_padding = ($(".menu-list>li:not('last')").children("a").outerWidth()-$(".menu-list>li:not('last')").children("a").width())/2;
	$(".menu-list>li:not('last')").hover(function(){	
		var $a_padding = ($(this).children("a").outerWidth()-$(this).children("a").width())/2
		$(".navHover").stop(true).animate({"width":$(this).children("a").width()+$a_padding,"opacity":1,"left":$(this).offset().left-$ul.offset().left+$a_padding})
		console.log($(this).width())
		//console.log($(this).offset().left)
	},function(){
		$(".navHover").stop(true).animate({"width":0,"opacity":0,"left":0},100)
	});
});
