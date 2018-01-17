$(function() {
	//判斷Mac作業系統
	 if (navigator.userAgent.indexOf('Mac OS X') != -1) {
            $("body").addClass('mac-user')
      }


      //長照搜尋區塊-關鍵字搜尋彈窗控制
      $(".ltc-box .nav li.keyword .input-btn, .ltc-box .nav li.keyword i").click(function() {
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

      //長照搜尋區塊-下拉選單聯動控制
      //市區下拉選單
      $("#sel-city").change(function(){
            switch (parseInt($(this).val())){
                  case 0:
                        $("#sel-area option").remove();
                        $("#sel-area").append($("<option value=''>鄉鎮區</option>"));
                        break;
                  case 1:
                        $("#sel-area option").remove();
                        var array = [ "中山區", "信義區", "文山區", "大安區" ];
                        //利用each遍歷array中的值並將每個值新增到Select中
                        $.each(array, function(i, val) {
                          $("#sel-area").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
                        });
                        break;
                  case 2:
                        $("#sel-area option").remove();
                        var array = [ "前鎮區", "鳳山區", "小港區", "永安區" ];
                        //利用each遍歷array中的值並將每個值新增到Select中
                        $.each(array, function(i, val) {
                          $("#sel-area").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
                        });
                        break;
            }
      })
      //服務類型下拉選單
      $("#sel-type-1").change(function(){
            switch (parseInt($(this).val())){
                  case 0:
                        $("#sel-type-2 option").remove();
                        $("#sel-type-2").append($("<option value=''>服務類型</option>"));
                        break;
                  case 1:
                        $("#sel-type-2 option").remove();
                        var array = [ "類型1-1", "類型1-2", "類型1-3", "類型1-4" ];
                        //利用each遍歷array中的值並將每個值新增到Select中
                        $.each(array, function(i, val) {
                          $("#sel-type-2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
                        });
                        break;
                  case 2:
                        $("#sel-type-2 option").remove();
                        var array = [ "類型2-1", "類型2-2", "類型2-3", "類型2-4" ];
                        //利用each遍歷array中的值並將每個值新增到Select中
                        $.each(array, function(i, val) {
                          $("#sel-type-2").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
                        });
                        break;
            }
      })

      //右側導航列根據scrollbar控制
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

      //
      $(".ad-search-box .footer-btn a").click(function() {
          var pos = $(".ltc-box").offset().top;
          $("html,body").animate({ scrollTop: pos-100 }, 700);
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
		autoplaySpeed: 3000,
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
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 4,
                    autoplay: false
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
		autoplay: false,
		autoplaySpeed: 4000,
		responsive: [
                {
                  breakpoint: 840,
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
