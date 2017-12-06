$(function() {
	//滑鼠在target元素上移動才啟動
	document.getElementById("target").addEventListener( "mousemove", function( e ) {
		var target = document.getElementById("target");
		var targetClass = $(".target");

		// 滑鼠座標 要扣掉.wrap的置中左右空間
		var mouseX = e.pageX - $(".wrap").offset().left; //X座標
		var mouseY = e.pageY; //Y座標

		//更新定位座標在target元素上
		var targetX = mouseX-(targetClass.offset().left - $(".wrap").offset().left)-0.5;
		var targetY = mouseY-targetClass.offset().top;


		//取得target寬高
		var targetWidth = target.offsetWidth;
		var targetHeight = target.offsetHeight;

		//將新的定位座標轉換成百分比(給background-position用的)
		var positionX = (targetX/targetWidth*100).toPrecision(2).toString()+"%";
		var positionY = (targetY/targetHeight*100).toPrecision(2).toString()+"%";

		//console.log("X:"+targetX+",  Y:"+targetY)
		//console.log("X:"+positionX+",  Y:"+positionY)

		//將數值套上css
		$(".box").css('background-position-x', positionX);
		$(".box").css('background-position-y', positionY);


		// (調整指標圖片的大小)
		mouseX = mouseX - 100/2;
		mouseY = mouseY - 110/2;

	})
})