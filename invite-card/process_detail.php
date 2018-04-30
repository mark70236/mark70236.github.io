<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['opt'])) {

    /**
     * delete file
     */
    if ($_POST['opt'] == 'del' && isset($_POST['img'])) {
        $path = explode("/", $_POST['img']);
        if (isset($path[0]) && $path[0] == 'detail_images') {
            unlink($_POST['img']);
            echo json_encode(array('status' => true, 'message' => '刪除成功'));
        } else {
            echo json_encode(array('status' => false, 'message' => '路徑錯誤，刪除失敗'));
        }
    } /**
     * new file
     */
    elseif ($_POST['opt'] == 'new' && isset($_FILES['uploader2'])) {
        // file upload name, extension
        $info = pathinfo($_FILES['uploader2']['name']);
        $ext = $info['extension'];

        // create new name accoding to current files
        $dirname = "detail_images/";
        $dir = opendir($dirname);
        $images = array();
        $i = 0;
        while (false !== ($file = readdir($dir))) {
            if (!in_array($file, array('.', '..')) && !is_dir($file)) {
                $arr = explode('.', $file);
                $images[$i] = $arr[0];
                $i++;
            }
        }
        if ($i == 0) {
            $filename = "1." . $ext;
        } else {
            sort($images);
            $filename = ($images[$i - 1] + 1) . "." . $ext;
        }

        // add file
        $target = $dirname . $filename;
        if (file_exists($target)) {
            echo "上傳失敗";
        } else {
            if (move_uploaded_file($_FILES['uploader2']['tmp_name'], $target)) {
                header("Location: " . "http://" . $_SERVER['HTTP_HOST'] . '/');
                echo $target;
            } else {
                echo "上傳失敗";
            }
        }

    } else {
        echo json_encode(array('status' => false, 'message' => 'failed'));
    }
} else {
    echo json_encode(array('status' => false, 'message' => 'failed2'));
}



?>