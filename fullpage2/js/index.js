$(function() {
	window.requestAnimFrame = function(){
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
		function(callback){ callback() }
	}();
	$('#fullpage').fullpage({
		scrollOverflow: true,
		onLeave: function(index, nextIndex, direction){
			requestAnimFrame(function(){
				if (index == 2 && direction == 'down'){
					$(".section.horizontal").removeClass('on')
					$(".fullpage-wrapper").removeClass('horizontal');
				}
				if (index == 3 && direction == 'up'){
					$.fn.fullpage.moveTo(1);
					setTimeout(function(argument) {
						$(".section.horizontal").removeClass('on')
						$(".fullpage-wrapper").removeClass('horizontal');
					},700)
					setTimeout(function(argument) {
						$(".section.horizontal").addClass('on');
						$(".fullpage-wrapper").addClass('horizontal');
					},710)
				}
				if (index == 7 && direction == 'down'){
					$(".section.horizontal").removeClass('on')
					$(".fullpage-wrapper").removeClass('horizontal');
					setTimeout(function(argument) {
						$("#section2").addClass('horizontal');
						$(".section.horizontal").addClass('on');
					},710)
				}
				if (index == 8 && direction == 'up'){
					$(".fullpage-wrapper").addClass('horizontal');
					$.fn.fullpage.moveTo(3);
				}
				if (index == 8 && direction == 'down'){
					$(".section.horizontal").removeClass('on')
					$(".fullpage-wrapper").removeClass('horizontal');
					setTimeout(function(argument) {
						$(".section.horizontal").addClass('on');
						$(".fullpage-wrapper").addClass('horizontal');
					},710)
				}
				if (index == 9 && direction == 'up'){
					$(".section.horizontal").removeClass('on')
					$(".fullpage-wrapper").removeClass('horizontal');
					setTimeout(function(argument) {
						$("#section2").addClass('horizontal');
						$(".section.horizontal").addClass('on');
					},710)
				}
				if (index == 11 && direction == 'down'){
					$(".section.horizontal").removeClass('on')
					$(".fullpage-wrapper").removeClass('horizontal');
					setTimeout(function(argument) {
						$(".section.horizontal").addClass('on');
						$(".fullpage-wrapper").addClass('horizontal');
					},710)
				}
				if (index == 17 && direction == 'down'){
					$(".section.horizontal").removeClass('on')
					$(".fullpage-wrapper").removeClass('horizontal');
					setTimeout(function(argument) {
						$(".section.horizontal").addClass('on');
						$(".fullpage-wrapper").addClass('horizontal');
					},710)
				}
				if (index == 22 && direction == 'down'){
					$(".section.horizontal").removeClass('on')
					$(".fullpage-wrapper").removeClass('horizontal');
					setTimeout(function(argument) {
						$("#section2").addClass('horizontal');
						$(".section.horizontal").addClass('on');
					},710)
				}
				if (index == 23 && direction == 'up'){
					$(".fullpage-wrapper").addClass('horizontal');
					$.fn.fullpage.moveTo(18);
				}
				if (index == 23 && direction == 'down'){
					$(".section.horizontal").removeClass('on')
					$(".fullpage-wrapper").removeClass('horizontal');
					setTimeout(function(argument) {
						$(".section.horizontal").addClass('on');
						$(".fullpage-wrapper").addClass('horizontal');
					},710)
				}
				if (index == 24 && direction == 'up'){
					$(".section.horizontal").removeClass('on')
					$(".fullpage-wrapper").removeClass('horizontal');
					setTimeout(function(argument) {
						$(".section.horizontal").addClass('on')
						$(".fullpage-wrapper").addClass('horizontal');
					},710)
				}
				if (index == 26 && direction == 'down'){
					$(".section.horizontal").removeClass('on')
					$(".fullpage-wrapper").removeClass('horizontal');
					setTimeout(function(argument) {
						$(".section.horizontal").addClass('on')
						$(".fullpage-wrapper").addClass('horizontal');
					},710)
				}
				if (index == 27 && direction == 'up'){
					$(".fullpage-wrapper").addClass('horizontal');
					$.fn.fullpage.moveTo(24);
				}
			})
		},
		afterLoad: function( anchorLink, index, slideAnchor, slideIndex){
			var target = $(".section.active .bg-box")
			var targetImg = target.css('background-image');
			$("body").css('background-image',targetImg);
			console.log(index)
			if (index == 1){
				$(".section.horizontal").addClass('on');
				$(".fullpage-wrapper").addClass('horizontal');
			}
			if (index == 3){
				$(".section.horizontal").addClass('on');
				$(".fullpage-wrapper").addClass('horizontal');
			}
		}
	});
})