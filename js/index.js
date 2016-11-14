  document.addEventListener("DOMContentLoaded",function(){
//		   	   $.ajax({//加载导航栏
//				url:"http://apis.baidu.com/showapi_open_bus/channel_news/channel_news",
//				     
//				headers:{
//					apikey:"265137c3b6505d92d187829f3fb4565f",
//				},
//				data:{
////					"channelId": "5572a109b3cdc86cf39001db",
//				},
//				success:function(res){
//					console.log(res);
//				        var $box1 = $(".nav_list");
//						var $box = $("<div></div>");
//						$box.addClass("swiper-container list");
//						var $ul= $("<div></div>");
//							$.each(res.showapi_res_body.channelList,function(idx,item){	
//								if(idx>9)return;
//									var $li= $("<div></div>");
//									
//									
//									$.ajax({
//									
//										url:"js/index.json",
//										dataType:"json",
//										success:function(res){
//											console.log(res);
//											$.each(res,function(idx,item1){	
//												$a = $("<a></a>");
//												$a.html(item.name);
//												$a.attr("href",item1.href);
//												$a.css({"color":"white"},{"font-weiget":"100"}).appendTo($li);
//											})
//										}
//									});
//									
//									$li.addClass("swiper-slide").css({"color":"blue"}).appendTo($ul);
//									$ul.addClass("swiper-wrapper").appendTo($box);		
//                $box.appendTo($box1);
//							})
							var mySwiper = new Swiper(".list",{
								
								slidesPerView : 4,
								slidesOffsetBefore : 15,
								
								})
//				      }
//			    });
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
		
	            $.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001d2",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_1 = $(".section1_1");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
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
			    
			 $.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a108b3cdc86cf39001d3",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_2 = $(".section1_2");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_2);
				      }
			    });
			    
			    
			  $.ajax({
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					"channelId": "5572a109b3cdc86cf39001da",
				},
				success:function(res){
					console.log(res.showapi_res_body.pagebean.contentlist);
					var $section1_3 = $(".section1_3");
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.appendTo($section1_3);
				      }
			    });
			    var $btn = $(".biaoti span");
			       $btn.eq(0).css("background","white");
			    $btn.on("singleTap",function(){
			    	$(this).css("background","white");
			    	$(this).siblings("span").css("background","linear-gradient(to top,white,cornflowerblue)");
			    })
		 })
		   	  
		  