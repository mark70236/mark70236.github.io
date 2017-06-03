$(function() {

	// 滑鼠&相機準心&第二張圖 三者聯動

	document.body.addEventListener( "mousemove", function( e ) {

			//マウス位置を取得する (滑鼠座標)
			var mouseX = e.pageX - $(".wrap").offset().left; //X座標
			var mouseY = e.pageY; //Y座標

			//ポインタ画像の大きさによって調整  (調整指標圖片的大小)
			mouseX = mouseX - 250/2;
			mouseY = mouseY - 250/2;


			//ポインタを動かす (定義移動多少距離)
			var point1 = document.getElementById("point");
			var point2 = document.getElementById("clip-box");
			var bglight = document.getElementById("bg-light")
			point1.style.left = mouseX + 'px';
			point1.style.top = mouseY + 'px';
			point2.style.left = mouseX + 'px';
			point2.style.top = mouseY + 'px';
			$(".bg-light").css('background-position-x', -mouseX );
			$(".bg-light").css('background-position-y', -mouseY );


			//要素の位置を取得してマウス位置から引く (滑鼠移動時相機準心跟著移動)
			var rect = document.getElementById("bg-light").getBoundingClientRect();

			//カラー画像のマスク指定を動かす (滑鼠移動時第二張有顏色的圖clip座標跟著改變)
			//document.getElementById("bg-light").style.clip = 'rect(' + mouseY + 'px ' + Number(mouseX + 400) + 'px ' + Number(mouseY + 400) + 'px ' + mouseX + 'px)';


	});
	var scale = 0
	$(".point").click(function() {
		// $(".point, .clip-box").addClass('bigger')
		// scale = 1
		console.log(scale)
		if ( scale == 0 ) {
			$(".point, .clip-box").addClass('bigger ing')
			setTimeout( function(){
				$(".point, .clip-box").removeClass('ing')
			},200)
			scale = 1
		}else if ( scale == 1) {
			$(".point, .clip-box").removeClass('bigger')
			$(".point, .clip-box").addClass('ing')
			setTimeout( function(){
				$(".point, .clip-box").removeClass('ing')
			},200)
			scale = 0
		}

	});
})