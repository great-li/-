define(['../thirdplugins/jquery'],function(){
	return {
		data:!function(){
			//详情页数据
		var $index=location.search.split('=')[1]
		//console.log($index)
		$.ajax({
			url:"http://10.31.162.20/js/dangdang/php/details.php",
			type:"post",
			dataType:"json",
		}).done(function(d){
			//console.log(d[$index]);
				var textarr=d[$index].guangtext.split(',');
				var picarr=d[$index].guangpic.split(',');
				var urlarr=d[$index].url2.split(',');
				//console.log($index);
				//console.log(textarr);
				//console.log(picarr);
				//大图 小图
				$('.spic').find('img').attr('src',d[$index].url1)
				$('.bpic').attr('src',d[$index].url1)
				//ulist
				var $fdjstr="<ul>"
			$.each(urlarr, function(index,value) {
				$fdjstr+='<li><img src="'+urlarr[index]+'">'
			});
			$fdjstr+="</ul>";
			$('.ulist').html($fdjstr);
			//标题
			var $titletop=''
			$titletop+='<a href="#" class="d-name"><b>图书</b></a><a href="#" class="detils-style">'+d[$index].title1+'</a><span>></span><a href="#" class="d-shiyong">'+d[$index].title2+'</a><span>></span><span class="detailes-nr">'+d[$index].title3+'</span><span>...</span>'
			$('.details-title').html($titletop);
			//大标题
			var $bigtitle='';
			$bigtitle+='<h1><img src="http://product.dangdang.com/images/icon_ddzy.png">'+d[$index].title3+'</h1><h2>'+d[$index].decoratio+'<h2>'
			$('.sale-title').html($bigtitle);
			//作者
			var $zuozhe='<a>'+d[$index].name+'</a>'
			$('.jieshoou1').append($zuozhe);
			//出版社
			var $chuban='<a>'+d[$index].chuban+'</a>'
			$('.jieshoou2').append($chuban);
			//价格
			var $rol='<span>￥</span>'+d[$index].rol+''
			$('.dd-price').html($rol);
			
			var $ago='<span>￥</span>'+d[$index].ago+''
			$('.price-zz').html($ago);
			
			
			//关联商品部分
			var $guanstr='<ul class="all-shopping">'
			$.each(textarr, function(index,value) {
				$guanstr+='<li><a href="javascript:;"><img src="'+picarr[index]+'"><span>'+textarr[index]+'</span></a></li>'
			});
			$guanstr+='</ul>'
			$('.info-all').html($guanstr)
			
			//商标
			$('.box-right').html('<a href="#"><img src="'+d[$index].shaobiao+'"></a>')
			var $shantitle=''
			$shantitle+='<a href="#">'+d[$index].sgaotitle+'</a><span class="title-name"><span class="dangdnag-img"></span><span class="dangdnagziy"> 当当自营</span></span> '
			$('.box-title').html($shantitle);

			//加价换购
			var $jiaarr='<li>';
			$jiaarr+='<a href="#" class="kong"></a><a href="#" class="huanggou">'+d[$index].jiajia+'</a>'
			$jiaarr+='</li>'
			$('.list-e').html($jiaarr);	
		})
		}()
	}
})
		
	
		
		

	

