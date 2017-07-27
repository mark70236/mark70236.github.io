// member_receipt 新增功能
$("#member-receipt .panel-group .btn-group .f-check-btn").click(function(e) {
	e.preventDefault();
	var c = $(this).attr("class");
	var m = $("#member-receipt .panel-group > div.panel").length;
	var r = $('#added input[name=optionsRadios]:checked').val()

	if ( c != "collapsed" ) {
		$(this).parent().parent().parent().before(`
			<div class="panel panel-default">
				<ul>
					<li>` + $('.type-name').val() + `</li>
					<li>` + $('.type-mobile-phone').val() + `</li>
					<li>` + $('.type-home-phone').val() + `</li>
					<li>` + $('.type-address-1').val() + $('.type-address-2').val() + $('.type-address-3').val() + " " + $('.type-address-4').val() + "巷" + $('.type-address-5').val() + "弄" + $('.type-address-6').val() + "號" + $('.type-address-7').val() + "樓之" + $('.type-address-8').val() + `</li>
					<li>
						<ul>
							<li class="panel-heading" role="tab" id="heading-` + m + `">
								<a role="button" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseExample-` + m + `" aria-expanded="false" aria-controls="collapseExample-` + m + `">
									<img class="edit-icon" src="images/edit-icon.png" />
									<img class="edit-ok-icon" src="images/edit-ok-icon.png" />
								</a>
							</li>
							<li><a href="javascript: void(0)" data-toggle="modal" data-target="#lb-cart-s-20"><img src="images/ashcan-icon.png" /></a></li>
						</ul>
					</li>
				</ul>
				<div id="collapseExample-` + m + `" class="panel-collapse collapse" role="tabpanel" aria-labelledby="collapseExample-` + m + `">
					<div class="well">
						<form class="" action="">
							<div class="form-group form-v">
								<label>姓名<span>*</span></label>
								<ul>
									<li>
										<input class="form-control form-needed error" type="text" value="` + $('.type-name').val() + `">
										<div class="error-txt-2 red">請輸入姓名</div>
									</li>

									<li>
										<div class="radio">
											<input type="radio" name="optionsRadios" id="optionsRadios` + m + `-1" value="option1" class="css-checkbox">
											<label for="optionsRadios` + m + `-1" class="css-label">先生</label>
										</div>
									</li>
									<li>
										<div class="radio">
											<input type="radio" name="optionsRadios" id="optionsRadios` + m + `-2" value="option2" class="css-checkbox" checked>
											<label for="optionsRadios` + m + `-2" class="css-label">小姐</label>
										</div>
									</li>

								</ul>
							</div>
							<div class="form-group form-v">
								<label>行動電話<span>*</span></label>
								<div>
									<input class="form-control form-needed error" type="text" value="` + $('.type-mobile-phone').val() + `">
									<div class="error-txt-2 red">手機號碼格式錯誤，請重新輸入</div>
								</div>
							</div>
							<div class="form-group">
								<label>住宅電話</label>
								<div><input class="form-control" type="text" value="` + $('.type-home-phone').val() + `"></div>
							</div>
							<div class="form-group form-v">
								<label>聯絡地址<span>*</span></label>
								<ul class="address-group">
									<li>
										<select class="form-control form-needed error type-address-1" >
											<option value="台北市3">台北市3</option>
											<option value="台北市2">台北市2</option>
											<option value="台北市1">台北市1</option>
											<option value="` + $('.type-address-1').val() + `" selected ="">` + $('.type-address-1').val() + `</option>
										</select>
									</li>
									<li>
										<select class="form-control form-needed error type-address-2">
											<option value="南港區" selected="">南港區</option>
											<option value="南港區2">南港區2</option>
											<option value="南港區3">南港區3</option>
											<option value="` + $('.type-address-2').val() + `" selected ="">` + $('.type-address-2').val() + `</option>
										</select>
									</li>
									<li>
										<select class="form-control form-needed error type-address-3">
											<option value="忠孝東路 4 段" selected="">忠孝東路 4 段</option>
											<option value="忠孝東路 5 段"">忠孝東路 5 段</option>
											<option value="忠孝東路 6 段">忠孝東路 6 段</option>
											<option value="` + $('.type-address-3').val() + `" selected ="">` + $('.type-address-3').val() + `</option>
										</select>
										<div class="error-txt-1 red">請選擇縣市、鄉鎮區、路名與號</div>
									</li>
									<li><input class="form-control type-address-4" type="text" value="` + $('.type-address-4').val() + `">巷</li>
									<li><input class="form-control type-address-5" type="text" value="` + $('.type-address-5').val() + `">弄</li>
									<li><input class="form-control form-needed error type-address-6" type="text" value="` + $('.type-address-6').val() + `">號</li>
									<li><input class="form-control type-address-7" type="text" value="` + $('.type-address-7').val() + `">樓之</li>
									<li><input class="form-control type-address-8" type="text" value="` + $('.type-address-8').val() + `"></li>
								</ul>
							</div>
						</form>
					</div>
				</div>
			</div>
		`);

	}
})

// member_editorial 新增功能
$("#member-editorial .panel-group .btn-group .f-check-btn").click(function(e) {
	e.preventDefault();
	var c = $(this).attr("class");
	var m = $("#member-editorial .panel-group > div.panel").length;
	var r = $('#added input[name=optionsRadios]:checked').val()

	if ( c != "collapsed" ) {
		$(this).parent().parent().parent().before(`
			<div class="panel panel-default">
				<ul>
					<li>` + $('.company-name').val() + `</li>
					<li>` + $('.company-id').val() + `</li>
					<li>
						<ul>
							<li class="panel-heading" role="tab" id="heading-1">
								<a role="button" class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseExample-` + m + `" aria-expanded="false" aria-controls="collapseExample-` + m + `">
									<img class="edit-icon" src="images/edit-icon.png" />
									<img class="edit-ok-icon" src="images/edit-ok-icon.png" />
								</a>
							</li>
							<li><a href="javascript: void(0)" data-toggle="modal" data-target="#lb-cart-s-20"><img src="images/ashcan-icon.png" /></a></li>
						</ul>
					</li>
				</ul>
				<div id="collapseExample-` + m + `" class="panel-collapse collapse" role="tabpanel" aria-labelledby="collapseExample-` + m + `">
					<div class="well">
						<form class="" action="">
							<div class="form-group">
								<label>公司名稱</label>
								<div><input class="form-control" type="text" value="` + $('.company-name').val() + `"></div>
							</div>
							<div class="form-group form-v">
								<label>統一編號<span>*</span></label>
								<div>
									<input class="form-control form-needed error" type="text" value="` + $('.company-id').val() + `">
									<div class="error-txt-2 red">統一編號不正確，請檢查後再輸入</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		`);

	}
})

// cartStep2 新增功能
$("#cartStep2 a.btn-add-user-to").click(function(e) {
	e.preventDefault();

	$(".more-info .row .prepend-user").before(`
		<div class="user-info col-md-4 col-sm-12 col-xs-12">
			<div class="chose-user more-user">
				<div class="user-name clearfix">
					<div class="user-info-name pull-left">` + $('#lb-cart-s2-s2-2 #input-user-name').val() + `</div>
					<div class="user-info-gender pull-right">先生</div>
				</div>
				<div>
					<ul>
						<li class="user-info-phone">` + $('#lb-cart-s2-s2-2 #input-user-phone').val() + `</li>
						<li class="user-info-tel">` + $('#lb-cart-s2-s2-2 #input-user-tel').val() + `</li>
						<li class="user-info-address">` + $('#lb-cart-s2-s2-2 .type-address-1').val() + $('#lb-cart-s2-s2-2 .type-address-2').val() + $('#lb-cart-s2-s2-2 .type-address-3').val() + " " + $('#lb-cart-s2-s2-2 .type-address-4').val() + "巷" + $('#lb-cart-s2-s2-2 .type-address-5').val() + "弄" + $('#lb-cart-s2-s2-2 .type-address-6').val() + "號" + $('#lb-cart-s2-s2-2 .type-address-7').val() + "樓之" + $('#lb-cart-s2-s2-2 .type-address-8').val() + `</li>
					</ul>
				</div>
				<div class="action-edit margin-top-30 row">
					<div class="col-xs-6">
						<a class="btn btn-edit-user" href="#" data-toggle="modal" data-target="#lb-cart-s2-s2-2">
							<img class="active-icon margin-right-5" src="images/icon-edit2.png" height="15" width="15" alt="">
							<img class="inactive-icon margin-right-5" src="images/icon-edit3.png" height="15" width="15" alt="">
							<span class="inline-block vertical-middle">編輯</span>
						</a>
					</div>
					<div class="col-xs-6">
						<a class="btn btn-remove-user" href="#">
							<img class="inline-block margin-right-5" src="images/icon-remove.png" height="13" width="13" alt="">
							<span class="inline-block vertical-middle">刪除</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	`);

})

// cartStep2-1 新增功能
$("#cartStep2-1 a.btn-add-user-to").click(function(e) {
	e.preventDefault();

	$(".more-info .row .prepend-user").before(`
		<div class="user-info col-md-4 col-sm-12 col-xs-12">
			<div class="chose-user more-user">
				<div class="user-name clearfix">
					<div class="user-info-name pull-left">` + $('#lb-cart-s2-s2-1 #input-user-name').val() + `</div>
					<div class="user-info-gender pull-right">先生</div>
				</div>
				<div>
					<ul>
						<li class="user-info-phone">` + $('#lb-cart-s2-s2-1 #input-user-phone').val() + `</li>
						<li class="user-info-tel">` + $('#lb-cart-s2-s2-1 #input-user-tel').val() + `</li>
						<li class="user-info-address">` + $('#lb-cart-s2-s2-1 .type-address-1').val() + $('#lb-cart-s2-s2-1 .type-address-2').val() + $('#lb-cart-s2-s2-1 .type-address-3').val() + " " + $('#lb-cart-s2-s2-1 .type-address-4').val() + "巷" + $('#lb-cart-s2-s2-1 .type-address-5').val() + "弄" + $('#lb-cart-s2-s2-1 .type-address-6').val() + "號" + $('#lb-cart-s2-s2-1 .type-address-7').val() + "樓之" + $('#lb-cart-s2-s2-1 .type-address-8').val() + `</li>
					</ul>
				</div>
				<div class="action-edit margin-top-30 row">
					<div class="col-xs-6">
						<a class="btn btn-edit-user" href="#" data-toggle="modal" data-target="#lb-cart-s2-s2-2">
							<img class="active-icon margin-right-5" src="images/icon-edit2.png" height="15" width="15" alt="">
							<img class="inactive-icon margin-right-5" src="images/icon-edit3.png" height="15" width="15" alt="">
							<span class="inline-block vertical-middle">編輯</span>
						</a>
					</div>
					<div class="col-xs-6">
						<a class="btn btn-remove-user" href="#">
							<img class="inline-block margin-right-5" src="images/icon-remove.png" height="13" width="13" alt="">
							<span class="inline-block vertical-middle">刪除</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	`);

})