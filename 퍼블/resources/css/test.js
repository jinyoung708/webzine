$(function(){

	var mGnbReady = false;

	// m_gnb 열기
	$(".mgnb_open").click(function(e){
		mGnbReady = true;
		$(".gnb_box").show().animate({right:0}, 400);
	});

	// m_gnb 메뉴 클릭
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
		$(".gnb_box").stop().animate({right:-309}, 400, function(e){
			$(this).hide();
		});
		mGnbReady = false;
	}
	
	// visualSwiper
	var visualSwiper = undefined;
	function initSwiper(screenWidth){ 
        if(screenWidth < 1200 && visualSwiper == undefined){
			visualSwiper = new Swiper('.visualSwiper', {
				slidesPerView: 1,
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
			});
			setTimeout(function() {
				visualSwiper.update();
			}, 100);
			
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
		if($(".visualSwiper").length){
			initSwiper(windowW);
		}

		if(windowW<769){
			mobileBox();
		}
		else{
			pcBox();
			if(mGnbReady){
				mGnbClose();
			}
		}
	});
	$(window).trigger("resize");

	function mobileBox(){
		let $imgT = $(".life_wrap .row.resize .col .img_txt");
		$(".life_wrap .row.resize .col .txt_box").before($imgT);
	}
	function pcBox(){
		let $txtB = $(".life_wrap .row.resize .col .img_txt");
		$(".life_wrap .row.resize .col .txt_box").after($txtB);
	}

	// contentSwiper
	var contentSwiper = new Swiper('.contentSwiper', {
		slidesPerView: "auto",
		breakpoints: {
			320: {
			  spaceBetween: 7
			},
			1200: {
				spaceBetween: 18,
			}
		}
	});
	// top 버튼
	$(".quick_box .quick_list .top").click(function(){
		$("html,body").animate({scrollTop:0}, 300);
		return false;
	});

});