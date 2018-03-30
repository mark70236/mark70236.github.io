$(function() {
	loadStorage()
	checkStatus()
	$(".menu li").click(function() {
		$(this).attr('data-list','1');
		saveToStorage()
		window.location = 'index2.html';
	});

	$(".reset").click(function() {
		resetStorage();
	});
})

function checkStatus() {
	$(".menu li").each(function(index, el) {
		var dataList = $(this).attr('data-list');
		if (dataList=="1") {
			$(this).addClass('picked').css('font-size', '40px');
		}
	});
}

function resetStorage() {
	window.localStorage["data-list-1"] = 0;
	window.localStorage["data-list-2"] = 0;
	window.localStorage["data-list-3"] = 0;
	window.localStorage["data-list-4"] = 0;
	window.localStorage["data-list-5"] = 0;
	window.localStorage["data-list-6"] = 0;
	window.location.reload(true);
}


function loadStorage() {
	document.getElementById("data-list-1").setAttribute('data-list',window.localStorage["data-list-1"]);
	document.getElementById("data-list-2").setAttribute('data-list',window.localStorage["data-list-2"]);
	document.getElementById("data-list-3").setAttribute('data-list',window.localStorage["data-list-3"]);
	document.getElementById("data-list-4").setAttribute('data-list',window.localStorage["data-list-4"]);
	document.getElementById("data-list-5").setAttribute('data-list',window.localStorage["data-list-5"]);
	document.getElementById("data-list-6").setAttribute('data-list',window.localStorage["data-list-6"]);
}

function saveToStorage() {
	window.localStorage["data-list-1"] = document.getElementById("data-list-1").getAttribute('data-list');
	window.localStorage["data-list-2"] = document.getElementById("data-list-2").getAttribute('data-list');
	window.localStorage["data-list-3"] = document.getElementById("data-list-3").getAttribute('data-list');
	window.localStorage["data-list-4"] = document.getElementById("data-list-4").getAttribute('data-list');
	window.localStorage["data-list-5"] = document.getElementById("data-list-5").getAttribute('data-list');
	window.localStorage["data-list-6"] = document.getElementById("data-list-6").getAttribute('data-list');
}