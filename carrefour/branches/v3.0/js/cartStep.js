// handle table

$('.cart-step .btn-delete').click(function(e) {
	/* Act on the event */
	e.preventDefault();
	var $el = $(this);
	$el.parents('.table-tr').remove();
});

// handle discount code
$('.btn-submit-discount').click(function(e) {
	/* Act on the event */
	e.preventDefault();
	var $discountBlock = $(this).parents('.enter-discount');
	var $inputDiscount = $discountBlock.find('.input-discount-code');
	if ($.trim($inputDiscount.val()).length === 0){
	} else {
		$discountBlock.addClass('hide');
		clearDiscount($inputDiscount);
	}
});

var checkLotteryChecked = function(){
	var $selectedLottery = $("#lb-cart-s-6 input[type='radio']:checked").parents('.lottery-chose');

	return $selectedLottery.find('.lottery-price').text()+$selectedLottery.find('.lottery-name').text();
}

var clearDiscount = function($input){
	$input.val('');
}

var clearLottery = function($input){
	$input.val('');
}

var $memoryLotteryBlock;

$('.btn-chose-lottery').click(function(e) {
	/* Act on the event */
	e.preventDefault();
	$memoryLotteryBlock = $(this).parents('.enter-lottery');
});

$('#confirm-lottery').click(function(e) {
	/* Act on the event */
	e.preventDefault();
	$memoryLotteryBlock.find('.input-lottery-code').val($.trim(checkLotteryChecked()));
	$memoryLotteryBlock.find('.btn-chose-lottery').addClass('hide');
	$memoryLotteryBlock.find('.btn-change-lottery').removeClass('hide');
	$memoryLotteryBlock.find('.btn-delete-lottery').removeClass('hide');
});

$('.btn-delete-lottery').click(function(e) {
	/* Act on the event */
	e.preventDefault();
	$(this).parents('.chose-discount').find('.enter-discount').removeClass('hide');
	clearLottery($(this).parents('.enter-lottery').find('.input-lottery-code'));
	$memoryLotteryBlock.find('.btn-chose-lottery').removeClass('hide');
	$memoryLotteryBlock.find('.btn-change-lottery').addClass('hide');
	$memoryLotteryBlock.find('.btn-delete-lottery').addClass('hide');
});


// chose-item

$('.chose-item').click(function(e) {
	/* Act on the event */
	e.preventDefault();
	var $el = $(this);
	if($el.hasClass('active')) return;

	if ($el.data('type') !== undefined) {
		if ($el.data('type')==='creditcard') {
			$('.chose-bank').removeClass('hide');
		} else {
			$('.chose-bank').addClass('hide');
		}
	}

	$el.parents('.chose-item-block').find('.chose-item').removeClass('active');
	$el.addClass('active');
});

// chose user
$('.chose-user-wrap').on('click', '.chose-user', function(e) {
	e.preventDefault();
	/* Act on the event */
	var $el = $(this);

	if ($el.hasClass('active')) return;
	$('.chose-user-wrap').find('.chose-user').removeClass('active');
	$el.addClass('active');
});


// $('.form-needed').focusout(function(event) {
// 	/* Act on the event */
// 	var value = $.trim($(this).val());
// 	var inputName = $(this).attr('id');
// 	var test_validation;

// 	if (value=='') {
// 		formValidation($(this), false);
// 	} else {
// 		formValidation($(this), true);
// 	}

// 	switch(inputName) {
// 		case 'input-user-name':
// 			if (value.length > 1 && value.length <16) {
// 				test_validation = true;
// 			} else {
// 				test_validation = false;
// 			}
// 			formValidation($(this), test_validation);
// 			break;
// 	}
// });

// var formValidation = function($input, validation){
// 	if (validation) {
// 		$input.removeClass('error');
// 	} else {
// 		$input.addClass('error');
// 	}
// }

// var validationFillup = function(){
// 	var bool = true;
// 	$('#lb-cart-s2-s2-2 .form-needed').each(function(index, el) {
// 		if ($(el).hasClass('error')||$(el).val()=='') bool = false;
// 		if ($(el).val()=='') $(el).addClass('error');
// 	});
// 	if ($('#select-city').find(":selected").val()=='default'||$('#select-township').find(":selected").val()=='default'||$('#select-road').find(":selected").val()=='default')
// 		bool = false;

// 	return bool;
// }

// $('.btn-add-user-to').click(function(e) {
// 	/* Act on the event */
// 	var data = {'name':'', 'gender':'', 'phone':'', 'tel':'', 'address':''},
// 		$tmplHtml,
// 		otherAddress = '';

// 	if (!validationFillup()) return;
// 	data.name = $('#input-user-name').val();
// 	data.gender = $('#lb-cart-s2-s2-2 .gender-chose .chose-item.active').text();
// 	data.phone = $('#input-user-phone').val();
// 	data.tel = $('#input-user-tel').val();
// 	$('.input-address-other').each(function(index, el) {
// 		if ($(el).val()!=='')
// 			otherAddress += $(el).val() + $($(el).data('txt')).text();
// 	});

// 	data.address = $('#select-city').find(":selected").text()+$('#select-township').find(":selected").text()+$('#select-road').find(":selected").text()+otherAddress;

// 	$('#lb-cart-s2-s2-2').modal('hide');
// 	$tmplHtml = $(tmpl("tmpl-add-user",data));
// 	$('.prepend-user').before($tmplHtml);
// });

$('.btn-add-user').click(function(e) {
	/* Act on the event */
	e.preventDefault();
	$('#lb-cart-s2-s2-2 input').each(function(index, el) {
		$(el).val('');
	});

});

// edit user
// $('.more-info').on('click', '.btn-edit-user', function(e) {
// 	e.preventDefault();
// 	/* Act on the event */
// 	var $lb = $('#lb-cart-s2-s2-2');
// });

// remove user
$('.more-info').on('click', '.btn-remove-user', function(e) {
	e.preventDefault();
	/* Act on the event */
	$(this).parents('.user-info').remove();
});



// date
$(".select-date").flatpickr({
	defaultDate: 'today',
	minDate: 'today'
});
// collaspe table
$('.collaspe-table').click(function(e) {
	/* Act on the event */
	e.preventDefault();
	$(this).toggleClass('active');
	$('.collaspe-wrap').toggleClass('active');
});

// dropdown invoice
$('.btn-dropdown-list-invoice').click(function(e) {
	/* Act on the event */
	e.preventDefault();
	var $el = $(this);
	if (!$el.hasClass('active')) $('.dropdown-list-invoice .add-li-block').removeClass('active');
	$el.toggleClass('active');
	$('.dropdown-list-invoice').toggleClass('active');
});

$('.dropdown-list-invoice .add-li').click(function(e) {
	/* Act on the event */
	e.preventDefault();
	$('.dropdown-list-invoice .add-li-block').addClass('active');
});

$('.btn-done-invoice').click(function(e) {
	/* Act on the event */
	e.preventDefault();
	if ($('.input-enter-invoice-name').val()==''||$('.input-enter-invoice-code').val()==''){
		alert('請輸入值');
		return;
	}
	$('.dropdown-list-invoice .add-li-block').removeClass('active');
	$('.dropdown-list-invoice .prepend-li').before(
		`<li class="invoice-item">
			<a href="#">
				<span class="invoice-name">${$('.input-enter-invoice-name').val()}</span>
				<span class="invoice-code">${$('.input-enter-invoice-code').val()}</span>
			</a>
		</li>`
	);
});

$('.dropdown-list-invoice').on('click', '>li.invoice-item >a', function(e) {
	e.preventDefault();
	/* Act on the event */
	var text = $(this).find('.invoice-code').text();
	$('.input-invoice').val(text);
	$('.btn-dropdown-list-invoice, .dropdown-list-invoice').removeClass('active');
});








