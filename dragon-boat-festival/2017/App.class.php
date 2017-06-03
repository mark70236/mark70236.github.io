<?php
class AppAction extends RAF_Action{

	private $user_info		= array();
	private $game_sign 		= "kira";
	private $status 		= 1;// 0 未開始  1 正常  2 已結束

	function AppAction(){
		//alert("活動已結束，感謝您的支持!!","http://kira.funmily.com/top.shtml");
		//die();
		//if(!app_access()) die("系統維護中, 請稍候再試");
		$this->user_info 	= $this->check_login();
		$date 			 	= date("Y-m-d H:m:s");
		//判斷活動時間
		if($date < $GLOBALS['sdate'])
			$this->status = 0;
		elseif($date > $GLOBALS['edate'])
			$this->status = 2;
		else
			$this->status = 1;
	}

	public function index(){

		if(empty($this->user_info)){
			alert("請先登入歡樂派","http://login.funmily.com/?url=".urlencode("http://event.funmily.com/dragon-boat-festival/2017/"));
			die();
		}
		$app 		= new App();
		$points		= $app->getPoints($this->user_info['uid']);
		$count		= $app->checkCount($this->user_info['uid'],$points);
		$history	= $app->getItemLog($this->user_info['uid']);
		include('./view/index.php');
	}

	public function reward(){
		$id = $_GET['id'];
		if(empty($this->user_info)){
			alert("請先登入歡樂派","http://login.funmily.com/?url=".urlencode("http://event.funmily.com/dragon-boat-festival/2017/"));
			die();
		}

		include('./view/reward.php');
	}

	public function AjaxgetItem(){
		if ( $this->status == 1 ) {
			$uid = $_POST['uid'];
			if(!empty($this->user_info['uid']) && !empty($uid) && $this->user_info['uid']==$uid){
				$app = new App();
				$points = $app->getPoints($uid);
				$count = $app->checkcount($uid,$points);
				$count = 99;
				if ( $count > 0 ) {
					$item 	= $this->randitem($points);
					$rs = $app->addItemLog($uid,$item);
					$rs = true;
					if ( $rs ) {
						$info = $app->getItemInfo($rs);
						$info = 1;
						if ( $info ) {
							$html = "<tr><td>".$GLOBALS['item'][$info['item_id']]['name']."</td><td>".$info['create_time']."</td></tr>";
						}
						echo json_encode(array("status"=>1,"id"=>$item,"count"=>$count-1,"html"=>$html));die();
					}else{
						echo json_encode(array("status"=>"出現錯誤，請重新轉蛋"));die();
					}
				}else{
					echo json_encode(array("status"=>"剩餘次數不足111"));die();
				}
			}
			echo json_encode(array("status"=>"請重新登錄Funmily，請重新登錄。"));die();
		}
		echo json_encode(array("status"=>"不在活動時間內，仍感謝您的支持。"));die();
	}

	private function randitem($points=0){
		/*if($points>=10000){
			$app = new App();
			$ps4 = $app->getPS4();
			if($ps4)
				$GLOBALS['item'][$ps4]['random'] = 20;
		}*/

		$rand = array();
		foreach($GLOBALS['item'] as $id =>$v){
			$sum = $sum + $v['random'];
			for($i=1;$i<=$v['random'];$i++){
				$rand[] = $id;
			}
		}

		if($ps4)
			$GLOBALS['item'][$ps4]['random'] = 0;

		shuffle($rand);
		$rs = array_rand($rand,1);
		return $rand[$rs];
	}

	private function check_login(){
		$pass_oper		=	load_class('Core_Global_Funmily_PassPort');
		$user_info		=	$pass_oper->checkCookieAuthCode('', '', true);
		if(!empty($user_info))
			return $user_info;

		return false;
	}
}
?>

