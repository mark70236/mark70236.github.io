$(function() {

	new WOW().init();

	$("body").click(function() {
		$(".cercle1,.cercle2").addClass('on')
		setTimeout(function(){
			$(".white").css('display', 'block');
			$(".white").addClass('on')
		},800);
		setTimeout(function(){
			$(".bg1").css('display', 'none');
		},1600);
		setTimeout(function(){
			$(".bg2").css('display', 'block');
			$(".bg2").addClass('on')
		},1800);

		setTimeout(function(){
			$(".cercle1,.cercle2").removeClass('on')
		},2000);
	});
})