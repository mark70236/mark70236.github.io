$(function() {
	var hsbOption = 0;
	$(".header-search-box i, .header-search-lightbox").click(function() {
		//alert(hsbOption);
		if (hsbOption == 0) {
			if ($(".header-search-lightbox").hasClass('active')) {
				$(".header-search-lightbox").removeClass('active');
				hsbOption = 0;
			}else {
				$(".header-search-lightbox").addClass('active');
				hsbOption = 1;
				return false;
			}
		}else { return false; }
	});

	$("body").click(function() {
		//alert("body"+hsbOption);
		if (hsbOption == 1) {
			$(".header-search-lightbox").removeClass('active');
			hsbOption = 0;
		}
	})

	$(".main-menu .main >ul >li").mouseover(function() {
		$(this).addClass('active');
	});
	$(".main-menu .main >ul >li").mouseleave(function() {
		$(this).removeClass('active');
	});


	//手機版選單收合控制
	$(".mobile-menu-btn").click(function() {
		if ($(".mobile-menu, .mobile-black-mask").hasClass('active')) {
			$(".mobile-menu, .mobile-black-mask").removeClass('active');
		}else {
			$(".mobile-menu, .mobile-black-mask").addClass('active');
			return false;
		}
	});
	$(window).on("resize", function() {
		var window_width = $(window).width()
		if (window_width > 1400) {
			if ($(".mobile-menu, .mobile-black-mask").hasClass('active')) {
				$(".mobile-menu, .mobile-black-mask").removeClass('active');
			}
		}
	});

	$(".mobile-menu >ul >li.parent").click(function() {
		if ($(this).find('ul').hasClass('active')) {
			$(this).find('ul').removeClass('active');
			$(this).find('i').removeClass('fa-minus').addClass('fa-plus');
		}else {
			$(this).find('ul').addClass('active');
			$(this).find('i').removeClass('fa-plus').addClass('fa-minus');
		}
	});
	$(".mobile-menu >ul >li.parent >ul >li").click(function() {
		return false;
	})


	$(window).scroll(function () {
		var scrollVal = $(this).scrollTop();
		//console.log(scrollVal);
		if (scrollVal > 123) {
				if ($("header").hasClass('hide')) {
						return false;
				}else {
						$("header").addClass('hide');
						$(".mobile-menu, .mobile-black-mask").addClass('top-mode');
				}
		}
		if (scrollVal < 123) {
			$("header").removeClass('hide');
			$(".mobile-menu, .mobile-black-mask").removeClass('top-mode');
		}
	})
})