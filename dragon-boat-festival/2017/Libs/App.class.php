<?php 
class App{
	
	private $conn;

	function __construct() {
		$this->conn = _db_connect("kira_global",'event_read');
	}
	
	function checkCount($uid=0,$point=0){
		if($uid && $point>=360){
			$sql  	= "SELECT count(id) as num FROM luckywheel_itemlog Where uid='$uid' ";
			$rs		= mssql_query($sql, $this->conn);
			$row	= mssql_fetch_assoc($rs);
			$use 	= !empty($row['num'])?$row['num']:0;
			$count	= floor($point/360) - $use;
			return $count;
		}
		return 0;
	}

	function getPoints($uid = 0){
		if($uid){
			$sdate	= 	date("Ymd",strtotime($GLOBALS['sdate']));
			$edate	= 	date("Ymd",strtotime($GLOBALS['edate']));
			$sql  	= 	"SELECT sum(points) as points FROM luckywheel_points Where uid='$uid' and date >= '$sdate' and date <= '$edate'";
			$rs		=	mssql_query($sql, $this->conn);
			$row	=	mssql_fetch_assoc($rs);
			$point	= 	!empty($row['points'])?$row['points']:0;
			return $point;
		}
		return 0;
	}
	
	function getItemLog($uid = 0){
		$data = array();
		if($uid){
			$sql  	= "SELECT * FROM luckywheel_itemlog Where uid='$uid' Order By create_time Desc ";
			$rs		= mssql_query($sql, $this->conn);
			while($row	= mssql_fetch_assoc($rs)){
				$data[] = $row;
			}
		}
		return $data;
	}
	
	function getItemInfo($id = 0){
		if($id){
			$sql  	= "SELECT * FROM luckywheel_itemlog Where id=".$id;
			$rs		= mssql_query($sql, $this->conn);
			$row	= mssql_fetch_assoc($rs);
			return $row;
		}
		return false;
	}
	
	function addItemLog($uid = 0, $item_id=0){
		$item_info 		= $GLOBALS['item'][$item_id];
		if(!empty($uid) && !empty($item_id) && !empty($item_info)){
			$datetime 	= date("Y-m-d H:i:s");
			$ip 		= get_ip();
			$conn 		= _db_connect("kira_global",'event_write');
			$sql  		= "INSERT INTO luckywheel_itemlog (uid,item_id,ip,create_time) OUTPUT INSERTED.ID VALUES ('$uid',$item_id,'$ip','$datetime')";
			$rs			= mssql_query($sql, $conn);
			$row		=	mssql_fetch_assoc($rs);
			if(isset($row['ID'])){
				if($item_info['autosend']==true){
					foreach($item_info['ingame_id'] as $key => $value){
						if($item_info['type']=="item"){
							$res = $this->sendItem($uid,$value['id'],$value['num']);
						}
						
						if($item_info['type']=="point"){
							$res = $this->sendPoint($uid,$value['num'],$value['id']);
						}
					}
					if($res){
						$this->updateSendStatus($row['ID']);
					}
				}
				return $row['ID'];
			}
		}
		return false;
	}
	
	function updateSendStatus($id=0){
		if(!empty($id)){
			$conn 		= _db_connect("kira_global",'event_write');
			$sql  		= "UPDATE luckywheel_itemlog SET status = 1 WHERE id=".$id;
			$rs			= mssql_query($sql, $conn);
			return $rs;
		}
		return false;
	}
	
	function getPS4(){
		$date	 	= date("Y-m-d");
		if($date=="2016-08-26"){
			$sql  	= "SELECT * FROM luckywheel_itemlog Where item_id ='21'";
			$rs		= mssql_query($sql, $this->conn);
			$row	= mssql_fetch_assoc($rs);
			if(empty($row))
				return 21;
		}
		
		if($date=="2016-09-05"){
			$sql  	= "SELECT * FROM luckywheel_itemlog Where item_id ='22'";
			$rs		= mssql_query($sql, $this->conn);
			$row	= mssql_fetch_assoc($rs);
			if(empty($row))
				return 22;
		}
		
		if($date=="2016-09-11"){
			$sql  	= "SELECT * FROM luckywheel_itemlog Where item_id ='23'";
			$rs		= mssql_query($sql, $this->conn);
			$row	= mssql_fetch_assoc($rs);
			if(empty($row))
				return 23;
		}
		
		if($date=="2016-09-19" || $date=="2016-09-20"){
			$sql  	= "SELECT * FROM luckywheel_itemlog Where item_id ='24'";
			$rs		= mssql_query($sql, $this->conn);
			$row	= mssql_fetch_assoc($rs);
			if(empty($row))
				return 24;
		}
		return false;
	}
	
	private function sendPoint($uid = 0,$points = 0,$type = "10002"){
		$type_list 		= array("10002","10001","10003");
		if($uid && $points && in_array($type,$type_list)){
			$rbic 		= rbic("kira_global");
			$rbic->type	= $type;
			$rbic->net	= 1;
			$rs			= $rbic->addpoint($this->getOrderno(),$uid,$points,9);
			return $rs['result'];
		}
		return false;
	}
	
	private function sendItem($uid=0,$item_idx=0,$piece=0){
		$data = array();
		if($uid && $item_idx){
			$data	= array(
				"orderno" 	=> $this->getOrderno(),
				"sid" 		=> 1,
				"uid" 		=> $uid,
				"item_idx" 	=> $item_idx,
				"piece" 	=> $piece,
				"create_ip" => get_ip(),
			);
			
			$rbic 	= rbic("kira_global");
			$rs 	= $rbic->sendPrize($data);
			return $rs;
		}
		return false;
	}
	
	private function getOrderno(){
		return '999'.time().rand(1000,9999);
	}
}
?>

