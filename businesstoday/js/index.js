$(function() {
	//判斷Mac作業系統
	 if (navigator.userAgent.indexOf('Mac OS X') != -1) {
            $("body").addClass('mac-user')
      }

      $(".ltc-box .nav li.keyword input, .ltc-box .nav li.keyword i").click(function() {
      	if ($(".ltc-box .search-lightbox, .ltc-box .mask").hasClass('active')) {
      		return false;
      	}else {
      		$(".ltc-box .search-lightbox, .ltc-box .mask").addClass('active');
      	}
      });
      $(".ltc-box .mask").click(function() {
      	if ($(".ltc-box .search-lightbox, .ltc-box .mask").hasClass('active')) {
      		$(".ltc-box .search-lightbox, .ltc-box .mask").removeClass('active');
      	}else {
      		return false;
      	}
     	});

	$(window).scroll(function () {
		var scrollVal = $(this).scrollTop();
		//console.log(scrollVal);
		if (scrollVal > 1375) {
			$(".sidebar").show(500);
		}
		if (scrollVal < 1375 ) {
			$(".sidebar").hide(500);
		}
		if (scrollVal > 5480 ) {
			if (!$(".sidebar").hasClass('fix-bottom')) {
				$(".sidebar").addClass('fix-bottom');
			}
		}
		if (scrollVal < 5480 ) {
			if ($(".sidebar").hasClass('fix-bottom')) {
				$(".sidebar").removeClass('fix-bottom');
			}
		}
	});


	//錨點功能，按鈕必須有data-target指定要滑到的區域的class或id名稱
	$(".btn-anchor").click(function() {
		var mao = $("."+$(this).attr('data-target')+"");
		var pos = $(mao).offset().top;
		$("html,body").animate({ scrollTop: pos-50 }, 700);
	});


	$(".main-banner-box").slick({
		dots: true,
		infinite: true,
		speed: 1000,
		centerPadding: '400px',
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 4000,
		nextArrow: '<i class="fa fa-arrow-circle-o-right next"></i>',
		prevArrow: '<i class="fa fa-arrow-circle-o-left prev"></i>',
		responsive: [
                {
                  breakpoint: 1890,
                  settings: {
                  	centerPadding: '350px',
                  }
                },
                {
                  breakpoint: 1790,
                  settings: {
                  	centerPadding: '300px',
                  }
                },
                {
                  breakpoint: 1690,
                  settings: {
                  	centerPadding: '250px',
                  }
                },
                {
                  breakpoint: 1590,
                  settings: {
                  	centerPadding: '200px',
                  }
                },
                {
                  breakpoint: 1490,
                  settings: {
                  	centerPadding: '150px',
                  }
                },
                {
                  breakpoint: 1390,
                  settings: {
                  	centerPadding: '100px',
                  }
                },
                {
                  breakpoint: 1290,
                  settings: {
                  	centerPadding: '50px',
                  }
                },
                {
                  breakpoint: 1190,
                  settings: {
                  	centerPadding: '0px',
                  }
                }
            ]
	});
	$(".news-box .article-box > ul").slick({
		infinite: true,
		speed: 1000,
		centerPadding: '0px',
		slidesToShow: 5,
		slidesToScroll: 1,
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [
                {
                  breakpoint: 1600,
                  settings: {
                    slidesToShow: 4
                  }
                },
                {
                  breakpoint: 1290,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1,
                    autoplay: false,
                  }
                }
            ]
	});
	$(".project-box .article-box > ul").slick({
		infinite: true,
		speed: 1000,
		centerPadding: '0px',
		slidesToShow: 4,
		slidesToScroll: 1,
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [
                {
                  breakpoint: 1260,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 840,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 420,
                  settings: {
                    slidesToShow: 1
                  }
                }
            ]
	});
	$(".health-box .article-box > ul").slick({
		infinite: true,
		speed: 1000,
		centerPadding: '0px',
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [
                {
                  breakpoint: 1100,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 760,
                  settings: {
                    slidesToShow: 1
                  }
                }
            ]
	});
})
