$(function(){
	// var $gnb = $(".gnb"),
	// 	$mGnb = $(".m_gnb"),
	// 	$sitemap = $(".sitemap"),
	// 	$topBtn = $(".top_btn"),
	// 	$contents = $(".contents"),
	// 	$header = $(".header"),
	// 	$gnbClone = $gnb.html(),
	// 	mGnbReady = false,
	// 	pageY,
	// 	contentsFrontY; // 스크롤 시 gnb 고정을 위한 이벤트 발생 offset 값 설정.

	// m_gnb, sitemap 복사
	// $mGnb.html($gnbClone);
	// $sitemap.html($gnbClone);
	// $mGnb.find(".sub_gnb").attr("class","m_sub_gnb");
	// $mGnb.find(".sub2_gnb").attr("class","m_sub2_gnb");
	// $sitemap.find(".sub_gnb").attr("class","sitemap_sub_gnb");
	// $sitemap.find(".sub2_gnb").attr("class","sitemap_sub2_gnb");


	var mGnbReady = false;

	// m_gnb 열기
	$(".mgnb_open").click(function(e){
		mGnbReady = true;
		$(".gnb_box").show().animate({left:0}, 400);
	});

	

	$(".gnb > li > a").click(function(){
		if(mGnbReady){
			$(this).parent().addClass("active").siblings().removeClass("active");
			return false;
		}
		else{
			$(".gnb > li:first-child").addClass("active").siblings().removeClass("active");
			return;
		}
	});

	// m_gnb 닫기
	$(".mgnb_close").click(function(e){
		mGnbClose();
	});

	function mGnbClose(){
		$(".gnb_box").stop().animate({left:-309}, 400, function(e){
			$(this).hide();
		});
		mGnbReady = false;
	}

	

	

	var visualSwiper = undefined;
	function initSwiper(screenWidth){ 
        if(screenWidth < 1200 && visualSwiper == undefined){
			visualSwiper = new Swiper('.visualSwiper', {
				slidesPerView: 1,
				autoHeight: true,
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
			});
        }else if(screenWidth > 1199 && visualSwiper != undefined){
			visualSwiper.destroy();
			visualSwiper = undefined;
            $('.visualSwiper .swiper-wrapper').removeAttr('style');
            $('.visualSwiper .swiper-slide').removeAttr('style');
        }
    }

	// 반응형 시
	$(window).resize(function(){
		windowW = window.innerWidth;
		initSwiper(windowW);

		if(windowW<1200){
			// $("body").removeClass("scroll_fixed");
			// black_bg_leave();
			// $(".sitemap_wrap").stop().fadeOut(300);
			
			
		}
		else{
			
			if(mGnbReady){
				mGnbClose();
			}
			//$(".gnb_box").stop().show();
			
		}
	});
	$(window).trigger("resize");

	

	var contentSwiper = new Swiper('.contentSwiper', {
		slidesPerView: "auto",
		spaceBetween: 18
	});

});