$(function() {
	goTop()
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
function goTop () {
	$(window).scroll(function() { if ( $(this).scrollTop() > 600 ) { $(".gotop").css("opacity",1) } else { $(".gotop").css("opacity",0) } })
	$(".gotop").click(function() { $("html, body").animate({ scrollTop : 0 }, 800,"easeInOutQuart") })
}