$(function() {

	$("flybox div").click(function() {
		$(this).addClass('wow zoomOutUp')
		setTimeout(function() {
			$(this).hide("fade",100);
		},2000)
	});

	$("#water").ripples({
		//水的速度,滑鼠壓下去的面積,
		resolution: 400,
		dropRadius: 20, //px
		perturbance: 0.04
	});
	//隨機落雨滴
	// var freq = 2500 + 5e3 * Math.random();
	// window.setInterval(function() {
	// 	var a = $("#water")
	// 	  , b = Math.random() * a.outerWidth()
	// 	  , c = Math.random() * a.outerHeight()
	// 	  , d = 20
	// 	  , e = .04 + .04 * Math.random();
	// 	a.ripples("drop", b, c, d, e)
	// }, freq)

})

// $(document).ready(function() {
// 	try {
// 		$('#water').ripples({
// 			resolution: 512,
// 			dropRadius: 20, //px
// 			perturbance: 0.04,
// 		});
// 	}
// 	catch (e) {
// 		$('.error').show().text(e);
// 	}


// });
