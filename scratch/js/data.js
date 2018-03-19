
$(window).load(function() {
	var data = {
		"Array" : [
			{},
			{
				"priceName" : "網路人氣獎",
				"sort" : "高中職組",
				"teamName" : "文化真理志工團隊",
				"teamCompany" : "出磺口農場",
				"teamFrom" : "真理大學"
			},
			{
				"priceName" : "網路人氣獎",
				"sort" : "大專校院組",
				"teamName" : "加倍平安隊",
				"teamCompany" : "創意實業社",
				"teamFrom" : "動物大學"
			},
			{
				"priceName" : "高中職組",
				"sort" : "佳作",
				"teamName" : "文化真理志工團隊",
				"teamCompany" : "出磺口農場",
				"teamFrom" : "真理大學"
			},
			{
				"priceName" : "高中職組",
				"sort" : "第三名",
				"teamName" : "第一團隊",
				"teamCompany" : "加倍平安創意實業社",
				"teamFrom" : "東海大學"
			},
			{
				"priceName" : "高中職組",
				"sort" : "第二名",
				"teamName" : "第一團隊",
				"teamCompany" : "加倍平安創意實業社",
				"teamFrom" : "東海大學"
			},
			{
				"priceName" : "高中職組",
				"sort" : "第一名",
				"teamName" : "第一團隊",
				"teamCompany" : "加倍平安創意實業社",
				"teamFrom" : "東海大學"
			},
			{
				"priceName" : "大專校院組",
				"sort" : "佳作",
				"teamName" : "文化真理志工團隊",
				"teamCompany" : "出磺口農場",
				"teamFrom" : "真理大學"
			},
			{
				"priceName" : "大專校院組",
				"sort" : "第三名",
				"teamName" : "第一團隊",
				"teamCompany" : "加倍平安創意實業社",
				"teamFrom" : "東海大學"
			},
			{
				"priceName" : "大專校院組",
				"sort" : "第二名",
				"teamName" : "第一團隊",
				"teamCompany" : "加倍平安創意實業社",
				"teamFrom" : "東海大學"
			},
			{
				"priceName" : "大專校院組",
				"sort" : "第一名",
				"teamName" : "第一團隊",
				"teamCompany" : "加倍平安創意實業社",
				"teamFrom" : "東海大學"
			},

		]
	}

	var type = getData();
	var datail = data.Array[type]
	$(".priceName").html(datail.priceName)
	$(".sort").html(datail.sort)
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


