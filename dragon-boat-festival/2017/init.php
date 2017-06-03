<?php
error_reporting(E_ERROR | E_PARSE);

require_once("RAF/V100/RAF.php");
require_once("_dbconn.php");
require_once("Libs/App.class.php");
require_once("rbic/funmily/init.php");

session_start();
$GLOBALS['sdate']		= "2017-02-23 00:00:00";
$GLOBALS['edate']		= "2017-09-20 23:59:59";
$GLOBALS['APP_ID']		= "1659874794283824";

$GLOBALS['item'] = array(

	"1" => array(
		"name" 		=> "粽子 x 35",
		"random" 	=> "4",
		"ingame_id"	=> array(array("id"=>"39","num"=>"30")),
		"autosend"	=> true,
		"type"		=> "item",
	),
	"2" => array(
		"name" 		=> "粽子 x 56",
		"random" 	=> "4",
		"ingame_id"	=> array(array("id"=>"39","num"=>"30")),
		"autosend"	=> true,
		"type"		=> "item",
	),
	"3" => array(
		"name" 		=> "粽子 x 20",
		"random" 	=> "10",
		"ingame_id"	=> array(array("id"=>"191","num"=>"1")),
		"autosend"	=> true,
		"type"		=> "item",
	),
	"4" => array(
		"name" 		=> "粽子 x 62",
		"random" 	=> "17",
		"ingame_id"	=> array(array("id"=>"10003","num"=>"5000")),
		"autosend"	=> true,
		"type"		=> "point",
	),
	"5" => array(
		"name" 		=> "粽子 x 48",
		"random" 	=> "15",
		"ingame_id"	=> array(array("id"=>"10001","num"=>"10000")),
		"autosend"	=> true,
		"type"		=> "point",
	),
	"6" => array(
		"name" 		=> "粽子 x 85",
		"random" 	=> "15",
		"ingame_id"	=> array(array("id"=>"10001","num"=>"5000")),
		"autosend"	=> true,
		"type"		=> "point",
	),
	"7" => array(
		"name" 		=> "粽子 x 70",
		"random" 	=> "5",
		"ingame_id"	=> array(array("id"=>"10002","num"=>"300")),
		"autosend"	=> true,
		"type"		=> "point",
	),
	"8" => array(
		"name" 		=> "粽子 x 12",
		"random" 	=> "3",
		"ingame_id"	=> array(array("id"=>"10002","num"=>"1000")),
		"autosend"	=> true,
		"type"		=> "point",
	),

);

?>