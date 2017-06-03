<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=1400, maximum-scale=1.0"/>
	<title>Funmily 歡樂派 - 端午節特別活動</title>
	<link rel="shortcut icon" type="image/x-icon" href="//image-funmily-com.akamaized.net/kira/favicon.ico">
	<link rel="stylesheet" href="//static-funmily-com.akamaized.net/js/wow/animate.css">
	<link rel="stylesheet" href="view/css/index.css">
	<script src="//static-funmily-com.akamaized.net/js/jquery/1.9.1.min.js"></script>
	<script src="//static-funmily-com.akamaized.net/js/jqueryui/custom/tabs.fade.clip.slide.1.10.4.js"></script>
	<script src="//static-funmily-com.akamaized.net/js/wow/main.js"></script>
	<script src="../2017/view/plugin/parallax/parallax.js"></script>
	<script src="view/js/jQueryRotate.min.js"></script>
	<script src="view/js/game.js"></script>
	<script src="view/js/index.js"></script>
</head>

<body id="body" class="wow fadeIn">

	<a class="anchor"></a>

	<div class="black-box-bg" style="display: none"></div>
	<div class="black-box" style="display: none">
		<iframe src="about:blank" frameborder="0" allowtransparency="true"></iframe>
	</div>


	<div class="wrap">

		<? require ("view/_mode/stage.php") ?>
		<div class="top"></div>
		<div class="nav">
			<ul>
				<li class="nav-btn-1">每日簽到</li>
				<li class="nav-btn-2">撈撈樂</li>
				<li class="nav-btn-3">好運轉盤</li>
				<li class="nav-btn-4">禮物兌換</li>
				<li class="nav-btn-5">返回頁首</li>
			</ul>
		</div>
		<div class="content">

			<!-- 活動一 每日簽到 -->
			<h2 class="action-1"><span class="text">每日簽到 粽香情濃</span></h2>
			<div class="action-1 action-bg">
				<h3>活動說明</h3>
				<p>活動期間內，每日登陸活動頁面簽到可以獲得對應數量的粽子，10天都簽到可成功獲得 150 顆粽子唷。活動期間內，總共有 3 次補簽機會，補簽一次，需扣除 50 平台點。</p>
				<h4>還有 3 次補簽機會</h4>
				<ul class="daily">
					<li class="checked">
						<div class="zongzi-box type1">
							<div class="zongzi"></div>
							<div class="me"></div>
						</div>
						<div class="check"></div>
						<div class="days">第一天</div>
					</li>
					<li class="checked">
						<div class="zongzi-box type2">
							<div class="zongzi"></div>
							<div class="me"></div>
						</div>
						<div class="check"></div>
						<div class="days">第二天</div>
					</li>
					<li>
						<div class="zongzi-box type1">
							<div class="zongzi"></div>
							<div class="me"></div>
						</div>
						<div class="check"></div>
						<div class="days">第三天</div>
					</li>
					<li>
						<div class="zongzi-box type2">
							<div class="zongzi"></div>
							<div class="me"></div>
						</div>
						<div class="check"></div>
						<div class="days">第四天</div>
					</li>
					<li>
						<div class="zongzi-box type3">
							<div class="zongzi"></div>
							<div class="me"></div>
						</div>
						<div class="check"></div>
						<div class="days">第五天</div>
					</li>
					<li>
						<div class="zongzi-box type3">
							<div class="zongzi"></div>
							<div class="me"></div>
						</div>
						<div class="check"></div>
						<div class="days">第六天</div>
					</li>
					<li>
						<div class="zongzi-box type1">
							<div class="zongzi"></div>
							<div class="me"></div>
						</div>
						<div class="check"></div>
						<div class="days">第七天</div>
					</li>
					<li>
						<div class="zongzi-box type2">
							<div class="zongzi"></div>
							<div class="me"></div>
						</div>
						<div class="check"></div>
						<div class="days">第八天</div>
					</li>
					<li>
						<div class="zongzi-box type1">
							<div class="zongzi"></div>
							<div class="me"></div>
						</div>
						<div class="check"></div>
						<div class="days">第九天</div>
					</li>
					<li>
						<div class="zongzi-box type2">
							<div class="zongzi"></div>
							<div class="me"></div>
						</div>
						<div class="check"></div>
						<div class="days">第十天</div>
					</li>
				</ul>
				<ul class="btn-box">
					<li class="repair">我要補簽</li>
					<li class="check-in">我要簽到</li>
				</ul>
			</div>

			<!-- 活動二 小遊戲 -->
			<h2 class="action-2"><span class="text">粽飄香 撈撈樂</span></h2>
			<div class="action-2 action-bg">
				<h3>活動說明</h3>
				<p>活動期間內，每個會員登錄活動頁面都有一次撈撈樂遊戲機會，<br>活動時間 30 秒內用網子撈取即可獲得相等的粽子數量。<br>（控制方法：滑鼠控制網子撈粽子。）</p>
				<div class="game-box">
					<div class="game-bg"></div>

					<form>
						<div id="game-scene" class="game-scene">
							<!-- <div class="game-start" onclick="DisableEnable(this.id)">立即開始</div> -->
							<input type=button id="game-start" class="game-title game-start play" onclick="time=document.getElementById('tl').value;DisableEnable(this.id)" value="立即開始">
							<input type=text id="game-over" class="game-title game-over"value="">
							<div id="monster" class="monster m1"></div>
							<div id="monster" class="monster m2"></div>
							<div id="monster" class="monster m3"></div>
							<div id="monster" class="monster m4"></div>
							<div id="monster" class="monster m5"></div>
							<div id="monster" class="monster m6"></div>
							<div id="monster" class="monster m7"></div>
							<div id="monster" class="monster m8"></div>
							<div id="monster" class="monster m9"></div>
							<div id="monster" class="monster m10"></div>
							<div id="monster" class="monster m11"></div>
							<div id="monster" class="monster m12"></div>
							<div id="monster" class="monster m13"></div>
							<div id="monster" class="monster m14"></div>
							<div id="monster" class="monster m15"></div>

							<div class="score-panel">
								<span class="score">得分：<input type="text" id="score" value="0"></span>
								<span class="time">剩餘時間：<input type="text" id="tl" value="30000">秒</span>
							</div>
							<div id="sight" class="weapon"></div>
						</div>
					</form>
				</div>

			</div>

			<!-- 活動三 轉盤 -->
			<h2 class="action-3"><span class="text">粽香傳千里  好運轉不完</span></h2>
			<div class="action-3 action-bg">
				<h3>活動說明</h3>
				<p>活動期間內，每日登錄活動頁點擊立即儲值即可獲得一次轉盤機會。<br>儲值金額不限 ，每日只限玩一次。</p>
				<div class="loop-box">
					<div class="loop-bg"></div>
					<div class="loop-bg-move"></div>
					<div class="wheel">
						<div class="wheel-bg"></div>
						<img class="pointer active" src="https://image.funmily.com/event/dragon-boat-festival/2017/loop/pointer.png" alt="pointer">
						<div class="start"></div>
						<a href="#wheel-disc" class="wheel-button"></a>
					</div>
				</div>
				<div class="pay btn"><a href="#">我要儲值</a></div>
				<div class="table-bg">
					<table>
						<tr>
							<th>日期</th>
							<th>物品</th>
						</tr>
						<tr>
							<td>2017-05-12</td>
							<td>粽子 x 85</td>
						</tr>
						<tr>
							<td>2017-05-12</td>
							<td>粽子 x 85</td>
						</tr>
						<tr>
							<td>2017-05-12</td>
							<td>粽子 x 85</td>
						</tr>

					</table>
				</div>

			</div>


			<!-- 活動四 兌換獎勵 -->
			<h2 class="action-4"><span class="text">包粽好禮兌換送</span></h2>
			<div class="action-4 action-bg">
				<h3>活動說明</h3>
				<p>活動期間，每個會員可將獲得的粽子，進行兌換下列禮包。<br>（注意：超值虛寶，只限顯示在清單內的遊戲。）</p>
				<div class="gift-detail-anchor"></div>
				<ul class="gift">
					<li class="gift-1">
						<div class="gift-bg">
							<div class="box"></div>
						</div>
						<div class="gift-name">超值虛寶包</div>
						<div class="price"></div>
					</li>
					<li class="gift-2">
						<div class="gift-bg">
							<div class="box"></div>
						</div>
						<div class="gift-name">VIP 積分好康包</div>
						<div class="price"></div>
					</li>
					<li class="gift-3">
						<div class="gift-bg">
							<div class="box"></div>
						</div>
						<div class="gift-name">平台點歡樂包</div>
						<div class="price"></div>
					</li>
					<li class="gift-4">
						<div class="gift-bg">
							<div class="box"></div>
						</div>
						<div class="gift-name">My Card 驚喜包</div>
						<div class="price"></div>
					</li>
				</ul>

				<div class="gift-detail-box">

					<ul class="game-type">
						<li class="mobile-game"><span>手機遊戲</span></li>
						<li class="web-game"><span>網頁遊戲</span></li>
					</ul>

					<div class="game-select-box">
						<h3>選擇遊戲</h3>
						<div class="game-select">
							<select class="game-mobile select" data-game>
								<option value="osw">天使學園之我的專屬女神</option>
								<option value="mfa">我的黑手黨男神</option>
							</select>
							<select class="game-web" data-game>
								<option value="wt">武極天下</option>
								<option value="sbjj">雄霸九州</option>
								<option value="xyp">破壞神</option>
								<option value="syu">仙域</option>
							</select>
						</div>
					</div>
					<div class="gift-detail-anchor2"></div>
					<h3>虛寶內容</h3>
					<div class="gift-detail table-bg">
						<table class="select" data-geme-osw>
							<tr>
								<th style="width: 65%;">物品名稱</th>
								<th>數量</th>
							</tr>
							<tr>
								<td>衣櫥</td>
								<td class="right">5</td>
							</tr>
							<tr>
								<td>特級全餐</td>
								<td class="right">5</td>
							</tr>
						</table>
						<table data-geme-mfa>
							<tr>
								<th style="width: 65%;">物品名稱</th>
								<th>數量</th>
							</tr>
							<tr>
								<td>衣櫥</td>
								<td class="right">5</td>
							</tr>
							<tr>
								<td>甜點套餐</td>
								<td class="right">5</td>
							</tr>
						</table>
						<table data-geme-wt>
							<tr>
								<th style="width: 65%;">物品名稱</th>
								<th>數量</th>
							</tr>
							<tr>
								<td>初級生命補充包</td>
								<td class="right">10</td>
							</tr>
							<tr>
								<td>中級靈力丹</td>
								<td class="right">5</td>
							</tr>
							<tr>
								<td>1.5倍經驗卡</td>
								<td class="right">10</td>
							</tr>
							<tr>
								<td>2倍經驗卡</td>
								<td class="right">6</td>
							</tr>
							<tr>
								<td>100綁定元寶卡</td>
								<td class="right">5</td>
							</tr>
						</table>
						<table data-geme-sbjj>
							<tr>
								<th style="width: 65%;">物品名稱</th>
								<th>數量</th>
							</tr>
							<tr>
								<td>五銖 x 1000000</td>
								<td class="right">1</td>
							</tr>
							<tr>
								<td>高級武將丹</td>
								<td class="right">50</td>
							</tr>
							<tr>
								<td>銀錠 x 20000</td>
								<td class="right">1</td>
							</tr>
							<tr>
								<td>魂石</td>
								<td class="right">10</td>
							</tr>
							<tr>
								<td>名將碎片寶箱</td>
								<td class="right">30</td>
							</tr>
						</table>
						<table data-geme-dor>
							<tr>
								<th style="width: 65%;">物品名稱</th>
								<th>數量</th>
							</tr>
							<tr>
								<td>幸運符</td>
								<td class="right">10</td>
							</tr>
							<tr>
								<td>超大銀幣袋</td>
								<td class="right">50</td>
							</tr>
							<tr>
								<td>冰霜寒龍戒碎片</td>
								<td class="right">6</td>
							</tr>
							<tr>
								<td>100 枚綁定金幣</td>
								<td class="right">5</td>
							</tr>
						</table>
						<table data-geme-xyp>
							<tr>
								<th style="width: 65%;">物品名稱</th>
								<th>數量</th>
							</tr>
							<tr>
								<td>裝備升星石</td>
								<td class="right">20</td>
							</tr>
							<tr>
								<td>覺醒技能書寶箱</td>
								<td class="right">1</td>
							</tr>
							<tr>
								<td>綁定元寶</td>
								<td class="right">200</td>
							</tr>
						</table>
						<table data-geme-syu>
							<tr>
								<th style="width: 65%;">物品名稱</th>
								<th>數量</th>
							</tr>
							<tr>
								<td>天泣機緣禮包</td>
								<td class="right">10</td>
							</tr>
							<tr>
								<td>神秘中級之靈</td>
								<td class="right">1</td>
							</tr>
							<tr>
								<td>神秘潛能丹</td>
								<td class="right">1</td>
							</tr>
							<tr>
								<td>神將進階丹</td>
								<td class="right">10</td>
							</tr>
							<tr>
								<td>5倍經驗藥</td>
								<td class="right">2</td>
							</tr>
						</table>
						<table data-geme-vip>
							<tr>
								<th style="width: 65%;">物品名稱</th>
								<th>數量</th>
							</tr>
							<tr>
								<td>歡樂派 VIP 積分</td>
								<td class="right">50點</td>
							</tr>
						</table>
						<table data-geme-funmily>
							<tr>
								<th style="width: 65%;">物品名稱</th>
								<th>數量</th>
							</tr>
							<tr>
								<td>歡樂派平台點數</td>
								<td class="right">100點</td>
							</tr>
						</table>
						<table data-geme-mycard>
							<tr>
								<th style="width: 65%;">物品名稱</th>
								<th>數量</th>
							</tr>
							<tr>
								<td>My Card 點數</td>
								<td class="right">150點</td>
							</tr>
						</table>
					</div>

					<div class="exchange btn"><a href="#">立即兌換</a></div>
				</div>

			</div>

		</div>
	</div>

	<? require ("_mode/footer.php") ?>

</body>
</html>
