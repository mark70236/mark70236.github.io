$(function() {
	new WOW().init();
	//背景影片延遲出現
	setTimeout(function() {
		$(".mask, .wrap").removeClass('first')
		$(".word1").css('display', 'block');
		$(".black-control").css('opacity', '0.5');
	},3000)
	setTimeout(function() {
		$(".bg").removeClass('scene1')
		$(".bg").addClass('scene2')
		$(".black-control").css('opacity', '0.6');
		$(".story div").css('display', 'none');
		$(".word2").css('display', 'block');
	},10000)
	setTimeout(function() {
		$(".bg").removeClass('scene2')
		$(".bg").addClass('scene3')
		$(".black-control").css('opacity', '0.3');
		$(".story div").css('display', 'none');
		$(".word3").css('display', 'block');
	},17000)
	setTimeout(function() {
		$(".bg").removeClass('scene3')
		$(".bg").addClass('scene4')
		$(".black-control").css('opacity', '0.5');
		$(".story div").css('display', 'none');
		$(".word4, .light-control").css('display', 'block');
		$(".light-control").addClass('on')
	},24000)
	setTimeout(function() {
		$(".bg").removeClass('scene4')
		$(".bg").addClass('scene5')
		$(".story div").css('display', 'none');
		$(".black-control").css('opacity', '0.8');
		$(".word5").css('display', 'block');
	},32000)
	setTimeout(function() {
		$(".bg").removeClass('scene5')
		$(".bg").addClass('scene6')
		$(".story div").css('display', 'none');
		$(".black-control").css('opacity', '0.8');
		$(".word6").css('display', 'block');
	},39000)
	setTimeout(function() {
		$(".bg").removeClass('scene6')
		$(".bg").addClass('scene7')
		$(".story div").css('display', 'none');
		$(".black-control").css('opacity', '0.8');
		$(".word7").css('display', 'block');
	},48000)

	setTimeout(function() {
		$(".white").addClass('on').css('display', 'block');
	},60000)
})
