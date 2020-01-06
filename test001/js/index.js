$(function() {
	// setTimeout(function (argument) {
	// 	var video = $('.resizelistener');
	// 	video.attr('muted', 'muted');
	// 	//video.load();
	// 	//video.get(0).pause();
	// 	video.get(0).play();
	// },5000)

	var video = $('.resizelistener');
		video.attr('muted', 'muted');
		video = video.clone();
	$('.resizelistener').remove();
	$(".html5vid.fullcoveredvideo").append(video);
	//$("body").append(video);
})




// <script>
//     //20180517 修正自動播放
//     jQuery(window).load(function() {
// 		var video = jQuery('.resizelistener');
// 		video.attr('muted', 'muted');
// 		video = video.clone();
//     	jQuery('.resizelistener').remove();
//     	jQuery(".html5vid.fullcoveredvideo").append(video);
// 	    var video = jQuery('.resizelistener');
// 	    video.get(0).load();
// 	    video.get(0).play();
//     })
// </script>