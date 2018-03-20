var data;
var data_name;
$(function() {
	$("#buttonSubmit").click(function() {
		//var data = CKEDITOR.instances.editor1.getData();
		var type = $(".card-style .right-box ul").find('.select').attr('data-card-style');
		var detail = $(".card-detail .right-box ul").find('.select').attr('data-card-detail');
		var optionValue = $(".card-data-type .select-box > select").val();
		saveToStorage(detail,type,optionValue)
		window.open('result.html')
		//document.location.href="result.html";
	});

	//點擊新增按鈕
	$(".card-style .right-box ul > li.add").click(function() {
		$("#uploader").click();
	});
	$(".card-detail .right-box ul > li.add").click(function() {
		$("#uploader2").click();
	});

	//新增樣式後動作
	$("#uploader").change(function(){
		if ($("#uploader").val()=="") {
			$(".card-style .add-word").html(data_name);
		}else {
			data_name = $("#uploader").val();
			$(".card-style .add-word").html(data_name);
			$("#image-form").submit();
		}
	});

    $("#uploader2").change(function(){
        if ($("#uploader2").val()=="") {
            $(".card-detail .add-word").html(data_name);
        }else {
            data_name = $("#uploader2").val();
            $(".card-detail .add-word").html(data_name);
            $("#image-form2").submit();
        }
    });

	//點擊刪除按鈕
	$(".card-style .right-box ul > li i").click(function() {
		$this = $(this);
		deleteConfirm($this);
	})

	$(".card-detail .right-box ul > li i").click(function() {
		$this = $(this);
		deleteConfirm2($this);
	})
});

function loadStorage() {
    //data = window.localStorage["lang"];
    type = window.localStorage["type"];
    detail = window.localStorage["detail"];
    optionValue = window.localStorage["optionValue"];
}

function saveToStorage(detail,type,optionValue) {
    //window.localStorage["lang"] = data;
    window.localStorage["type"] = type;
    window.localStorage["detail"] = detail;
    window.localStorage["optionValue"] = optionValue
}

function deleteConfirm($this) {
	if (confirm("確認刪除？") == true) {
		var img = $this.parent().find('img').attr('src');
	      $.ajax({
	          url: "process.php",
	          method: 'post',
		dataType: 'json',
	          data: {img: img, opt: 'del'},
	          success: function (response) {
	          	if (response.status == true) {
	                  $this.parent().remove();
			} else {
	        			alert(response.message);
			}
	          },
	          error: function () {
	              alert('刪除失敗');
	          }
	      });
	} else {

	}
}

function deleteConfirm2($this) {
    if (confirm("確認刪除？") == true) {
        var img = $this.parent().find('img').attr('src');
        $.ajax({
            url: "process_detail.php",
            method: 'post',
            dataType: 'json',
            data: {img: img, opt: 'del'},
            success: function (response) {
                if (response.status == true) {
                    $this.parent().remove();
                } else {
                    alert(response.message);
                }
            },
            error: function () {
                alert('刪除失敗');
            }
        });
    } else {

    }
}