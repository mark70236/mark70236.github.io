$(function() {

	blackBox ()

	// 跳窗及頁尾模組
	$("body").prepend('<b class="black-box-bg"></b><div class="black-box-body coming-soon" style="display: none"><b class="close">×</b></div>')

	// 初始標記
	$("[data-menu='update']").parent().addClass("hover")
	$("[data-nav='update'] [data-target='1']").parent().addClass("hover")

	// 切換活動或改版內容
	$(".menu a").click(function() { $this = $(this)
		var target = $this.attr("data-menu")
		$(".menu li").removeClass("hover")
		$this.parent().addClass("hover")
		$("[data-nav]").hide("fade")
		$("[data-nav='" + target +"']").show("fade")
	})

	// 主導覽列
	$(".nav [data-target]").click(function() { $this = $(this)
		var target = $this.attr("data-target"),
			type = $this.parent().parent().attr("data-nav")
		$(".nav li").removeClass("hover")
		$this.parent().addClass("hover")

		$(".detail:visible").hide(400,function(){
			$("#" + type  + target).show(400)
			// $.get("_data" + "/" + type + "/" + target + ".php", function(data) {
			// 	$(".content .detail").html(data).show(400)
			// })
		})

		// HASH
		var filename = window.location.pathname + "#" + type + "-" + target
		var state = { href: filename }
		if ( typeof history.pushState !== "undefined") { history.pushState(state, document.title, state.href) }
		ga('send', 'pageview', '/event.php?go=1#' + type + '-' + target)

	})

	// 切頁效果
	var url = document.URL
	if (url.indexOf("#") != -1) {
		var	anchor = url.substring(url.indexOf("#")+1),
			anchorType = anchor.split("-")[0],
			anchorTarget = anchor.split("-")[1]

		$("[data-nav]").hide()
		$("[data-menu]").parent().removeClass("hover")
		$("[data-menu='" + anchorType + "']").parent().addClass("hover")
		$("[data-nav='" + anchorType +"']").show()
		$("[data-nav='" + anchorType +"'] [data-target='" + anchorTarget +"']").click()

	}

	// FullPage
	$(document).ready(function(){
		$("#demosMenu").change(function(){
		  window.location.href = $(this).find("option:selected").attr("id") + '.html';});
	});

})
