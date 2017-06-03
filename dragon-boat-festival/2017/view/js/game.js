var time = 30000
var score = 0
var score_max = 15
var game_play = true

$(function() {

	var $time_left = $("[data-time-left]")

	//賦予怪物不同座標
	for (var i = 1; i < 16; i++) {
		var t = getRandomInt (195, 375)
		var l = getRandomInt (0, 735)
		$(".m" + i ).css({
			top: t,
			left: l
		});
	};

	$("[data-play]").click(function() {

		if ( !game_play ) {
			return false
		}

		countDown()
		game_play = false

		var s =[0,2000,4000,6000,8000,10000,12000,14000,16000,18000,20000,22000,24000,26000,28000]
		$(this).hide('fade', 200)
		s.forEach(show)

		$(".monster").click(function() {

			if ( score < score_max ) {
				$(".weapon").addClass('move')
				setTimeout(function(){
					$(".weapon").removeClass('move')
				},100);
				$(this).removeClass('show')
				$(this).addClass('hide')
				score++
				$("[data-score]").text(score)
			} else {
				$time_left.text(0)
				clearTimeout(countDownRunning)
			}
		})

		setTimeout(function(){
			$("[data-over]").show('fade', 500)
		},time + 1000)
	})

	function countDown(){　
		if ( time <= 0 ) {
			$time_left.text(0)
		} else {　
			$time_left.text(time/1000)
			countDownRunning = setTimeout(function(){
				countDown()
			},1000)
		}　
		time-= 1000;
	}

	//網子跟著滑鼠
	document.getElementById("body").addEventListener( "mousemove", function( e ) {

		// (滑鼠座標)
			var mouseX = e.pageX - $(".wrap").offset().left; //X座標
			var mouseY = e.pageY; //Y座標

			// (調整指標圖片的大小)
			mouseX = mouseX - 100/2;
			mouseY = mouseY - 110/2;

			// (定義移動多少距離)
			var sight = document.getElementById("sight");
			sight.style.left = mouseX - 190 + 'px';
			sight.style.top = mouseY - 2567 + 'px';
	})

})

function show(s, n){
	var n = n+1
	setTimeout(function(){
		$(".m" + n).addClass('show')
	},s)
}

function getRandomInt (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
