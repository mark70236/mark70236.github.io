$(function() {

	//創建格子
	for (var l = 1; l <21; l++) {
		$(".area >ul").append('<li data-li-'+l+'></li>')
		for (var k = 1; k <21; k++) {
			$("[data-li-"+l+"]").append('<span data-x="'+l+'" data-y="'+k+'"><span class="unknow"></span><span></span></span>')
		}
	}
	//開始放炸彈
	for (var i = 1; i <21; i++) {
		var a = getRandomInt (1, 10);
		var b = getRandomInt (1, 10);
		console.log("炸彈放置在 ("+a+","+b+") 座標");
		if ($(".area li:nth-child("+a+") span:nth-child("+b+")").hasClass('bomb')) {
			i--;
		}else {
			$(".area li:nth-child("+a+") span:nth-child("+b+")").addClass('bomb').find('span:nth-child(2)').append('<i class="fa fa-bomb" aria-hidden="true"></i>')
			$(".bomb span").removeClass('unknow');
		}

	}

	//逐格賦予提示數字
	var x;
	var y;
	for (var t = 1; t <21; t++) {
		x = t;
		for (var s = 1; s <21; s++) {
			y = s;
			var targetSpan = $(".area li:nth-child("+x+") >span:nth-child("+y+")")
			checkAround (targetSpan,x,y)
		}
	}

	//點右鍵
	$(".area ul > li > span").mouseup(function() {
		var target = $(this);
		if (target.find('span:nth-child(1)').hasClass('alert')) {
			target.find('>span:nth-child(1)').empty();
			return false;
		}else {
			showMouseButton(target)
		}

	});

	//翻格子
	$(".area ul > li > span").unbind('click').click(function() {
		if ($(this).hasClass('bomb')) {
			$(this).find('span:nth-child(1)').addClass('open').removeClass('unknow');
			setTimeout(function() {
				alert("踩到炸彈啦！")
				location.reload();
			},300)
		}else {
			$(this).find('>span:nth-child(1)').addClass('open').removeClass('unknow').empty();
			if ($(this).find('>span:nth-child(2) i').html()=="") {

				var thisX = Number($(this).attr('data-x'));
				var thisY = Number($(this).attr('data-y'));
				var thisX1 = thisX-1;
				var thisX2 = thisX-1;
				var thisX3 = thisX-1;
				var thisX4 = thisX;
				var thisX5 = thisX;
				var thisX6 = thisX+1;
				var thisX7 = thisX+1;
				var thisX8 = thisX+1;
				var thisY1 = thisY-1;
				var thisY2 = thisY;
				var thisY3 = thisY+1;
				var thisY4 = thisY-1;
				var thisY5 = thisY+1;
				var thisY6 = thisY-1;
				var thisY7 = thisY;
				var thisY8 = thisY+1;

				$(".area li:nth-child("+thisX1+") span:nth-child("+thisY1+") span:nth-child(1)").addClass('open').removeClass('unknow');
				$(".area li:nth-child("+thisX2+") span:nth-child("+thisY2+") span:nth-child(1)").addClass('open').removeClass('unknow');
				$(".area li:nth-child("+thisX3+") span:nth-child("+thisY3+") span:nth-child(1)").addClass('open').removeClass('unknow');
				$(".area li:nth-child("+thisX4+") span:nth-child("+thisY4+") span:nth-child(1)").addClass('open').removeClass('unknow');
				$(".area li:nth-child("+thisX5+") span:nth-child("+thisY5+") span:nth-child(1)").addClass('open').removeClass('unknow');
				$(".area li:nth-child("+thisX6+") span:nth-child("+thisY6+") span:nth-child(1)").addClass('open').removeClass('unknow');
				$(".area li:nth-child("+thisX7+") span:nth-child("+thisY7+") span:nth-child(1)").addClass('open').removeClass('unknow');
				$(".area li:nth-child("+thisX8+") span:nth-child("+thisY8+") span:nth-child(1)").addClass('open').removeClass('unknow');
			}
			var end = 0
			$(".area ul > li > span span:nth-child(1)").each(function () {
				if ($(this).hasClass('unknow')) {
					end++
				}
			})
			if (end== 0) {
				setTimeout(function() {
					alert("恭喜你過關啦！")
				},300);
			}
		}

	})

})

function getRandomInt (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkAround (targetSpan,x,y) {
	var bombNums = 0;
	var x1 = x-1;
	var x2 = x-1;
	var x3 = x-1;
	var x4 = x;
	var x5 = x;
	var x6 = x+1;
	var x7 = x+1;
	var x8 = x+1;
	var y1 = y-1;
	var y2 = y;
	var y3 = y+1;
	var y4 = y-1;
	var y5 = y+1;
	var y6 = y-1;
	var y7 = y;
	var y8 = y+1;

	if (targetSpan.hasClass('bomb')) {
		return false;
	}else {
		if ($(".area li:nth-child("+x1+") span:nth-child("+y1+")").hasClass('bomb')) {
			bombNums++;
		}
		if ($(".area li:nth-child("+x2+") span:nth-child("+y2+")").hasClass('bomb')) {
			bombNums++;
		}
		if ($(".area li:nth-child("+x3+") span:nth-child("+y3+")").hasClass('bomb')) {
			bombNums++;
		}
		if ($(".area li:nth-child("+x4+") span:nth-child("+y4+")").hasClass('bomb')) {
			bombNums++;
		}
		if ($(".area li:nth-child("+x5+") span:nth-child("+y5+")").hasClass('bomb')) {
			bombNums++;
		}
		if ($(".area li:nth-child("+x6+") span:nth-child("+y6+")").hasClass('bomb')) {
			bombNums++;
		}
		if ($(".area li:nth-child("+x7+") span:nth-child("+y7+")").hasClass('bomb')) {
			bombNums++;
		}
		if ($(".area li:nth-child("+x8+") span:nth-child("+y8+")").hasClass('bomb')) {
			bombNums++;
		}
		if (bombNums==0) {
			targetSpan.find('span:nth-child(2)').append('<i></i>')
		}else{
			targetSpan.find('span:nth-child(2)').append('<i>'+bombNums+'</i>')
		}

	}

}

function showMouseButton(target) {
	switch (event.button){
		case 2:
			target.find('span:nth-child(1)').addClass('alert')
			target.find('span:nth-child(1)').append('<i class="fa fa-flag" aria-hidden="true"></i>');
			break;
		default:
			break;
	}
}