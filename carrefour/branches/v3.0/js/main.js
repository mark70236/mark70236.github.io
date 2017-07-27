if($(window).width()<700){
	$('.modal-body').css('overflow-y', 'visible');
	$('.modal-body').css('min-height', $(window).height() * 0.85);
}





$("#member-receipt .panel-group .panel.panel-default li:nth-child(5)").click(function(e) {
	$(this).removeClass('h-20 h-40 h-60 h-80 h-100')
	var h = $(this).parent().find("li:nth-child(4)").height()
	switch(h) {
		case 20:
			$(this).addClass('h-20')
			break;
		case 40:
			$(this).addClass('h-40')
			break;
		case 60:
			$(this).addClass('h-60')
			break;
		case 80:
			$(this).addClass('h-80')
			break;
		case 100:
			$(this).addClass('h-100')
			break;
		case 120:
			$(this).addClass('h-120')
			break;
		case 140:
			$(this).addClass('h-140')
			break;
		default:
			break;
	}
})
$("#member-editorial .panel-group .panel.panel-default li:nth-child(3)").click(function(e) {
	$(this).removeClass('h-20 h-40 h-60 h-80 h-100 h-120 h-140')
	var h = $(this).parent().find("li:nth-child(1)").height()
	switch(h) {
		case 20:
			$(this).addClass('h-20')
			break;
		case 40:
			$(this).addClass('h-40')
			break;
		case 60:
			$(this).addClass('h-60')
			break;
		case 80:
			$(this).addClass('h-80')
			break;
		case 100:
			$(this).addClass('h-100')
			break;
		case 120:
			$(this).addClass('h-120')
			break;
		case 140:
			$(this).addClass('h-140')
			break;
		default:
			break;
	}
})


// handle txt
$(".theme-ellipsis").each(function(i){
	if($(this).text().length>17){
		$(this).attr("title",$(this).text());
		var text=$(this).text().substring(0,17);
		$(this).text(text);
	}
});

$('.select-num .select-btn').click(function(e) {
	/* Act on the event */
	e.preventDefault();
	var count = $(this).data('count');
	var total = parseInt($(this).parents('.select-num').find('.num').html());
	// alert(total--);
	if (count == 'minus') {
		if (total == 1) {
			total = total;
		} else {
			total--;
		}
		$(this).parents('.select-num').find('.num').html(total);
	} else {
		total++;
		$(this).parents('.select-num').find('.num').html(total);
	}
});

// dropdown
$('.installment-desktop .installment-dropdown').hover(function() {
	var $el = $(this);
	$('.installment-dropdown-btn').removeClass('active');
	$el.find('.installment-dropdown-btn').addClass('active');
	$('.installment-dropdown-content').removeClass('active');
	$el.find('.installment-dropdown-content').addClass('active');
}, function() {
	var $el = $(this);
	$el.find('.installment-dropdown-btn').removeClass('active');
	$el.find('.installment-dropdown-content').removeClass('active');
});

// order item
$('.order-item').click(function(e) {
	e.preventDefault();
	var $el = $(this),
	data_toggle = $el.data('toggle'),
	data_first = $el.data('first'),
	data_second = $el.data('second');
	if ($el.hasClass('active')&&data_first!==''&&data_second!==''){
		if ($el.html()==data_first){
			$el.html(data_second);
		} else {
			$el.html(data_first);
		}
	} else {
		$('.order-item').removeClass('active');
		$el.addClass('active');
	}
});

// porlist filter item
$('.filter-item').click(function(e) {
	e.preventDefault();
	if ($(this).hasClass('active')) return;
	$('.filter-item').removeClass('active');
	$(this).addClass('active');
});
// mobile filter width fix
function mobileTabWidth(){
	var mobile_filter_width = 0;
	$('.mobile-filter .filter-item').each(function(index, el) {
		mobile_filter_width += $(el).outerWidth();
	});
	$('.mobile-filter >div').width(mobile_filter_width+180);

	var mobile_tab_width = 0;
	$('.mobile-tab-wrap .tab-btn').each(function(index, el) {
		mobile_tab_width += $(el).outerWidth();
	});
	$('.mobile-tab-wrap >div').width(mobile_tab_width+180);
}
mobileTabWidth();

$(window).resize(mobileTabWidth);



// collaspe for pro-list
$('.btn-collaspe').click(function(e) {
	e.preventDefault();
	var $el = $(this),
	target = $el.data('target');
	$el.toggleClass('active');
	$(target).toggleClass('active');
});

// fix category nav width
// var nav_length = $('.nav-style-wrap >li:not(.vertical-line)').length;
// $('.nav-style-wrap >li:not(.vertical-line)').css('width', (1180/nav_length-2)+'px');

// show modal
// $('#lb-v-email').modal('show');

// scroll to fix header
var rollHeader = function(){
	var under_line = $('#header .nav-bar').offset().top;
	var $window = $(window);
	// console.log($html.scrollTop())
	$window.scroll(function(event) {
		/* Act on the event */
		if ($window.scrollTop()>under_line){
			$('.desktop-header').addClass('fixed-header');
			$('.page-content').addClass('with-fixd-header');
		} else {
			$('.desktop-header').removeClass('fixed-header');
			$('.page-content').removeClass('with-fixd-header');
		}

	});
}

rollHeader();


/*edit for owl 0705*/
// slider setting
// $('.slick-slider').slick({
// 	dots: true,
// 	infinite: true,
// 	speed: 800,
// 	prevArrow: '.banner-slider-prev',
// 	nextArrow: '.banner-slider-next',
// 	arrow: true,
//   // autoplay: true,
//   // autoplaySpeed: 5000
// });
try{
$('.slick-slider').owlCarousel({
	items: 1,
	loop: true,
	smartSpeed: 600,
	autoplay: true,
	autoplayTimeout: 4000,
	autoplayHoverPause: true
});
}catch(e){

}

$('.banner-slider-prev').click(function() {
	$('.slick-slider').trigger('prev.owl.carousel');
	return false;
});
$('.banner-slider-next').click(function() {
	$('.slick-slider').trigger('next.owl.carousel');
	return false;
});
$('.slick-slider2').slick({
	dots: true,
	infinite: true,
	speed: 800,
	arrow: false,
	slidesToShow: 3,
	slidesToScroll: 3,
	autoplay: true,
	autoplaySpeed: 4000,
	responsive: [
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}
	]
});

$('.item-slider-mobile-1').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrow: false,
	dots: false
});
$('.item-slider-mobile-2').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrow: false,
	dots: false
});
$('.item-slider-mobile-3').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrow: false,
	dots: false
});


$('.item-slider1').slick({
	infinite: true,
	slidesToShow: 6,
	slidesToScroll: 6,
	prevArrow: '.item-slider1-prev',
	nextArrow: '.item-slider1-next',
	arrow:true,
	dots: false,
	responsive: [
	{
		breakpoint: 1200,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 4
		}
	},
	{
		breakpoint: 1024,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 4
		}
	},
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3
		}
	}
	]
});
$('.item-slider2').slick({
	infinite: true,
	slidesToShow: 6,
	slidesToScroll: 6,
	prevArrow: '.item-slider2-prev',
	nextArrow: '.item-slider2-next',
	arrow:true,
	dots: false,
	responsive: [
	{
		breakpoint: 1200,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 4
		}
	},
	{
		breakpoint: 1024,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 4
		}
	},
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3
		}
	}
	]
});
$('.item-slider3').slick({
	infinite: true,
	slidesToShow: 6,
	slidesToScroll: 6,
	prevArrow: '.item-slider3-prev',
	nextArrow: '.item-slider3-next',
	arrow:true,
	dots: false,
	responsive: [
	{
		breakpoint: 1200,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 4
		}
	},
	{
		breakpoint: 1024,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 4
		}
	},
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3
		}
	}
	]
});


// tab switch
var handleSlide = function (idx){
	$('.tab-switch-content').removeClass('active');
	$('.tab-txt').removeClass('active');
	$('#tab-switch-content-'+idx).addClass('active');
	$('#tab-txt-'+idx).addClass('active');
}

var tab_num = 1;
$('.btn-tab-prev').click(function(e) {
	e.preventDefault();
	if (tab_num == 1) {
		tab_num = $('.tab-txt').length;
	} else {
		tab_num--;
	}
	handleSlide(tab_num);
});

$('.btn-tab-next').click(function(e) {
	e.preventDefault();
	if (tab_num == $('.tab-txt').length) {
		tab_num = 1;
	} else {
		tab_num++;
	}
	handleSlide(tab_num);
});


// popup
$('.popup-btn').click(function(e) {
	e.preventDefault();
	var $el = $(this),
	target_popup = $el.data('popup');
	$(target_popup).addClass('popup-show');
});

$('.popup-close').click(function(e) {
	e.preventDefault();
	var $el = $(this),
	target_popup = $el.data('popup');
	$(target_popup).removeClass('popup-show');
});

// item love
$('.item-love').click(function(e) {
	e.preventDefault();
	var $el = $(this);
	$el.addClass('loved');
	setTimeout(function(){
		$el.removeClass('loved');
	},300);
});

// tab
$('.tab-btn').click(function(e) {
	e.preventDefault();
	var $el = $(this);
	target_tab = $el.data('tab');
	if ($el.hasClass('active')) return;
	$el.parents('.tab-btn-wrap').find('a').removeClass('active');
	$el.addClass('active');
	$el.parents('.tab-action').find('.tab-content').removeClass('active');
	$el.parents('.tab-action').find(target_tab).addClass('active');
});

// mobile menu for category
$('.theme-sub-title').click(function(e) {
	e.preventDefault();
	var $el = $(this),
	target = $el.data('target');

	if ($el.hasClass('active')) return;

	$('.theme-sub-title').removeClass('active');
	$el.addClass('active');
	$('.theme-block ul >li').removeClass('active');
	$el.parent().addClass('active');
});

$('.theme-btn').click(function(e) {
	e.preventDefault();
	var $el = $(this),
	target = $el.data('target');

	if ($el.hasClass('active')) return;

	$('.theme-sub-title').removeClass('active');
	$('.theme-block ul >li').removeClass('active');
	$('.theme-btn').removeClass('active');
	$el.addClass('active');
	$('.theme-block').removeClass('active');
	$(target).addClass('active');
});




// fix nav
$(window).resize(function(event) {
	fixNavPos();
	fixPopupHeight();
});

function fixNavPos(){
	var category = $(".nav-bar .nav-style-wrap >li:not('.vertical-line')")
	var all = $(".nav-bar .nav-style-wrap >li")
	var count = category.length
	var countAll = all.length

	var tl = 0
	var ul_width = $(".nav-style-wrap").width()
	all.each(function(index, el) {
		tl = tl + $(el).width();
		if (tl < ul_width+30) {
			$(el).find('.nav-list-wrap').css('margin-top', '4px')
		}else if (tl > ul_width*2-90 ) {
			$(el).css('display', 'none');
		}else{
			$(el).find('.nav-list-wrap').css('margin-top', '44px');
		};
	});

	//調整第二行位置
	// if ( count > 7) {
	// 	category.each(function(index, el) {
	// 		if ( index > 6 ) {
	// 			$(el).find('.nav-list-wrap').css('margin-top', '37px');
	// 		}
	// 	});
	// } else {
	// 	return false;
	// }

	//超過第二行隱藏
	// if ( countAll > 36 ) {
	// 	all.each(function(index, el) {
	// 		if ( index > 35 ) {
	// 			$(el).css('display', 'none');
	// 		}
	// 	});
	// };
}

fixNavPos();

function fixPopupHeight(){
	$('.popup-content').height($(window).height()-116);
}

fixPopupHeight();


// pro detail slider
$('.pro-slider-main').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
	arrows: false,
	slidesToShow: 5,
	slidesToScroll: 1,
	asNavFor: '.pro-slider-main',
	dots: false,
	centerMode: false,
	focusOnSelect: true
});


