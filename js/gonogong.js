


function luobo(){
	var mySwiper = new Swiper('.li', {
			    	slidesPerView : 1,
			    	loop:true,//无缝滑动
					autoplay: 1000,//可选选项，自动滑动
					prevButton:'.swiper-button-prev',//上一张
					nextButton:'.swiper-button-next',//下一张
				   pagination: '.swiper-pagination',//1，2，3，4，5
					 paginationClickable: true,
					  paginationBulletRender: function (swiper, index, className) {
					      return '<span class="' + className + '">' + (index + 1) + '</span>';
					  }
				})
}
function dianji(){
	var $btn = $(".biaoti span");
			       $btn.eq(0).css("background","white");
			    $btn.on("singleTap",function(){
			    	$(this).css("background","white");
			    	$(this).siblings("span").css("background","linear-gradient(to top,white,cornflowerblue)");
			    })
}
function fn1(){//国内焦点，新浪提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001cd",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_1 = $(".section1_1");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="新浪")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_1);
				      }
			    });
}
function fn2(){//国内焦点，中国新闻网提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001cd",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_2 = $(".section1_2");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="中国新闻网")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_2);
				      }
			    });
}
function fn3(){//国内焦点，新华网提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001cd",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_3 = $(".section1_3");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="新华网")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_3);
				      }
			    });
}
function fn4(){//国际焦点频道，新浪提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001ce",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_1 = $(".section1_1");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="新浪")return ;
				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_1);
				      }
			    });
}

function fn5(){//国际焦点频道，环球网
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001ce",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_2 = $(".section1_2");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="环球网")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_2);
				      }
			    });
}

function fn6(){//国际焦点频道，光明网提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001ce",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_3 = $(".section1_3");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="光明网")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_3);
				      }
			    });
}
function fn7(){//军事焦点频道，人民网提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001cf",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_1 = $(".section1_1");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="人民网")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_1);
				      }
			    });
}
function fn8(){//军事焦点频道，中国青年网提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001cf",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_2 = $(".section1_2");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="中国青年网")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_2);
				      }
			    });
}
function fn9(){//军事焦点频道，光明网提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001cf",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_3 = $(".section1_3");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="光明网")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_3);
				      }
			    });
}
function fn10(){//财经焦点频道，环球网提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001d0",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_1 = $(".section1_1");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="环球网")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_1);
				      }
			    });
}
function fn11(){//财经焦点频道，新华网提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001d0",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_2 = $(".section1_2");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="新华网")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_2);
				      }
			    });
}
function fn12(){//财经焦点频道，中国网提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001d0",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_3 = $(".section1_3");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="中国网")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_3);
				      }
			    });
}
function fn13(){//互联网焦点频道，TechWeb网提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001d1",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_1 = $(".section1_1");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="TechWeb")return ;
				    	if(idx>15)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_1);
				      }
			    });
}
function fn14(){//互联网焦点频道，新浪网提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001d1",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_2 = $(".section1_2");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="新浪")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_2);
				      }
			    });
}
function fn15(){//互联网焦点频道，搜狐网提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001d1",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_3 = $(".section1_3");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="搜狐")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_3);
				      }
			    });
}
function fn16(){//房产焦点频道，新华网提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001d2",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_1 = $(".section1_1");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="新华网")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_1);
				      }
			    });
}
function fn17(){//房产焦点频道，搜狐网提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001d2",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_2 = $(".section1_2");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="搜狐")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_2);
				      }
			    });
}
function fn18(){//房产焦点频道，大众网提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001d2",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_3 = $(".section1_3");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="大众网")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_3);
				      }
			    });
}
function fn19(){//汽车焦点频道，新华网提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001d3",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_1 = $(".section1_1");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="新华网")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_1);
				      }
			    });
}
function fn20(){//汽车焦点频道，中国新闻网提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001d3",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_2 = $(".section1_2");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="中国新闻网")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_2);
				      }
			    });
}
function fn21(){//汽车焦点频道，环球网提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001d3",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_3 = $(".section1_3");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="环球网")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_3);
				      }
			    });
}
function fn22(){//体育焦点频道，新浪网提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001d4",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_1 = $(".section1_1");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="新浪")return ;
				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_1);
				      }
			    });
}
function fn23(){//体育焦点频道，环球网提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001d4",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_3 = $(".section1_3");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="环球网")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_3);
				      }
			    });
}
function fn24(){//体育焦点频道，环球网提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001d4",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_3 = $(".section1_3");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="搜狐网")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_3);
				      }
			    });
}
function fn25(){//娱乐焦点频道，中国青年网提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001d5",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_1 = $(".section1_1");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="中国青年网")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_1);
				      }
			    });
}
function fn26(){//娱乐焦点频道，国际在线提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001d5",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_2 = $(".section1_2");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="国际在线")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_2);
				      }
			    });
}
function fn27(){//娱乐焦点频道，搜狐提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001d5",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_3 = $(".section1_3");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="搜狐")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_3);
				      }
			    });
}
function fn28(){//游戏焦点频道，新浪提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001d6",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_1 = $(".section1_1");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="新浪")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_1);
				      }
			    });
}
function fn29(){//游戏焦点频道，PCHOME提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001d6",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_2 = $(".section1_2");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="PCHOME")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_2);
				      }
			    });
}
function fn30(){//娱乐焦点频道，中关村在线提供
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001d6",
					"page":"2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_3 = $(".section1_3");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="中关村在线")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_3);
				      }
			    });
}