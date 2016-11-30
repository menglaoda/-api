


function luobo(){
	var mySwiper = new Swiper('.li', {
			    	slidesPerView : 1,
			    	loop:true,//无缝滑动
					autoplay: 2000,//可选选项，自动滑动
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
	                var $section1_1_1 = $(".section1_1_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
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
                        
                        $ul.addClass("gundong").appendTo($section1_1_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001cd",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(0).on("singleTap",function(){
			    	i+=1;
			    	$section1_1_1.html("");
			    	$.ajax({//汽车
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001cd",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}
function fn2(){//国内焦点，中国新闻网提供
		var $section1_2_1 = $(".section1_2_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
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
                        
                        $ul.addClass("gundong").appendTo($section1_2_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001cd",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(1).on("singleTap",function(){
			    	i+=1;
			    	$section1_2_1.html("");
			    	$.ajax({//汽车
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001cd",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}
function fn3(){//国内焦点，新华网提供
		var $section1_3_1 = $(".section1_3_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
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
                        
                        $ul.addClass("gundong").appendTo($section1_3_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001cd",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(2).on("singleTap",function(){
			    	i+=1;
			    	$section1_3_1.html("");
			    	$.ajax({//汽车
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001cd",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}
function fn4(){//国际焦点，新浪提供
	                var $section1_1_1 = $(".section1_1_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
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
                        
                        $ul.addClass("gundong").appendTo($section1_1_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001ce",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(0).on("singleTap",function(){
			    	i+=1;
			    	$section1_1_1.html("");
			    	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001ce",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}

function fn5(){//国际焦点，环球网提供
		var $section1_2_1 = $(".section1_2_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
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
                        
                        $ul.addClass("gundong").appendTo($section1_2_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001ce",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(1).on("singleTap",function(){
			    	i+=1;
			    	$section1_2_1.html("");
			    	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001ce",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}

function fn6(){//国际焦点，环球网提供
		var $section1_3_1 = $(".section1_3_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
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
                        
                        $ul.addClass("gundong").appendTo($section1_3_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001ce",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(2).on("singleTap",function(){
			    	i+=1;
			    	$section1_3_1.html("");
			    	$.ajax({//汽车
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001ce",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}
function fn7(){//军事焦点，环球网提供
	                var $section1_1_1 = $(".section1_1_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
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
                        
                        $ul.addClass("gundong").appendTo($section1_1_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001cf",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(0).on("singleTap",function(){
			    	i+=1;
			    	$section1_1_1.html("");
			    	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001cf",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}

function fn8(){//军事焦点，中国青年网提供
		var $section1_2_1 = $(".section1_2_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
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
                        
                        $ul.addClass("gundong").appendTo($section1_2_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001cf",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(1).on("singleTap",function(){
			    	i+=1;
			    	$section1_2_1.html("");
			    	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001cf",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}

function fn9(){//军事焦点，光明网提供
		var $section1_3_1 = $(".section1_3_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
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
                        
                        $ul.addClass("gundong").appendTo($section1_3_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001cf",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(2).on("singleTap",function(){
			    	i+=1;
			    	$section1_3_1.html("");
			    	$.ajax({//汽车
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001cf",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}
function fn10(){//财经焦点，环球网提供
	                var $section1_1_1 = $(".section1_1_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
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
                        
                        $ul.addClass("gundong").appendTo($section1_1_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d0",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(0).on("singleTap",function(){
			    	i+=1;
			    	$section1_1_1.html("");
			    	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d0",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}

function fn11(){//财经焦点，新华网提供
		var $section1_2_1 = $(".section1_2_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
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
                        
                        $ul.addClass("gundong").appendTo($section1_2_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d0",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(1).on("singleTap",function(){
			    	i+=1;
			    	$section1_2_1.html("");
			    	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d0",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}

function fn12(){//财经焦点，中国网提供
		var $section1_3_1 = $(".section1_3_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
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
                        
                        $ul.addClass("gundong").appendTo($section1_3_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d0",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(2).on("singleTap",function(){
			    	i+=1;
			    	$section1_3_1.html("");
			    	$.ajax({//汽车
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d0",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}
function fn13(){//互联网焦点，TechWeb提供
	                var $section1_1_1 = $(".section1_1_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="TechWeb")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.addClass("gundong").appendTo($section1_1_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d1",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(0).on("singleTap",function(){
			    	i+=1;
			    	$section1_1_1.html("");
			    	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
				    channelId: "5572a108b3cdc86cf39001d1",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}

function fn14(){//互联网焦点，新浪提供
		var $section1_2_1 = $(".section1_2_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
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
                        
                        $ul.addClass("gundong").appendTo($section1_2_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d1",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(1).on("singleTap",function(){
			    	i+=1;
			    	$section1_2_1.html("");
			    	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d1",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}

function fn15(){//互联网焦点，搜狐提供
		var $section1_3_1 = $(".section1_3_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
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
                        
                        $ul.addClass("gundong").appendTo($section1_3_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d1",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(2).on("singleTap",function(){
			    	i+=1;
			    	$section1_3_1.html("");
			    	$.ajax({//汽车
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d1",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}
function fn16(){//房产焦点，新华网提供
	                var $section1_1_1 = $(".section1_1_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
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
                        
                        $ul.addClass("gundong").appendTo($section1_1_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d2",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(0).on("singleTap",function(){
			    	i+=1;
			    	$section1_1_1.html("");
			    	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
				    channelId: "5572a108b3cdc86cf39001d2",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}

function fn17(){//房产焦点，搜狐提供
		var $section1_2_1 = $(".section1_2_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="搜狐")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("gundong").addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_2_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d2",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(1).on("singleTap",function(){
			    	i+=1;
			    	$section1_2_1.html("");
			    	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d2",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}

function fn18(){//房产焦点，中国经济网提供
		var $section1_3_1 = $(".section1_3_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="中国经济网")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.addClass("gundong").appendTo($section1_3_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d2",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(2).on("singleTap",function(){
			    	i+=1;
			    	$section1_3_1.html("");
			    	$.ajax({//
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d2",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}
function fn19(){//汽车焦点，新华网提供
	                var $section1_1_1 = $(".section1_1_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
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
                        
                        $ul.addClass("gundong").appendTo($section1_1_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d3",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(0).on("singleTap",function(){
			    	i+=1;
			    	$section1_1_1.html("");
			    	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
				    channelId: "5572a108b3cdc86cf39001d3",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}

function fn20(){//汽车焦点，中国新闻网网提供
		var $section1_2_1 = $(".section1_2_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
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
                        
                        $ul.addClass("gundong").appendTo($section1_2_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d3",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(1).on("singleTap",function(){
			    	i+=1;
			    	$section1_2_1.html("");
			    	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d3",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}

function fn21(){//汽车焦点，环球网提供
		var $section1_3_1 = $(".section1_3_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
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
                        
                        $ul.addClass("gundong").appendTo($section1_3_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d3",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(2).on("singleTap",function(){
			    	i+=1;
			    	$section1_3_1.html("");
			    	$.ajax({//
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d3",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}
function fn22(){//体育焦点，新浪提供
	                var $section1_1_1 = $(".section1_1_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
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
                        
                        $ul.addClass("gundong").appendTo($section1_1_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d4",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(0).on("singleTap",function(){
			    	i+=1;
			    	$section1_1_1.html("");
			    	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
				   channelId: "5572a108b3cdc86cf39001d4",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}

function fn23(){//体育焦点，环球网提供
		var $section1_2_1 = $(".section1_2_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
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
                        
                        $ul.addClass("gundong").appendTo($section1_2_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d4",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(1).on("singleTap",function(){
			    	i+=1;
			    	$section1_2_1.html("");
			    	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d4",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}

function fn24(){//体育焦点，搜狐提供
		var $section1_3_1 = $(".section1_3_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
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
                        
                        $ul.addClass("gundong").appendTo($section1_3_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d4",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(2).on("singleTap",function(){
			    	i+=1;
			    	$section1_3_1.html("");
			    	$.ajax({//
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d4",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}
function fn25(){//娱乐焦点，新华网提供
	                var $section1_1_1 = $(".section1_1_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
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
                        
                        $ul.addClass("gundong").appendTo($section1_1_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d5",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(0).on("singleTap",function(){
			    	i+=1;
			    	$section1_1_1.html("");
			    	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
				   channelId: "5572a108b3cdc86cf39001d5",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}

function fn26(){//娱乐焦点，千龙提供
		var $section1_2_1 = $(".section1_2_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="千龙")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.addClass("gundong").appendTo($section1_2_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d5",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(1).on("singleTap",function(){
			    	i+=1;
			    	$section1_2_1.html("");
			    	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d5",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}

function fn27(){//娱乐焦点，中国青年网提供
		var $section1_3_1 = $(".section1_3_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
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
                        
                        $ul.addClass("gundong").appendTo($section1_3_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d5",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(2).on("singleTap",function(){
			    	i+=1;
			    	$section1_3_1.html("");
			    	$.ajax({//
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d5",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}
function fn28(){//游戏焦点，腾讯网提供
	                var $section1_1_1 = $(".section1_1_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="腾讯网")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.addClass("gundong").appendTo($section1_1_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d6",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(0).on("singleTap",function(){
			    	i+=1;
			    	$section1_1_1.html("");
			    	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
				   channelId: "5572a108b3cdc86cf39001d6",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}

function fn29(){//游戏焦点，4399提供
		var $section1_2_1 = $(".section1_2_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="4399")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.addClass("gundong").appendTo($section1_2_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d6",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(1).on("singleTap",function(){
			    	i+=1;
			    	$section1_2_1.html("");
			    	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d6",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}

function fn30(){//游戏焦点，17173提供
		var $section1_3_1 = $(".section1_3_1"); 
			    	function shuju1(res){
					 console.log(res.showapi_res_body.pagebean.contentlist);
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(item.source !="17173")return ;
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.addClass("gundong").appendTo($section1_3_1);
				      }
			 //初始化   	
	$.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d6",
					page:i,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var i =1;
			    $footer.eq(2).on("singleTap",function(){
			    	i+=1;
			    	$section1_3_1.html("");
			    	$.ajax({//
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d6",
					page:i,
				},
				   success: shuju1
				
			    });
			    
			    })
}