$(function() {
	var timeout;
	var idle_time = 1000
	var on_time = 1000

	document.getElementById("target-box").onmousemove = function(){
		clearTimeout(timeout);
		timeout = setTimeout(function(){
			pointOn()
		}, idle_time);
	}


	//point跟著滑鼠
	document.getElementById("body").addEventListener( "mousemove", function( e ) {

		// (滑鼠座標)
			var mouseX = e.pageX - $(".wrap").offset().left; //X座標
			var mouseY = e.pageY; //Y座標

			// (調整指標圖片的大小)
			mouseX = mouseX - 100/2;
			mouseY = mouseY - 110/2;

			// (定義移動多少距離)
			var point = document.getElementById("point");
			point.style.left = mouseX - 305 + 'px';
			point.style.top = mouseY - 150+ 'px';
	})

	function pointOn() {
		$(".point").addClass("on")
		setTimeout(function(){
			$(".point").removeClass("on")
		}, on_time);
	}
})
