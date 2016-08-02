$(function() {
	setTimeout(function(){
		$(".circle-box, .angel-box, .cat-box, .spider-box, .princess-box").removeClass('wow bounceIn fadeInRight fadeInLeft fadeInDown zoomIn')
		.attr({
			'style': '',
			'data-wow-delay': '0s',
			'data-wow-duration': '1s'
		});
	},6000);
	$(".start").click(function() {

		setTimeout(function(){
			$(".circle-box, .angel-box, .cat-box, .spider-box, .princess-box, .start").hide('fade',500)
			$(".logo").css({
				'-webkit-animation': 'logo2 0.7s 1',
				animation: 'logo2 0.7s 1',
				transform: 'scale(.7)',
				top: '46px',
				left: '575px'
			});
		},300);

		$(".start").removeClass('wow bounceIn fadeInRight fadeInLeft fadeInDown zoomIn').attr('style', '').css('animation-fill-mode', 'forwards')
		$(".angel-box, .cat-box, .spider-box, .princess-box").addClass('wow fadeOutLeft animated')
		$(".circle-box").addClass('wow fadeOut animated')
		$(".princess-box, .start").addClass('wow fadeOutRight animated')
		$(".lightball").addClass('on')
	});
});