$(function(){

		var	pai_obj	=	[

			{
				wrapElmId	:	'pai_chara',
				img	:	{
					src	:	'images/chr1.png'
				},
					pai	:	[
					{	X	:	101,	Y	:	602,
						W	:	176,	H	:	168
					},
					{	X	:	281,	Y	:	597,
						W	:	133,	H	:	148
					}
				]
			}

		];

		//画像１つにつき１つずつ発動
		for(var main_cnt=0; main_cnt<pai_obj.length;	main_cnt++){
			var tmp_id	=	'#'+pai_obj[main_cnt].wrapElmId;
			$(tmp_id).paiWidget({
				wrapElmId	:	pai_obj[main_cnt].wrapElmId,
				img	:	pai_obj[main_cnt].img,
				pai	:	pai_obj[main_cnt].pai
			});
		}

		var	pcTopAnim	=	function(){
			var	character_cnt	=	0;

			var	top_chara_array	=	['top_float_img_character_left_03','top_float_img_character_left_04'];

			var	obiShow	=	function(){
				$('#bg_obi').animate({
					width	:	'1200px',
					backgroundPositionY	:	'200px',
					marginLeft	:	'-100px'
				},200,'',characterReady(character_cnt));
			}

			var	characterReady	=	function(){
				var	delay	=	30;
				if(character_cnt	==	0){
					delay	=	10
				}else{
					var	the_target	=	'#'+top_chara_array[character_cnt-1];
					$(the_target).find('.pai_canvas').trigger('vibe');
				}

				var	characterReady_timer	=	setTimeout(function(){
					characterShow(character_cnt)
				},delay);
			}

			var	characterShow	=	function(){
				var	the_target	=	'#'+top_chara_array[character_cnt];
				the_target	=	$(the_target);
				if(character_cnt<5){
				character_cnt++;
					the_target.fadeIn(1200,characterReady(character_cnt));
				}
			}


			characterReady();
		}




		$('body').addClass('anim_active');
		//var start_timer	=	setTimeout(,3000);
		pcTopAnim();


		$(window).scroll(function(){
			var body_elm = $('body');
			if(body_elm.hasClass('scroll_off')	==	'false'){
				if(body_elm.hasClass('slide_right')){
					body_elm.addClass('slide_left');
					body_elm.removeClass('slide_right');
				}else{
					body_elm.removeClass('slide_left');
					body_elm.addClass('slide_right');
				}
			}
		});



		$(".trigger").click(function(){
			 $('#top_float_img_character_left_02_pai_0').trigger("click");
		});

	$(".chara1_p1").click(function(){
			 $('#top_float_img_character_left_04_pai_0').trigger("click");
		});
	$(".chara1_p2").click(function(){
			 $('#top_float_img_character_left_04_pai_1').trigger("click");
		});
	$(".chara2_p1").click(function(){
			 $('#top_float_img_character_left_03_pai_0').trigger("click");
		});
	$(".chara2_p2").click(function(){
			 $('#top_float_img_character_left_03_pai_1').trigger("click");
		});



		//メインビジュアルのアニメが動いているときにfloatBoxが発動したらアニメを停止
		var animation_data = $('#top_iframe_wrap').html();
		$('#top_iframe_wrap')
			.bind('stopAnimation',function(){
			$(this).empty();
		})
			.bind('setAnimation',function(){
			$(this).html(animation_data);
		});

		$('#top_menu_wrap').find('.float_box_switch').click(function(){
			$('#top_iframe_wrap').trigger('stopAnimation');
			$('#top_iframe_wrap').trigger('setAnimation');
		});

});