$(function() {
	// loadStorage()
	// checkStatus()
	// $(".col").click(function() {
	// 	var dataList = $(this).attr('data-list');
	// 	if (dataList=="1") {
	// 		alert('此項目已選過囉！')
	// 	}else {
	// 		$(this).attr('data-list','1');
	// 		saveToStorage()
	// 		window.location = 'result.html';
	// 	}
	// });

	// $(".reset").click(function() {
	// 	resetStorage();
	// });
})

function checkStatus() {
	$(".col").each(function(index, el) {
		var dataList = $(this).attr('data-list');
		if (dataList=="1") {
			$(this).addClass('checked');
		}
	});
}

function resetStorage() {
	window.sessionStorage["data-list-1"] = 0;
	window.sessionStorage["data-list-2"] = 0;
	window.sessionStorage["data-list-3"] = 0;
	window.sessionStorage["data-list-4"] = 0;
	window.sessionStorage["data-list-5"] = 0;
	window.sessionStorage["data-list-6"] = 0;
	window.sessionStorage["data-list-7"] = 0;
	window.sessionStorage["data-list-8"] = 0;
	window.sessionStorage["data-list-9"] = 0;
	window.sessionStorage["data-list-10"] = 0;
	window.location.reload(true);
}


function loadStorage() {
	document.getElementById("col1").setAttribute('data-list',window.sessionStorage["data-list-1"]);
	document.getElementById("col2").setAttribute('data-list',window.sessionStorage["data-list-2"]);
	document.getElementById("col3").setAttribute('data-list',window.sessionStorage["data-list-3"]);
	document.getElementById("col4").setAttribute('data-list',window.sessionStorage["data-list-4"]);
	document.getElementById("col5").setAttribute('data-list',window.sessionStorage["data-list-5"]);
	document.getElementById("col6").setAttribute('data-list',window.sessionStorage["data-list-6"]);
	document.getElementById("col7").setAttribute('data-list',window.sessionStorage["data-list-7"]);
	document.getElementById("col8").setAttribute('data-list',window.sessionStorage["data-list-8"]);
	document.getElementById("col9").setAttribute('data-list',window.sessionStorage["data-list-9"]);
	document.getElementById("col10").setAttribute('data-list',window.sessionStorage["data-list-10"]);
}

function saveToStorage(dataWk) {
	window.sessionStorage["data-list-1"] = document.getElementById("col1").getAttribute('data-list');
	window.sessionStorage["data-list-2"] = document.getElementById("col2").getAttribute('data-list');
	window.sessionStorage["data-list-3"] = document.getElementById("col3").getAttribute('data-list');
	window.sessionStorage["data-list-4"] = document.getElementById("col4").getAttribute('data-list');
	window.sessionStorage["data-list-5"] = document.getElementById("col5").getAttribute('data-list');
	window.sessionStorage["data-list-6"] = document.getElementById("col6").getAttribute('data-list');
	window.sessionStorage["data-list-7"] = document.getElementById("col7").getAttribute('data-list');
	window.sessionStorage["data-list-8"] = document.getElementById("col8").getAttribute('data-list');
	window.sessionStorage["data-list-9"] = document.getElementById("col9").getAttribute('data-list');
	window.sessionStorage["data-list-10"] = document.getElementById("col10").getAttribute('data-list');

	window.sessionStorage["data-wk"] = dataWk
}

function loadResult() {
	var dataWk = window.sessionStorage["data-wk"];
	$(".award-box").addClass('award'+dataWk+'');
}