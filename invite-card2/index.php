<?php
    $dirname = "images/";
    $dir = opendir($dirname);
    $images = array();
    while (false !== ($file = readdir($dir))) {
        if (!in_array($file, array('.', '..')) && !is_dir($file) && $file[0] != ".") {
            $arr = explode('.', $file);
            $images[$arr[0]] = $file;
        }
    }
    $dirname2 = "detail_images/";
    $dir2 = opendir($dirname2);
    $images2 = array();
    while (false !== ($file2 = readdir($dir2))) {
        if (!in_array($file2, array('.', '..')) && !is_dir($file2) && $file2[0] != ".") {
            $arr = explode('.', $file2);
            $images2[$arr[0]] = $file2;
        }
    }

?>

<!DOCTYPE html>
<html lang="zh-tw">
<head>
	<meta charset="UTF-8">
	<title>邀請卡編輯</title>
	<link rel="stylesheet" href="plugin/reset/min.css">
	<link rel="stylesheet" href="css/index.css">
	<script src="plugin/jquery/1.9.1.min.js"></script>
	<script src="plugin/jqueryui/1.10.3.min.js"></script>
	<script src="plugin/ckeditor/ckeditor.js"></script>
	<script src="plugin/ckfinder/ckfinder.js"></script>
	<script src="js/index.js"></script>
	<script>
		$(function() {
			$("[data-card-style]").click(function() {
				$("[data-card-style]").removeClass("select");
				$(this).addClass("select");
			});
			$("[data-card-detail]").click(function() {
				$("[data-card-detail]").removeClass("select");
				$(this).addClass("select");
			});
		})
	</script>
</head>
	<body>
		<header></header>
        <form id="image-form" method="post" action="process.php" enctype="multipart/form-data">
            <input type="file" id="uploader" name="uploader" accept="image/*" style="display: none;">
            <input type="hidden" name="opt" value="new">
        </form>
        <form id="image-form2" method="post" action="process_detail.php" enctype="multipart/form-data">
            <input type="file" id="uploader2" name="uploader2" accept="image/*" style="display: none;">
            <input type="hidden" name="opt" value="new">
        </form>
		<div class="wrap"><form id="cardForm" method="post">
			<section class="card-style">
				<div class="title">選擇樣式</div>
				<div class="right-box">
					<ul id="cards">
		                        <?php $j = 0;
		                        foreach ($images as $key => $image) {?>
		                            <li data-card-style="<?php echo $key; ?>" class="<?php echo ($j==0 ? "select" : '');?>"><img src="<?php echo $dirname . $image ?>"><i>╳</i></li>
		                        <?php $j++;
		                        } ?>
						<li class="add"><div class="add-word">新增樣式</div><div class="add-new">＋</div></li>
					</ul>
				</div>
			</section>
			<section class="card-detail">
				<div class="title">上傳卡片內容</div>
				<div class="right-box">
					<ul id="cards">
                                <?php $k = 0;
                                foreach ($images2 as $key => $image) {?>
                                    <li data-card-detail="<?php echo $key; ?>" class="<?php echo ($k==0 ? "select" : '');?>"><img src="<?php echo $dirname2 . $image ?>"><i>╳</i></li>
                                    <?php $k++;
                                } ?>
						<li class="add"><div class="add-word">新增圖檔</div><div class="add-new">＋</div></li>
					</ul>
				</div>
			</section>
			<!-- <section class="card-detail">
				<div class="title">邀請內容</div>
				<div class="right-box">
					<form>
						<textarea name="editor1" id="editor1" rows="10" cols="80">

						</textarea>
					 </form>
				</div>
			</section> -->
			<section class="card-data-type">
				<div class="title">檔案內容</div>
				<div class="right-box">
					<div class="select-box">
						<select>
							<option value="1">PNG</option>
							<option value="2">HTML</option>
						</select>
						<input id="buttonSubmit" type="button" value="結果預覽"></input>
					</div>
					<div class="btn-box"></div>
				</div>
			</section>
		</form></div>
		<footer></footer>
	</body>
	<script>
		// CKFinder.setupCKEditor();
		// 	CKEDITOR.replace( 'editor1', {
		// });
	</script>
</html>
