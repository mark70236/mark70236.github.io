// $('.form-needed').focusout(function(event) {
// 	/* Act on the event */
// 	var regex = new RegExp($(this).data('pattern'));
// 	var value = $.trim($(this).val());
// 	var inputName = $(this).attr('id');
// 	var test_validation;

// 	if (value=='') {
// 		formValidation($(this), false);
// 	} else {
// 		formValidation($(this), true);
// 	}

// 	switch(inputName) {
// 		case 'input-account':
// 			test_validation = regex.test(value);
// 			formValidation($(this), test_validation);
// 			break;
// 		case 'input-password':
// 			if (value.length > 7 && value.length <21 && regex.test(value)) {
// 				test_validation = true;
// 			} else {
// 				test_validation = false;
// 			}
// 			formValidation($(this), test_validation);
// 			break;
// 		case 'input-repassword':
// 			if (value == $('#input-password').val() && value !== '') {
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
// 		$input.parents('.form-v').find('.tooltip').hide();
// 	} else {
// 		$input.addClass('error');
// 		$input.parents('.form-v').find('.tooltip').show();
// 	}
// }