;!function($){
	
	$('.code-pic a').on('click',function(){
			if($('.zong-input').is(':hidden')){
				$('.zong-input').show();
				$('.two-code').hide();
			}
		})
	
	$('.statr').on('click',function(){
		$('.zong-input').hide();
		$('.two-code').show();
		
	})
	$('.input1').on('focus',function(){
		$(this).attr('value','')
		
	})
	$('.input1').on('blur',function(){
		$(this).attr('value','请输入邮箱/昵称/手机号码')
		$('.error1').html('用户名正确');
				$('.error1').css({
					color:'green',
				})

		
	})
	$('.input2').on('focus',function(){
		$(this).attr('value','')
	})
	$('.input2').on('blur',function(){
		$(this).attr('value','密码')
		$('.error2').html('密码正确');
		$('.error2').css({
					color:'green',
				})
				
	})
	
	$('.a-11').hover(function(){
		$('.gengduo').show();
	},function(){
		$('.gengduo').hide();
	})
	//addcokie
	function addCookie(key,value,day){
					var date=new Date();//创建日期对象
					date.setDate(date.getDate()+day);//过期时间：获取当前的日期+天数，设置给date
					document.cookie=key+'='+encodeURI(value)+';expires='+date;//添加cookie，设置过期时间
				}
	
	$('.d-btn').on('click',function(){
		var $name=$('.input1').val();
		var $pass=$('.input2').val();
		$.ajax({
			type:"post",
			url:"http://10.31.162.20/js/dangdang/php/login.php",
			async:true,
			data:{
				name:$name,
				pass:$pass
			}
		}).done(function(d){
			console.log(d)
			if(!d){//错误时
				$('.error1').html('用户名不存在，请先注册');
				$('.error1').css({
					color:'#f40',
				})
				$('.error2').html('密码有误');
				$('.error2').css({
					color:'#f40',
				})
			}else{
				
				addCookie('username',$name,7);
				location.href='http://10.31.162.20/js/dangdang/src/index.html'
			}
		})
	})
	
	
	
	
	
}(jQuery)
