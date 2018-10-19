define(['../thirdplugins/jquery'],function(){
	return {
		//头部尾部
		header:!function(){
			$('.headerdetails').load('header.html',function(){
				//添加cookie
				function addcookie(key,value,days){
				var d=new Date();
				d.setDate(d.getDate()+days);
				document.cookie=key+'='+encodeURI(value)+';expires='+d;
				}
				//获取cookie
				function getcookie(key){
				var arr=decodeURI(document.cookie).split('; ');//将cookie拆分成数组
				for(var i=0;i<arr.length;i++){//遍历数组
					var newarr=arr[i].split('=');//继续拆分数组的每一项
					if(newarr[0]==key){
						return newarr[1];
					}
				}
				}
				//删除cookie
				function delcookie(key){
				addcookie(key,'',-1);
				}
				//效果
				if(getcookie('username')){
					$('.login-back').show();
					$('.p-lohin').hide();
					$('.login-back a').html(getcookie('username'))
				}
				$('.close').on('click',function(){
					delcookie('username','',-1);
					$('.login-back').hide();
					$('.p-lohin').show();
				})

			});
			$('.footercontent').load('footer.html');
		}(),
		//放大镜
		fdj:! function() {
			var $spic = $('.spic');
			var $sf = $('.sf');
			var $bf = $('.bf');
			var $bpic = $('.bpic');
			var $pics=$('.ulist');
			var $bili = $bpic.width() / $spic.width();
			//1:鼠标滑过小图；小方和大方出现
			$spic.hover(function() {
				$sf.show();
				$bf.show();
				//2:求小方的大小
				$sf.css({
					width: $bf.width() * $spic.width() / $bpic.width(),
					height: $bf.height() * $spic.height() / $bpic.height()
				})
				//移动
				$(this).on('mousemove', function(ev) {
					var $l = ev.pageX - $spic.offset().left - $sf.outerWidth() / 2
					var $t = ev.pageY - $spic.offset().top - $sf.outerHeight() / 2
					if($l < 0) {
						$l = 0
					} else if($l > $spic.outerWidth() - $sf.outerWidth()) {
						$l = $spic.outerWidth() - $sf.outerWidth()
					}
					if($t < 0) {
						$t = 0
					} else if($t > $spic.outerHeight() - $sf.outerHeight()) {
						$t = $spic.outerHeight() - $sf.outerHeight()
					}
					$sf.css({
						left: $l,
						top: $t
					})
					$bpic.css({
						left: $l * -$bili,
						top: $t * -$bili
					})
				})
			}, function() {
				$sf.hide();
				$bf.hide();
			})
			$pics.on('mouseover','li', function() {
				var $src = $(this).find('img').attr('src');
				$spic.find('img').attr('src', $src)
				$bpic.attr('src', $src)
			})
		}(),
		//点击按钮
		abtn:! function() {
			var $jia = $('.jia');
			var $jian = $('.jian');
			var $input = $('.shuliang input');
			var $num = $input.val();
			$jia.on('click', function() {
				$num++
				if($num >= 20) {
					$num = 20
				}
				$input.val($num);
			})
			$jian.on('click', function() {
				$num--
				if($num <= 1) {
					$num = 1
				}
				$input.val($num);
			})

		}(),
		gouwuceh:!function(){
		//cookie函数
		//添加cookie
				function addcookie(key,value,days){
				var d=new Date();
				d.setDate(d.getDate()+days);
				document.cookie=key+'='+encodeURI(value)+';expires='+d;
				}
				//获取cookie
				function getcookie(key){
				var arr=decodeURI(document.cookie).split('; ');//将cookie拆分成数组
				for(var i=0;i<arr.length;i++){//遍历数组
					var newarr=arr[i].split('=');//继续拆分数组的每一项
					if(newarr[0]==key){
						return newarr[1];
					}
				}
				}
				//删除cookie
				function delcookie(key){
				addcookie(key,'',-1);
				}
			var sidarr=[];//存放商品对应下标
			var numarr=[];//存放商品数量
			//核心存cookie
			//1：不管原先cookie有没有都要先获取一下cookie
			function getcookievalue(){
				if(getcookie('cartsid') && getcookie('cartnum')){//getcookie的写法
					//将取出的值放入数组中,此时不知道cookie中有没有值
					sidarr=getcookie('cartsid').split(',')
					numarr=getcookie('cartnum').split(',')
				}
			}
			//点击加入购物车按钮，存放cookie
			$('.acrt-z-btn').on('click',function(){//判断数组中是否有对应的下标
				var sid=location.search.split('=')[1]//获取现在的sid值
				getcookievalue()//不管有没有，先获取cookie到数组中
				if($.inArray(sid,sidarr)!=-1){//数组中已经有了对应的下标(下标必须是唯一的值)
					//将cookie中已有的值同现在页面的值加起来
           			var num=parseInt(numarr[$.inArray(sid,sidarr)])+parseInt($('.shuliang input').val());//当前的值和cookie里面的值(和sid对应的值)进行累加
					console.log("num")
					numarr[$.inArray(sid,sidarr)]=num//重新赋值，并存cookie
					addcookie('cartnum',numarr,10);
				}else{//如果cookie中没有现在的这个下标，就将现在的sid和num，追加进去，并存cookie
					sidarr.push(sid);
					addcookie('cartsid',sidarr,10);
					numarr.push($('.shuliang input').val());
					addcookie('cartnum',numarr,10)
					
				}
			})
			//sidarr numarr 存取cookie的数组
			//cartsid cartnum 存取cookie起的名字
			//sid 当前的商品下标
			//num 商品的数量	
			
			
			
			
		}()
	}
})