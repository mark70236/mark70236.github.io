var rolling = false
var isIE7 = !document.documentMode&&!!window.ActiveXObject
var game = ""

$(function() {


	// 啟動wow.js
	new WOW().init()

	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);

	$(".nav-btn-1").click(function() {
		$("html, body").animate({ scrollTop : 1200 }, 800,"easeOutBack")
	});
	$(".nav-btn-2").click(function() {
		$("html, body").animate({ scrollTop : 2300 }, 800,"easeOutBack")
	});
	$(".nav-btn-3").click(function() {
		$("html, body").animate({ scrollTop : 3480 }, 800,"easeOutBack")
	});
	$(".nav-btn-4").click(function() {
		$("html, body").animate({ scrollTop : 4750 }, 800,"easeOutBack")
	});
	$(".nav-btn-5").click(function() {
		$("html, body").animate({ scrollTop : 0 }, 1200,"easeOutBack")
	});

	$(".gift-1").click(function() {
		$(".gift-detail-box").removeClass('on1 on2')
		$(".gift-detail-box").addClass('on1')
		$(".gift li").removeClass('select')
		$(this).addClass('select')
		$(".game-type,.game-select-box").removeClass('hide')
		$("html, body").animate({ scrollTop : $(".gift-detail-anchor").offset().top }, 500,"easeOutBack")
	});
	$(".gift-2,.gift-3,.gift-4").click(function() {
		$(".gift-detail-box").removeClass('on1 on2')
		$(".gift-detail-box").addClass('on2')
		$(".gift li").removeClass('select')
		$(this).addClass('select')
		$(".game-type,.game-select-box").addClass('hide')
		$("html, body").animate({ scrollTop : $(".gift-detail-anchor").offset().top }, 500,"easeOutBack")
	});

	//點選手機遊戲或網頁遊戲後切換對應的下拉式選單
	$(".mobile-game").click(function() {
		$(".game-type li").removeClass('select')
		$(this).addClass('select')
		$(".game-select select").hide('fade',200);
		$(".mobile-game, .game-mobile").show('fade',700);
	});
	$(".web-game").click(function() {
		$(".game-type li").removeClass('select')
		$(this).addClass('select')
		$(".game-select select").hide('fade',200);
		$(".web-game, .game-web").show('fade',700);
	});

	//下拉式選單控制出現的虛寶內容
	$("[data-game]").change(function() {
		$value = $(this).val()
		$("html, body").animate({ scrollTop : $(".gift-detail-anchor2").offset().top }, 500,"easeOutBack")
		$(".gift-detail table").removeClass('select')
		$(".gift-detail table").hide('fade',200);
		switch ($value) {
			case "osw":
				$("[data-geme-osw]").show('fade',700);
				break;
			case "mfa":
				$("[data-geme-mfa]").show('fade',700);
				break;
			case "wt":
				$("[data-geme-wt]").show('fade',700);
				break;
			case "sbjj":
				$("[data-geme-sbjj]").show('fade',700);
				break;
			case "dor":
				$("[data-geme-dor]").show('fade',700);
				break;
			case "xyp":
				$("[data-geme-xyp]").show('fade',700);
				break;
			case "syu":
				$("[data-geme-syu]").show('fade',700);
				break;
			default:
				die();
		}
	});
	$(".gift-2").click(function() {
		$(".gift-detail table").removeClass('select')
		$(".gift-detail table").hide('fade',200);
		$("[data-geme-vip]").show('fade',700);
	});
	$(".gift-3").click(function() {
		$(".gift-detail table").removeClass('select')
		$(".gift-detail table").hide('fade',200);
		$("[data-geme-funmily]").show('fade',700);
	});
	$(".gift-4").click(function() {
		$(".gift-detail table").removeClass('select')
		$(".gift-detail table").hide('fade',200);
		$("[data-geme-mycard]").show('fade',700);
	});



	//start代替pointer點擊
	$(".start").click(function() {
		$(".pointer").click()
	})
	// 啟動轉盤(測試用)
	$(".wheel .pointer").rotate({ bind: { click: function() {

		rolling = true;
		data 	= 0;
		$(".loop-bg-move").addClass('on')

		$(".wheel .pointer").rotate({
			duration: 8000,
			angle: 0,
			animateTo: 3600 + data * 45
		})
		$(".wheel-bg").rotate({
			duration: 7000,
			angle: 0,
			animateTo: -3600
		})

		// 動畫特效
		if ( !isIE7 ) {
			setTimeout(function(){ $(".wheel-button").click() },500 )
			setTimeout(function(){ $(".wheel-button").click() },1500 )
		}
		setTimeout(function() {
			$(".loop-bg-move").addClass('on2')
		},5000);
		setTimeout(function() {
			$(".loop-bg-move").removeClass('on on2')
		},8000);
		// 獎勵畫面
		setTimeout(function() {
			blackBoxShow("./?method=reward&id=" + msg['id'] )
			rolling = false
			$this.addClass("active")
			$(".selectbox, .logobox").removeClass("rolling")
		},8000);

	}}})


	//啟動轉盤
	// $(".wheel .pointer").rotate({ bind: { click: function() {

	// 	count = 10

	// 	if(count<=0){
	// 		alert("剩餘次數不足");
	// 		return false;
	// 	}

	// 	if(status!=1){
	// 		alert("不在活動時間內，仍感謝您的支持。");
	// 		return false;
	// 	}

	// 	if ( !rolling ) { // 如果在轉動中不可點擊
	// 		$(".selectbox, .logobox").addClass("rolling")
	// 		$(".wheel .pointer").removeClass("active")

	// 		$.ajax({
	// 			url: "./?method=AjaxgetItem",
	// 			type: "POST",
	// 			data: {uid : uid},
	// 			dataType: "json",
	// 			timeout: 10000,
	// 			success: function(msg) {
	// 				console.log(msg);
	// 				if(msg['status'] == 1 && msg['id']>0){
	// 					var data = msg['id'] -1;
	// 					if(msg['id']==13){
	// 						data = 8;
	// 					}

	// 					if(msg['id']>=21){
	// 						data = 1;
	// 					}
	// 					$(".count").html(msg['count']);

	// 					count	= msg['count'];
	// 					count	= 10;
	// 					rolling = true;

	// 					$(".loop-bg-move").addClass('on')

	// 					$(".wheel .pointer").rotate({
	// 						duration: 8000,
	// 						angle: 0,
	// 						animateTo: 3600 + data * 45
	// 					})
	// 					$(".wheel-bg").rotate({
	// 						duration: 7000,
	// 						angle: 0,
	// 						animateTo: -3600
	// 					})

	// 					// 動畫特效
	// 					if ( !isIE7 ) {
	// 						setTimeout(function(){ $(".wheel-button").click() },500 )
	// 						setTimeout(function(){ $(".wheel-button").click() },1500 )
	// 					}
	// 					setTimeout(function() {
	// 						$(".loop-bg-move").addClass('on2')
	// 					},5000);
	// 					setTimeout(function() {
	// 						$(".loop-bg-move").removeClass('on on2')
	// 					},8000);
	// 					// 獎勵畫面
	// 					setTimeout(function() {
	// 						blackBoxShow("./?method=reward&id=" + msg['id'] )
	// 						rolling = false
	// 						$this.addClass("active")
	// 						$(".selectbox, .logobox").removeClass("rolling")
	// 					},8000);
	// 					$("#history tr:first").after(msg['html']);
	// 				}else{
	// 					$(".wheel .pointer").addClass("active");
	// 					$(".selectbox, .logobox").removeClass("rolling");
	// 					alert(msg['status']);
	// 				}
	// 			},
	// 			error: function() {
	// 				$(".wheel .pointer").addClass("active")
	// 				$(".selectbox, .logobox").removeClass("rolling")
	// 				blackBoxShow("./?method=reward&id=0")
	// 			}
	// 		})
	// 	}
	// }}})

	// 獎勵圖片
	$(".wheel .item a").each(function(i) {
		var shift = ((i+1) * -50) - 100
		$(this).css("background-position","0px " + shift + "px" )
	})

	// 關閉跳窗事件
	$(".black-box-close, .black-box-bg").click(function() { blackBoxHide() })

	// 登入頁面
	$(".value").click(function() { blackBoxShow("login.php") })

	$banner = $(".float-banner")

	if ( $(".float-banner td").length > 3 ) {
		//floatBannerEach ()
	}

	$(window).scroll(function() {
		if ( $(this).scrollTop() > 1000 ) {
			$(".nav").fadeIn(500)
		} else {
			$(".nav").fadeOut(500)
		}
	})

})

function floatBannerEach () {
	$banner.each(function() { $this = $(this)

		var	$banner = $this,
			$table = $this.find("table:first-child"),
			list_html = $this.find(".float-banner-list").html(),
			table_height = $table.height(),
			rolling_length = 0 - $table.height(),
			rolling_time = table_height * 30

		$banner.find(".float-banner-list").append(list_html)

		function floatBannerSlide () {
			rolling_time = table_height * 30
			$table.animate(
				{ marginTop : rolling_length },
				rolling_time,
				"linear",
				function() {
					$table.css("margin-top",0)
					floatBannerSlide()
				}
			)
		}
		floatBannerSlide ()
	})
}

// 關閉跳窗程序
function blackBoxHide() {
	$(".black-box").hide("fade",500).find("iframe").attr("src","about:blank")
	$(".black-box-bg").hide("fade",500)
}
// 開啟跳窗程序
function blackBoxShow(url) {
	$(".black-box").show("fade",500).find("iframe").attr("src",url)
	$(".black-box-bg").show("fade",500)
}

// 捲到頂端
function scrollTop () {
	$(function() {
		var $scrollTop = $(".scroll-top")
		if ( isIE7 ) { $scrollTop.attr("href","#") }
		else { $scrollTop.click(function() { $("html, body").animate({ scrollTop : $(".anchor").offset().top }, 800,"easeInOutQuart") }) }
	})
};scrollTop ()
