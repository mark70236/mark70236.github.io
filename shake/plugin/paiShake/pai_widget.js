//	paiWidget
;(function($){

	$.widget('ui.paiWidget',{
		options:	{
			wrapElmId	:	'',
			img	:	{
				src	:	'',
				zoom	:	1,
				ow	:	640,
				oh	:	480,
				dw	:	640,
				dh	:	480
			},
			pai	:	[
				{	id	:	'',
					X	:	0,
					Y	:	0,
					W	:	0,
					H	:	0,
					center	:	{
						X	:0,
						Y	:0
					}
				}
			],
			motionParams	:	{
				
				/*time	:	0,	//揺れの周期時間
				decayRate	:	0,	//減衰
				threshold	:	0,	//振動停止認識の最小閾値
				touchLimit	:	0	//引っ張り防止の距離*/
				
				time	:	60,	//揺れの周期時間
				decayRate	:	0.9,	//減衰
				threshold	:	2,	//振動停止認識の最小閾値
				touchLimit	:	10	//引っ張り防止の距離
			}
		},/*options default*/



		backAnim	:	function(pai_obj,acceleration_X,acceleration_Y){
			//ある位置で指を離したときの慣性運動
			var	this_obj	=	this;
			var	this_opt	=	this.options;
			var	tmp_rad	=	0;
			var	tmp_rad_cnt	=	0.45*	Math.PI;
			var	accel_abs	=	Math.sqrt(acceleration_X*acceleration_X+acceleration_Y+acceleration_Y);
			var	tmp_anim_time	=	this_opt.motionParams.time;

			var	backMain	=	function(){
				if(accel_abs>this_opt.motionParams.threshold){
					tmp_rad	=	tmp_rad	+	tmp_rad_cnt;
					accel_abs	=	accel_abs*	this_opt.motionParams.decayRate;
					for(var i=this_opt.pai.length-1;	i>=0;	i--){
						this_obj._transformPai(pai_obj,[accel_abs	*	Math.cos(tmp_rad),accel_abs	*	Math.sin(tmp_rad)]);
						break;
					}
					var	timer_02	=	setTimeout(backMain,tmp_anim_time);
				}else{
					for(var i=this_opt.pai.length-1;	i>=0;	i--){
						this_obj._transformPai(pai_obj,[0,0]);
						break;
					}
					document.getElementById(pai_obj.id).getContext('2d').clearRect(0,0,1000,1000);
					pai_obj.vibe_flg	=	false;
					$('#'+pai_obj.id).closest('.move_pai_wrap').removeClass('paiActive');
				}
			}

			if(pai_obj.vibe_flg	== false){
				//連続発火防止
				pai_obj.vibe_flg	=	true;
				var	timer_01	=	setTimeout(backMain,tmp_anim_time);
				
				
			}

		},/*backAnim*/





		getOptions	:	function(){
			//外部からウィジェット項目のオプション情報を取得するときに機能する関数
			return	this.options;
		},





		_init: function(){
			//初期発火

			var	this_obj	=	this;
			var	this_opt	=	this.options;

			var	setCenter	=	function(){
				
				for(var i=this_opt.pai.length-1;	i>=0;	i--){
					//頂点座標に指定が無ければ縦横中央をデフォルトで入れ込む
					if(typeof	this_opt.pai[i].center	==	'undefined'){
						var	tmp_x	=	this_opt.pai[i].X	+	this_opt.pai[i].W*0.5;
						var	tmp_y	=	this_opt.pai[i].Y	+	this_opt.pai[i].H*0.5;
						this_opt.pai[i].center	=	{X	:	Math.round(tmp_x),	Y:	Math.round(tmp_y)};
					}
					this_opt.pai[i].touch_flg	=	false;
					this_opt.pai[i].vibe_flg	=	false;
				}
			}
			setCenter();



			var	the_wrap_elm	=	'#'	+	this_opt.wrapElmId;
			the_wrap_elm	=	$(the_wrap_elm);

			//縦横比のキープ、オリジナル画像との縮尺等の取得を行った後にパイcanvas設置
			var	img_obj	=	new Image();
			img_obj.src	=	this_opt.img.src;	//本来はここにランダム値

			img_obj.onload	=	function(){

				this_opt.img.ow	=	img_obj.width;
				this_opt.img.oh	=	img_obj.height;

				this_opt.img.dw	=	the_wrap_elm.width();
				this_opt.img.zoom	=	this_opt.img.dw	/	this_opt.img.ow;

				this_opt.img.dh	=	this_opt.img.oh	*	this_opt.img.zoom;
				this_opt.img.dh	=	Math.round(this_opt.img.dh);

				//スクロールバーの有無で画面幅・画像幅が変動するのでそのへんのタイミング調整をしよう

				//パイ枠設置
				var	tmp_elm	=	'<img class="main_img" class="undraggable" ondragstart="return false;"  oncontextmenu="return false;" src="'+this_opt.img.src+'" width="'+this_opt.img.dw+'" height="'+this_opt.img.dh+'">';

				for(var i=this_opt.pai.length-1;	i>=0;	i--){

					var	tmp_id	=	this_opt.wrapElmId	+	'_pai_'	+	[i];
					this_opt.pai[i].id	=	tmp_id;

					var	tmp_l	=	this_opt.pai[i].X	*	this_opt.img.zoom;
					var	tmp_t	=	this_opt.pai[i].Y	*	this_opt.img.zoom;
					var	tmp_w	=	this_opt.pai[i].W	*	this_opt.img.zoom;
					var	tmp_h	=	this_opt.pai[i].H	*	this_opt.img.zoom;

					tmp_l	=	Math.round(tmp_l);
					tmp_t	=	Math.round(tmp_t);
					tmp_w	=	Math.round(tmp_w);
					tmp_h	=	Math.round(tmp_h);

					tmp_elm	=	tmp_elm	+	'<canvas id="'+tmp_id+'"	class="undraggable pai_canvas"	width="'+tmp_w+'"	height="'+tmp_h+'"	style="left:'+tmp_l+'px;	top:'+tmp_t+'px;" ondragstart="return false;"  oncontextmenu="return false;"></canvas>';

				}
				the_wrap_elm.append(tmp_elm);
				this_obj._setEvents();
			};/*onload*/

		}/*_init*/,





		_setEvents	:	function(){

			var	this_obj	=	this;
			var	this_opt	=	this.options;

			var	the_wrap_elm	=	'#'	+	this_opt.wrapElmId;
			the_wrap_elm	=	$(the_wrap_elm);

			var	img_obj	=	new Image();
			img_obj.src	=	this_opt.img.src;	//本来はここにランダム値

			//image wrap element event
			the_wrap_elm.mousemove(function(){
				return false;
			})


			//pai canvas event
			the_wrap_elm.find('.pai_canvas')
				.click(function(event){
				var elm_id	=	$(this).attr('id');
				
				//ga('send', 'event', 'pai', 'click',elm_id,1);
				for(var i=this_opt.pai.length-1;	i>=0;	i--){
					if(this_opt.pai[i].id	==	elm_id){
						this_obj.backAnim(this_opt.pai[i],-20,40);
						break;
					}
				}
				return false;
			})
			.mousedown(function(event){
				event.preventDefault();
				var elm_id	=	$(this).attr('id');
				//ga('send', 'event', 'pai', 'click',elm_id,1);

				for(var i=this_opt.pai.length-1;	i>=0;	i--){
					if(this_opt.pai[i].id	==	elm_id){
						this_opt.pai[i].touch_flg	=	true;
						break;
					}
				}
				this_obj._tmpInfo.cursor.start	=	{
					X	:	event.clientX,
					Y	:	event.clientY
				}
			})
			.mousemove(function(event){				event.preventDefault();

				var elm_id	=	$(this).attr('id');
				var	tmp_pai_obj	=	'';
				var	the_flg;
				for(var i=this_opt.pai.length-1;	i>=0;	i--){
					if(this_opt.pai[i].id	==	elm_id){
						the_flg	=	this_opt.pai[i].touch_flg;
						tmp_pai_obj	=	this_opt.pai[i];
						break;
					}
				}
				this_obj._tmpInfo.cursor.current	=	{
					X	:	event.clientX,
					Y	:	event.clientY
				}
				if(the_flg	==	true){
					this_obj._transformPai(
											tmp_pai_obj,
											[	this_obj._tmpInfo.cursor.current.X	-	this_obj._tmpInfo.cursor.start.X,
												this_obj._tmpInfo.cursor.current.Y	-	this_obj._tmpInfo.cursor.start.Y
											]
										);
					$(this).closest('.move_pai_wrap').addClass('paiActive');
				}
				return false;
			})
			.mouseout(function(){
				var elm_id	=	$(this).attr('id');
				var	the_flg;
				var	the_flg;
				for(var i=this_opt.pai.length-1;	i>=0;	i--){
					if(this_opt.pai[i].id	==	elm_id){
						the_flg	=	this_opt.pai[i].touch_flg;
						tmp_pai_obj	=	this_opt.pai[i];
						break;
					}
				}
				if(the_flg	==	true){
					$(this).trigger('mouseup');
				}
				
				return false;
			})
			.mouseup(function(){
				$(this).trigger('vibe',[[30,-60]]);
				var elm_id	=	$(this).attr('id');
				var	tmp_pai_obj	=	'';
				var	the_flg;
				for(var i=this_opt.pai.length-1;	i>=0;	i--){
					if(this_opt.pai[i].id	==	elm_id){
						the_flg	=	this_opt.pai[i].touch_flg;
						tmp_pai_obj	=	this_opt.pai[i];
						break
					}
				}

				if(the_flg	==	true){
					this_obj.backAnim(
						tmp_pai_obj,
						this_obj._tmpInfo.cursor.current.X	-	this_obj._tmpInfo.cursor.start.X,
						this_obj._tmpInfo.cursor.current.Y	-	this_obj._tmpInfo.cursor.start.Y
					);
				}

				for(var i=this_opt.pai.length-1;	i>=0;	i--){
					if(this_opt.pai[i].id	==	elm_id){
						this_opt.pai[i].touch_flg	=	false;
						break;
					}
				}
				return false;
			})
			.bind('touchstart',function(){
				var elm_id	=	$(this).attr('id');
				ga('send', 'event', 'pai', 'touch',elm_id,1);
				$(this).trigger('vibe',[[30,-60]]);
				return false;
			}).bind('vibe',function(e,data_array){
				
				var vibe_default_x = 10;
				var vibe_default_y = -25;
				
				//引数で揺れ幅指定があれば適用
				if(typeof data_array == 'object'){
					vibe_default_x = data_array[0];
					vibe_default_y = data_array[1];
				}
				
				var elm_id	=	$(this).attr('id');
				for(var i=this_opt.pai.length-1;	i>=0;	i--){
					if(this_opt.pai[i].id	==	elm_id){
						this_obj.backAnim(this_opt.pai[i],vibe_default_x,vibe_default_y);
						break;
					}
				}
				$(this).closest('.move_pai_wrap').addClass('paiActive');
			});

			the_wrap_elm.trigger('onWidgetSetComplete');

		}/*_setEvents*/,





		_transformPai	:	function(pai_obj,accel_array){

			//揺らす挙動の実体関数
			//第1引数 : 揺らす乳のオブジェクト
			//第2引数 : X,Yそれぞれの方向にかかる XY の力 形式：[X,Y]

			var	this_obj	=	this;
			var	this_opt	=	this.options;

			var	tmp_l	=	pai_obj.X	*	this_opt.img.zoom;
			var	tmp_t	=	pai_obj.Y	*	this_opt.img.zoom;
			var	tmp_w	=	pai_obj.W	*	this_opt.img.zoom;
			var	tmp_h	=	pai_obj.H	*	this_opt.img.zoom;
			var	tmp_center_X	=	pai_obj.center.X	*	this_opt.img.zoom;	//画像が固有に持つ動作起点の座標 (必ずしも縦横の中心ではない)
			var	tmp_center_Y	=	pai_obj.center.Y	*	this_opt.img.zoom;

			var	tmp_center_point_left		=	pai_obj.W/(pai_obj.center.X	-	pai_obj.X);
			var	tmp_center_point_right	=	pai_obj.W/(pai_obj.W	-	pai_obj.center.X	+	pai_obj.X);
			var	tmp_center_point_top		=	tmp_h/(tmp_center_Y	-	tmp_t);
			var	tmp_center_point_bottom	=	tmp_h/(tmp_h	-	tmp_center_Y	+	tmp_t);
			var	img_obj	=	new Image();
			img_obj.src	=	this_opt.img.src;


			var	checkLimit	=	function(){	//上下左右の引っ張りすぎ防止

				//左端
				accel_array[0]	=	Math.max(accel_array[0]	,	tmp_l	-	tmp_center_X	+	this_opt.motionParams.touchLimit);

				//右端
				accel_array[0]	=	Math.min(accel_array[0]	,	tmp_l	-	tmp_center_X	-	this_opt.motionParams.touchLimit	+	tmp_w);

				//上端
				accel_array[1]	=	Math.max(accel_array[1],	tmp_t	-	tmp_center_Y	+	this_opt.motionParams.touchLimit);

				//下端
				accel_array[1]	=	Math.min(accel_array[1],	tmp_t	-	tmp_center_Y	-	this_opt.motionParams.touchLimit	+	tmp_h);

			}


			var	drawBg	=	function(){
				tmp_ctx.drawImage(img_obj,pai_obj.X,pai_obj.Y,pai_obj.W,pai_obj.H,0,0,tmp_w,tmp_h);
			}


			var	path1	=	function (){
				//上
				tmp_ctx.save();
				tmp_ctx.beginPath();
				tmp_ctx.moveTo(	0	,	0	);
				tmp_ctx.lineTo(	tmp_w	,	0	);
				tmp_ctx.lineTo(	tmp_center_X	-	tmp_l	+	accel_array[0], tmp_center_Y	-	tmp_t	+	accel_array[1]);
				tmp_ctx.closePath();
				tmp_ctx.clip();
				tmp_ctx.setTransform(
					1,
					0,
					tmp_center_point_top	*	accel_array[0]	/ tmp_h,
					tmp_center_point_top	*	accel_array[1]	/ tmp_h + 1,
					0,
					0
				 );
				drawBg();
				tmp_ctx.restore();
			}

			var	path2	=	function (){
				//右
				tmp_ctx.save();
				tmp_ctx.beginPath();
				tmp_ctx.moveTo(	tmp_w	,	0	);
				tmp_ctx.lineTo(	tmp_w	,	tmp_h	);
				tmp_ctx.lineTo(	tmp_center_X	-	tmp_l	+	accel_array[0], tmp_center_Y	-	tmp_t	+	accel_array[1]);
				tmp_ctx.closePath();
				tmp_ctx.clip();
				tmp_ctx.setTransform(
					-1*tmp_center_point_right*accel_array[0] / tmp_w + 1,
					-1*tmp_center_point_right*accel_array[1] / tmp_w,
					0,
					1,
					tmp_center_point_right	*	 accel_array[0],
					tmp_center_point_right	*	 accel_array[1]
				 );
				drawBg();
				tmp_ctx.restore();
			}

			var	path3	=	function (){
				tmp_ctx.save();
				tmp_ctx.beginPath();
				tmp_ctx.moveTo(	tmp_w	, tmp_h);
				tmp_ctx.lineTo(	0	,	tmp_h	);
				tmp_ctx.lineTo(	tmp_center_X	-	tmp_l	+	accel_array[0], tmp_center_Y	-	tmp_t	+	accel_array[1]);
				tmp_ctx.closePath();
				tmp_ctx.clip();
				tmp_ctx.setTransform(
					1,
					0,
					-1	*	tmp_center_point_bottom	*accel_array[0] / tmp_h,
					-1	*	tmp_center_point_bottom	*accel_array[1] / tmp_h + 1,
					tmp_center_point_bottom*accel_array[0],
					tmp_center_point_bottom	*	accel_array[1]
				);
				drawBg();
				tmp_ctx.restore();
			}

			var	path4	=	function (){
				//左
				tmp_ctx.save();
				tmp_ctx.beginPath();
				tmp_ctx.moveTo(	0	,	0	);
				tmp_ctx.lineTo(	0	,	tmp_h	);
				tmp_ctx.lineTo(	tmp_center_X	-	tmp_l	+	accel_array[0], tmp_center_Y	-	tmp_t	+	accel_array[1]);
				tmp_ctx.closePath();
				tmp_ctx.clip();
				tmp_ctx.setTransform(
					1	+	tmp_center_point_left*accel_array[0] / tmp_w,
					tmp_center_point_left*accel_array[1] / tmp_w,
					0,
					1,
					0,
					1
				);
				drawBg();
				tmp_ctx.restore();
			}

			//下記関数が順に発動
			//path1～4
			//setTransform(伸縮x, 傾斜y, 傾斜x, 伸縮y, 移動x, 移動y)

			var	tmp_ctx	=	'';
			if(document.getElementById(pai_obj.id)){
				tmp_ctx	=	document.getElementById(pai_obj.id).getContext('2d');

				if(typeof tmp_ctx	!=	'undefined'){
					checkLimit();
					tmp_ctx.clearRect(0,0,tmp_w,tmp_h);
					path1();
					path3();
					path2();
					path4();
				}
			}
		},

		//temporary values wrap,private data
		_tmpInfo	:	{
			cursor	:	{
				start	:	{	X	:	0,	Y	:	0	},
				current	:	{	X	:	0,	Y	:	0	}
			}
		},

  })

})(jQuery);

/*

$(function(){
	var	gravity	=	[0,0];
	var	scroll_position	=	[0,0];

	$(window).scroll(function(){
		var	orientation	=	Math.abs($(window).scrollLeft()	-	scroll_position[0])	-	Math.abs($(window).scrollTop()	-	scroll_position[1]);
		var	scr_ammount	=	[$(window).scrollLeft()	-	scroll_position[0]	,	$(window).scrollTop()	-	scroll_position[1]];

		var	vibe_thresshold	=	10;
		if(orientation	>0){//横スクロール時
			if(scr_ammount[0]>vibe_thresshold){
				scr_ammount[0]	=	vibe_thresshold;
			}else if(scr_ammount[0]<-1*vibe_thresshold){
				scr_ammount[0]	=	-1*vibe_thresshold;
			}
			//横の時も多少は縦の揺れを持たせる
			scr_ammount[1]	=	10;
		}else{//縦スクロール時
			scr_ammount[0]	=	10;
			if(scr_ammount[1]>vibe_thresshold){
				scr_ammount[1]	=	vibe_thresshold;
			}else if(scr_ammount[1]<-1*vibe_thresshold){
				scr_ammount[1]	=	-1*vibe_thresshold;
			}
		}
		$('.pai_canvas').trigger('vibe',[scr_ammount]);
		scroll_position	=	[$(window).scrollLeft(),$(window).scrollTop()];
	})
	
	
	.bind('devicemotion',function(event){
		var tmp_motion	=	Math.pow(gravity[0]	-	event.originalEvent.accelerationIncludingGravity.x,2)	+	Math.pow(gravity[1]	-	event.originalEvent.accelerationIncludingGravity.y,2);

		if(tmp_motion>20){

			var	orientation	=		Math.pow(gravity[0]	-	event.originalEvent.accelerationIncludingGravity.x,2)	-	Math.pow(gravity[1]	-	event.originalEvent.accelerationIncludingGravity.y,2);
			var	g_ammount	=	[gravity[0]	-	event.originalEvent.accelerationIncludingGravity.x,gravity[1]	-	event.originalEvent.accelerationIncludingGravity.y,2];
			g_ammount	=	[g_ammount[0]*10,g_ammount[1]*10];
			var	vibe_thresshold	=	100;

			if(orientation	>0){
				//横の時も多少は縦の揺れを持たせる
				if(g_ammount[0]>vibe_thresshold){
					g_ammount[0]	=	vibe_thresshold;
				}else if(g_ammount[0]<-1*vibe_thresshold){
					g_ammount[0]	=	-1*vibe_thresshold;
				}
				g_ammount[1]	=	10;
			}else{

				g_ammount[0]	=	10;
				if(g_ammount[1]>vibe_thresshold){
					g_ammount[1]	=	vibe_thresshold;
				}else if(g_ammount[1]<-1*vibe_thresshold){
					g_ammount[1]	=	-1*vibe_thresshold;
				}
			}
			$('.pai_canvas').trigger('vibe',[g_ammount]);

		}

		gravity[0]	=	event.originalEvent.accelerationIncludingGravity.x;
		gravity[1]	=	event.originalEvent.accelerationIncludingGravity.y;

	});



	//body event
	$('body').mousedown(function(){
		var	global_touch_flg	=	0;

		$('.move_pai_wrap').each(function(){
			var	the_opts	=	$(this).paiWidget('getOptions');
			for(var i=the_opts.pai.length-1;	i>=0;	i--){
				if(the_opts.pai[i].touch_flg	== true){
					global_touch_flg	=1;
				}
			}
		});
		if(global_touch_flg	==	1){
			return false;
		}

	});



});*/