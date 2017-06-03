$(function() {
	$(".project").mouseover(function() {
		$(".project").removeClass('hover')
		$(this).children().children(".text").addClass('close')
		$(this).addClass('hover')
	});
	$(".project").mouseleave(function() {
		$(this).removeClass('hover')
		$(".text").removeClass('close')
	});
})