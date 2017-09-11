
$(window).load(function() {
	// 此為得獎資料，"priceName"跟"sort"為獎項跟組別，
	// 請將得獎名單與團隊名稱填寫至"teamName"、"teamCompany"、"teamFrom"三處
	var data = {
		"Array" : [
			{},
			{
				"priceName" : "網路人氣獎",
				"h2" : "winner-h2-1",
				"h3" : "winner-h3-1",
				"sort" : "高中職組",
				"teamName" : "文化真理志工團隊",
				"teamCompany" : "出磺口農場",
				"teamFrom" : "真理大學"
			},
			{
				"priceName" : "網路人氣獎",
				"h2" : "winner-h2-1",
				"h3" : "winner-h3-2",
				"sort" : "大專校院組",
				"teamName" : "加倍平安隊",
				"teamCompany" : "創意實業社",
				"teamFrom" : "動物大學"
			},
			{},
			{
				"priceName" : "高中職組",
				"h2" : "winner-h2-2",
				"h3" : "winner-h3-5",
				"sort" : "第三名",
				"teamName" : "第一團隊",
				"teamCompany" : "加倍平安創意實業社",
				"teamFrom" : "東海大學"
			},
			{
				"priceName" : "高中職組",
				"h2" : "winner-h2-2",
				"h3" : "winner-h3-4",
				"sort" : "第二名",
				"teamName" : "第一團隊",
				"teamCompany" : "加倍平安創意實業社",
				"teamFrom" : "東海大學"
			},
			{
				"priceName" : "高中職組",
				"h2" : "winner-h2-2",
				"h3" : "winner-h3-3",
				"sort" : "第一名",
				"teamName" : "第一團隊",
				"teamCompany" : "加倍平安創意實業社",
				"teamFrom" : "東海大學"
			},
			{},
			{
				"priceName" : "大專校院組",
				"h2" : "winner-h2-3",
				"h3" : "winner-h3-5",
				"sort" : "第三名",
				"teamName" : "第一團隊",
				"teamCompany" : "加倍平安創意實業社",
				"teamFrom" : "東海大學"
			},
			{
				"priceName" : "大專校院組",
				"h2" : "winner-h2-3",
				"h3" : "winner-h3-4",
				"sort" : "第二名",
				"teamName" : "第一團隊",
				"teamCompany" : "加倍平安創意實業社",
				"teamFrom" : "東海大學"
			},
			{
				"priceName" : "大專校院組",
				"h2" : "winner-h2-3",
				"h3" : "winner-h3-3",
				"sort" : "第一名",
				"teamName" : "第一團隊",
				"teamCompany" : "加倍平安創意實業社",
				"teamFrom" : "東海大學"
			},
			{
				"priceName" : "高中職組",
				"h2" : "winner-h2-2",
				"h3" : "winner-h3-6",
				"sort" : "佳作一",
				"teamName" : "文化真理志工團隊",
				"teamCompany" : "出磺口農場",
				"teamFrom" : "真理大學"
			},
			{
				"priceName" : "高中職組",
				"h2" : "winner-h2-2",
				"h3" : "winner-h3-7",
				"sort" : "佳作二",
				"teamName" : "文化真理志工團隊",
				"teamCompany" : "出磺口農場",
				"teamFrom" : "真理大學"
			},
			{
				"priceName" : "高中職組",
				"h2" : "winner-h2-2",
				"h3" : "winner-h3-8",
				"sort" : "佳作三",
				"teamName" : "文化真理志工團隊",
				"teamCompany" : "出磺口農場",
				"teamFrom" : "真理大學"
			},
			{
				"priceName" : "高中職組",
				"h2" : "winner-h2-2",
				"h3" : "winner-h3-9",
				"sort" : "佳作四",
				"teamName" : "文化真理志工團隊",
				"teamCompany" : "出磺口農場",
				"teamFrom" : "真理大學"
			},
			{
				"priceName" : "高中職組",
				"h2" : "winner-h2-2",
				"h3" : "winner-h3-10",
				"sort" : "佳作五",
				"teamName" : "文化真理志工團隊",
				"teamCompany" : "出磺口農場",
				"teamFrom" : "真理大學"
			},
			{
				"priceName" : "高中職組",
				"h2" : "winner-h2-2",
				"h3" : "winner-h3-11",
				"sort" : "佳作六",
				"teamName" : "文化真理志工團隊",
				"teamCompany" : "出磺口農場",
				"teamFrom" : "真理大學"
			},
			{
				"priceName" : "大專校院組",
				"h2" : "winner-h2-3",
				"h3" : "winner-h3-6",
				"sort" : "佳作一",
				"teamName" : "文化真理志工團隊",
				"teamCompany" : "出磺口農場",
				"teamFrom" : "真理大學"
			},
			{
				"priceName" : "大專校院組",
				"h2" : "winner-h2-3",
				"h3" : "winner-h3-7",
				"sort" : "佳作二",
				"teamName" : "文化真理志工團隊",
				"teamCompany" : "出磺口農場",
				"teamFrom" : "真理大學"
			},
			{
				"priceName" : "大專校院組",
				"h2" : "winner-h2-3",
				"h3" : "winner-h3-8",
				"sort" : "佳作三",
				"teamName" : "文化真理志工團隊",
				"teamCompany" : "出磺口農場",
				"teamFrom" : "真理大學"
			},
			{
				"priceName" : "大專校院組",
				"h2" : "winner-h2-3",
				"h3" : "winner-h3-9",
				"sort" : "佳作四",
				"teamName" : "文化真理志工團隊",
				"teamCompany" : "出磺口農場",
				"teamFrom" : "真理大學"
			},
			{
				"priceName" : "大專校院組",
				"h2" : "winner-h2-3",
				"h3" : "winner-h3-10",
				"sort" : "佳作五",
				"teamName" : "文化真理志工團隊",
				"teamCompany" : "出磺口農場",
				"teamFrom" : "真理大學"
			},
			{
				"priceName" : "大專校院組",
				"h2" : "winner-h2-3",
				"h3" : "winner-h3-11",
				"sort" : "佳作六",
				"teamName" : "文化真理志工團隊",
				"teamCompany" : "出磺口農場",
				"teamFrom" : "真理大學"
			}

		]
	}

	var type = getData();
	var datail = data.Array[type]
	$(".priceName img").attr("src","images/"+ datail.h2 +".png")
	$(".sort img").attr("src","images/"+ datail.h3 +".png")
	$(".teamName").html(datail.teamName)
	$(".teamCompany").html(datail.teamCompany)
	$(".teamFrom").html(datail.teamFrom)

})
 function getData() {

	  var name = "type";
	  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	  var r = location.search.substr(1).match(reg);
	  // r [ "&ee=34", "&", "34", ""]
	  return r[2]
 }


