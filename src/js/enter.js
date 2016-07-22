$(function(){
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
	$(".menu").accordion();
});