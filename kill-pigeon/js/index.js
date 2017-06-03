var skill = 0
var i =0

$(function() {

	pegionFirstMove(skill)

	// 滑鼠&相機準心&第二張圖 三者聯動

	document.body.addEventListener( "mousemove", function( e ) {

			//マウス位置を取得する (滑鼠座標)
			var mouseX = e.pageX - $(".wrap").offset().left; //X座標
			var mouseY = e.pageY; //Y座標

			//ポインタ画像の大きさによって調整  (調整指標圖片的大小)
			mouseX = mouseX - 3000/2;
			mouseY = mouseY - 2500/2;


			//ポインタを動かす (定義移動多少距離)
			var sight = document.getElementById("sight");
			sight.style.left = mouseX + 'px';
			sight.style.top = mouseY + 10 + 'px';
	});

	$("body").mouseup(function() {
		showMouseButton()
	});


	$(".pigeon").click(function() {

		$(".pigeon, .sight").addClass('move2')

		$(".pigeon").addClass('move')

		setTimeout( function(){
			$(".pigeon").removeClass('move')
		},100)

		setTimeout( function(){
			$(".big-box, .white").addClass('move')
			$(".sight").addClass('move3')
		},200)

		setTimeout( function(){
			$(".pigeon, .sight, .big-box, .white").removeClass('move move1 move2 move3')
		},2500)
		setTimeout( function(){
			window.location.reload();
		},3000)
		// i = 0
		// skill = 0
		// clearInterval(fast);
		// clearInterval(slow);
		$(".skill-bg, .sight, .pigeon").removeClass('skill-on')


	});

	$("body").click(function() {
		$(".wrap").addClass('shake')
		setTimeout( function(){
			$(".wrap").removeClass('shake')
		},200)

		$(".sight").addClass('shake')
		setTimeout( function(){
			$(".sight").removeClass('shake')
		},200)

	});







})

function getRandomInt (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showMouseButton() {
	switch (event.button){
		case 2:
			i++
			skill = 0
			if (i < 2) {
				if (skill==0) {
					$(".skill-bg, .sight, .pigeon").addClass('skill-on')
					skill = 1
					powerBox ()
					pegionFirstMove(skill)
				}else {
					return false
				};
			}else{
				if (skill==0) {
					$(".skill-bg, .sight, .pigeon").addClass('skill-on')
					skill = 1
					powerBox ()
					pegionMove(skill)
				}else {
					return false
				};
			};
			break;
		default:
			break;
	}
}

function powerBox () {
	$(".power-box").show('fade',200);
	$(".power-width").addClass('full')
	setTimeout( function(){
		$(".power-width").removeClass('full')
		$(".power-width").addClass('type-full')
	},300)
	setTimeout( function(){
		$(".power").addClass('power-short')
	},1500)
	setTimeout( function(){
		$(".power-width").removeClass('type-full')
		$(".power").removeClass('power-short')
		$(".power-box").hide('fade',200);
	},3000)
}





function pegionFirstMove(skill) {

	if (skill==0) {
		fast = setInterval(function(){
			var t = getRandomInt (-30, 581)
			var l = getRandomInt (-25, 853)
			$(".pigeon").css({
				top: t,
				left: l
			});
		},150)
	}else {
		clearInterval(fast);
		setTimeout(function(){
			var t = getRandomInt (-30, 581)
			var l = getRandomInt (-25, 853)
			$(".pigeon").css({
				top: t,
				left: l
			});
		},0)
		slow = setInterval(function(){
			var t = getRandomInt (-30, 581)
			var l = getRandomInt (-25, 853)
			$(".pigeon").css({
				top: t,
				left: l
			});
		},2000)
		setTimeout(function(){
			clearInterval(slow);
			$(".skill-bg, .sight, .pigeon").removeClass('skill-on')

			fast = setInterval(function(){
				var t = getRandomInt (-30, 581)
				var l = getRandomInt (-25, 853)
				$(".pigeon").css({
					top: t,
					left: l
				});
			},150)
			skill = 0
		},3000)


	};

}
function pegionMove(skill) {

	if (skill==0) {
		return false
	}else {
		clearInterval(fast);
		setTimeout(function(){
			var t = getRandomInt (-30, 581)
			var l = getRandomInt (-25, 853)
			$(".pigeon").css({
				top: t,
				left: l
			});
		},0)
		slow = setInterval(function(){
			var t = getRandomInt (-30, 581)
			var l = getRandomInt (-25, 853)
			$(".pigeon").css({
				top: t,
				left: l
			});
		},2000)
		setTimeout(function(){
			clearInterval(slow);
			$(".skill-bg, .sight, .pigeon").removeClass('skill-on')
			skill = 0
			fast = setInterval(function(){
				var t = getRandomInt (-30, 581)
				var l = getRandomInt (-25, 853)
				$(".pigeon").css({
					top: t,
					left: l
				});
			},150)
		},3000)

	};


}