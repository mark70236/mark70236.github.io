$(function() {
	$(".project").mouseover(function() {
		$(".project").removeClass('hover')
		$(this).children().children(".text").addClass('close')
		$(this).children().children("img").addClass('move')
		$(this).addClass('hover')
	});
	$(".project").mouseleave(function() {
		$(this).removeClass('hover')
		$(".text").removeClass('close')
		$(this).children().children("img").removeClass('move')
	});
})