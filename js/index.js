  document.addEventListener("DOMContentLoaded",function(){
            //导航栏样式
							var mySwiper = new Swiper(".list",{								
								slidesPerView : 4,
								slidesOffsetBefore : 15,							
								})
           //轮播图
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
			    //点击切换标题
			    
							var $btn = $(".biaoti span");
									       $btn.eq(0).css("background","white");
									    $btn.on("singleTap",function(){
									    	console.log("aa")
									    	$(this).css("background","white");
									    	$(this).siblings("span").css("background","linear-gradient(to top,white,cornflowerblue)");
									    })
						
	   //房产内容
			    var $section1_1_1 = $(".section1_1_1"); 
			    	function shuju1(res){
					  console.log(res);
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item){
	//			    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
                        $ul.addClass("gundong").appendTo($section1_1_1);
				      }
			    //初始化内容
			 
			 $.ajax({//房产
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d2",
					page:j,
				},
				    success: shuju1
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var j =1;
			    $footer.eq(0).on("singleTap",function(){
			    	j+=1;
			    	$section1_1_1.html("");
			    	$.ajax({//汽车
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d2",
					page:j,
				},
				   success: shuju1
				
			    });
			    
			    })
			    
			    
			    
			    //汽车内容
			    var $section1_2_1 = $(".section1_2_1");  
			    	function shuju2(res){
					  console.log(res);
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
	//			    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        
               $ul.addClass("gundong").appendTo($section1_2_1);
				      }
			    //初始化内容
			 
			 $.ajax({//汽车
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a108b3cdc86cf39001d3",
					page:i,
				},
				    success: shuju2
				     
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
					channelId: "5572a108b3cdc86cf39001d3",
					page:i,
				},
				   success: shuju2
				
			    });
			    
			    })
			    
		
		
		
 //社会内容
			    var $section1_3_1 = $(".section1_3_1");  
			    	function shuju3(res){
					  console.log(res);
					var $ul = $("<div></div>");
				    $.each(res.showapi_res_body.pagebean.contentlist, function(idx,item) {
//				    	if(idx>9)return;
				    	var $li = $("<div></div>");
				    	var $a = $("<a></a>");
				    	$a.addClass("listspan").html(item.title).attr("href",item.link);
				    	$a.appendTo($li);
				    	$li.addClass("listbox").appendTo($ul);
				    });
                        //滚动条
                        $ul.addClass("gundong").appendTo($section1_3_1);
				      }
			    //初始化内容
			 
			 $.ajax({//社会
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a109b3cdc86cf39001da",
					page:k,
				},
				    success: shuju3
				     
			    });
			    //点击切换内容
			    var $footer = $(".footer");
			    var k =1;
			    $footer.eq(2).on("singleTap",function(){
			    	k+=1;
			    	$section1_3_1.html("");
			    	$.ajax({//汽车
				url:"http://apis.baidu.com/showapi_open_bus/channel_news/search_news",
				headers:{
					apikey:"265137c3b6505d92d187829f3fb4565f",
				},
				data:{
					channelId: "5572a109b3cdc86cf39001da",
					page:k,
				},
				   success: shuju3
				
			    });
			    
			    })
	});