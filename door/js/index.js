$(function() {
	$(".door, .circle").click(function() {
		$this = $(this)
		$(".circle").removeClass('unknock')
		$(".door-left, .door-right").addClass('open')
		setTimeout(function(){
			$(".door-left, .door-right").removeClass('open')
		},5000);
		setTimeout(function(){
			$(".circle").addClass('unknock')
		},7500);
	});
	$(".door, .circle").mouseover(function() {
		$(".circle").addClass('on')
	});
	$(".door, .circle").mouseleave(function() {
		$(".circle").removeClass('on')
	});
})