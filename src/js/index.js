$(function(){
	//banner图
	var now = 0;
	fnChange();
	var timer=setInterval(function(){	
		now++;
		fnFadeChange();
		
	},1000);
	
	 
	//移入出时开始或关闭
	 $(".banner_box").hover( function(){
            clearInterval(timer);
        },function(){
           timer = setInterval(function(){            
                fnFadeChange();
                 now++;
            },1000);
        });
	 //左右切换键
    	$(".prev_tab").click(function(){
    		now--;
    		fnFadeChange();
    		return false;
    	});
    	$(".next_tab").click(function(){
    		now++;
    		fnFadeChange();
    		return false;
    	});
	 //切换函数
        function fnFadeChange(){
             if (now>=$(".banner_pic>li").length) {
                now=0;
            }else if(now<0){
                now=$(".banner_pic>li").length-1;
            };
           fnChange();
        };
        //动态添加li
       	$(".banner_pic li").each(function(){
			$(".banner_btn").append("<li/>").children("li").first().addClass("active");
		});
		$(".banner_btn").on("click","li",function(){
			now = $(this).index();
			fnFadeChange();
		});		
        //给li的父元素事件委托添加点击事件;
        $(".banner_pic").on("click","li",function(){
        	
            now = $(this).index();
            console.log($(this).prevAll().length);
            if($(this).hasClass("active"))
            fnChange();
        });
	 function fnChange(){
//      	$(".banner_pic>li").each(function(){
//              $(".banner_btn>li").removeClass("active");
//              $(".banner_pic>li").fadeOut(300);
//          });
            $(".banner_btn>li").eq(now).addClass("active").siblings().removeClass("active");
            $(".banner_pic>li").eq(now).animate({"z-index":1,"opacity":1}).siblings().animate({"z-index":0,"opacity":0});
        };
    //banner图结束
    
    //menu开始
    $(".bn_li2").find("li").hover(function(){
    	$(this).find("i").css({"display":"block"});
    },function(){
    	$(this).find("i").css({"display":"none"});
    });
    //menu结束
    
    //floor_main开始
    $(".fm_wrap>div").children("a").hover(function(){
    	$(this).addClass("msetr");
    },function(){
    	$(this).removeClass("msetr");
    });
    $(".fm_wrap>div").children("dl").hover(function(){
    	$(this).addClass("msetr");
    },function(){
    	$(this).removeClass("msetr");
    });
    
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
	
	//指定位置floor_tab变为固定状态
	var $floor_h3 = $(".floor_main>h3");
	var $floor = $(".louceng");
	var loutiHight = $(".floor_tab").height(); 
	$(window).scroll(function(){
		var nScrollTop = $(window).scrollTop();
		
		$floor.each(function(idx,ele){
			if(nScrollTop >= $(ele).offset().top+loutiHight && nScrollTop <= $(ele).offset().top + $(ele).outerHeight()/2){
				$(".floor_tab ul").find("li").removeClass("current").eq(idx).addClass("current");
			}
		});
		
		
		
		if(nScrollTop >= 1579){
			$(".floor_tab").css({"position":"fixed","left":0,"top":0,"background-color":"#fff","z-index":10000});
		}else{
			$(".floor_tab").css({"position":"relative"});
		}
	});
	//楼梯跳转
	$(".floor_tab ul").on("click","li",function(){
		$(this).addClass("current").siblings().removeClass("current");
		var nScrollTop = $(".floor_main h3").eq($(this).index()).offset().top-$(".floor_tab").height();
		//$(document).scrollTop($(".floor_main h3").eq($(this).index()).offset().top-$(".floor_tab").height());
		$('html,body').animate({scrollTop:nScrollTop})
	});
	
})
