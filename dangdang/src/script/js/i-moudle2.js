define(['../thirdplugins/jquery'], function() {
	return {
		//中间轮播数据
		lunbodata: ! function() {
			$.ajax({
					type: "post",
					url: "http://10.31.162.20/js/dangdang/php/lunbu1.php",
					async: true,
					dataType: 'json'
				})
				.done(function(d) {
					console.log(d)
					var $topstr = '<ul class="pic">'
					$.each(d, function(index, value) {
						$topstr += '<li><a><img src="' + value.url + '"></a></li>'
					});
					$topstr += "</ul>"
					$('.lunbo-top').append($topstr);
				});
		}(),
		//tab 数据
		tab1: ! function($) {
			$.ajax({
					type: "post",
					url: "http://10.31.162.20/js/dangdang/php/tab1.php",
					dataType: "json"
				})
				.done(function(data) {
					//console.log(data)
					var $tab1 = '<ul>'
					$.each(data, function(index, value) { //value 每一个对象
						$tab1 += '<li><a href="http://10.31.162.20/js/dangdang/src/details.html?id=' + value.sid + '"><img src="' + value.url + '"></a><p class="name"><a href="#">' + value.title + '</a></p><span class="num-logo"><span>' + value.dang + '</span></span><p class="dujia-price"><span class="d-now-price"><span>￥</span><span>' + value.rol + '</span></span><span class="d-aog-price"><span>￥</span><span>' + value.ago + '</span></span></span></p></li>'
					});
					$tab1 += "</ul>"
					$('.xuanran1').html($tab1);

				})

			$.ajax({
					type: "post",
					url: "http://10.31.162.20/js/dangdang/php/tab2.php",
					dataType: "json"
				})
				.done(function(data) {
					//console.log(data)
					var $tab1 = '<ul>'
					$.each(data, function(index, value) { //value 每一个对象
						$tab1 += '<li><a href="#"><img src="' + value.url + '"></a><p class="name"><a href="#">' + value.title + '</a></p><span class="num-logo"><span>' + value.dang + '</span></span><p class="dujia-price"><span class="d-now-price"><span>￥</span><span>' + value.rol + '</span></span><span class="d-aog-price"><span>￥</span><span>' + value.ago + '</span></span></span></p></li>'
					});
					$tab1 += "</ul>"
					$('.xuanran2').html($tab1);

				})

			$.ajax({
					type: "post",
					url: "http://10.31.162.20/js/dangdang/php/tab3.php",
					dataType: "json"
				})
				.done(function(data) {
					//console.log(data)
					var $tab1 = '<ul>'
					$.each(data, function(index, value) { //value 每一个对象
						$tab1 += '<li><a href="#"><img src="' + value.url + '"></a><p class="name"><a href="#">' + value.title + '</a></p><span class="num-logo"><span>' + value.dang + '</span></span><p class="dujia-price"><span class="d-now-price"><span>￥</span><span>' + value.rol + '</span></span><span class="d-aog-price"><span>￥</span><span>' + value.ago + '</span></span></span></p></li>'
					});
					$tab1 += "</ul>"
					$('.xuanran3').html($tab1);

				})
			$.ajax({
					type: "post",
					url: "http://10.31.162.20/js/dangdang/php/tab4.php",
					dataType: "json"
				})
				.done(function(data) {
					//console.log(data)
					var $tab1 = '<ul>'
					$.each(data, function(index, value) { //value 每一个对象
						$tab1 += '<li><a href="#"><img src="' + value.url + '"></a><p class="name"><a href="#">' + value.title + '</a></p><span class="num-logo"><span>' + value.dang + '</span></span><p class="dujia-price"><span class="d-now-price"><span>￥</span><span>' + value.rol + '</span></span><span class="d-aog-price"><span>￥</span><span>' + value.ago + '</span></span></span></p></li>'
					});
					$tab1 += "</ul>"
					$('.xuanran4').html($tab1);

				})
			$.ajax({
					type: "post",
					url: "http://10.31.162.20/js/dangdang/php/tab5.php",
					dataType: "json"
				})
				.done(function(data) {
					//console.log(data)
					var $tab1 = '<ul>'
					$.each(data, function(index, value) { //value 每一个对象
						$tab1 += '<li><a href="#"><img src="' + value.url + '"></a><p class="name"><a href="#">' + value.title + '</a></p><span class="num-logo"><span>' + value.dang + '</span></span><p class="dujia-price"><span class="d-now-price"><span>￥</span><span>' + value.rol + '</span></span><span class="d-aog-price"><span>￥</span><span>' + value.ago + '</span></span></span></p></li>'
					});
					$tab1 += "</ul>"
					$('.xuanran5').html($tab1);

				})
			$.ajax({
					type: "post",
					url: "http://10.31.162.20/js/dangdang/php/tab6.php",
					dataType: "json"
				})
				.done(function(data) {
					//console.log(data)
					var $tab1 = '<ul>'
					$.each(data, function(index, value) { //value 每一个对象
						$tab1 += '<li><a href="#"><img src="' + value.url + '"></a><p class="name"><a href="#">' + value.title + '</a></p><span class="num-logo"><span>' + value.dang + '</span></span><p class="dujia-price"><span class="d-now-price"><span>￥</span><span>' + value.rol + '</span></span><span class="d-aog-price"><span>￥</span><span>' + value.ago + '</span></span></span></p></li>'
					});
					$tab1 += "</ul>"
					$('.xuanran6').html($tab1);

				})
			$.ajax({
					type: "post",
					url: "http://10.31.162.20/js/dangdang/php/tab7.php",
					dataType: "json"
				})
				.done(function(data) {
					//console.log(data)
					var $tab1 = '<ul>'
					$.each(data, function(index, value) { //value 每一个对象
						$tab1 += '<li><a href="#"><img src="' + value.url + '"></a><p class="name"><a href="#">' + value.title + '</a></p><span class="num-logo"><span>' + value.dang + '</span></span><p class="dujia-price"><span class="d-now-price"><span>￥</span><span>' + value.rol + '</span></span><span class="d-aog-price"><span>￥</span><span>' + value.ago + '</span></span></span></p></li>'
					});
					$tab1 += "</ul>"
					$('.xuanran7').html($tab1);

				})
			$.ajax({
					type: "post",
					url: "http://10.31.162.20/js/dangdang/php/tab8.php",
					dataType: "json"
				})
				.done(function(data) {
					//console.log(data)
					var $tab1 = '<ul>'
					$.each(data, function(index, value) { //value 每一个对象
						$tab1 += '<li><a href="#"><img src="' + value.url + '"></a><p class="name"><a href="#">' + value.title + '</a></p><span class="num-logo"><span>' + value.dang + '</span></span><p class="dujia-price"><span class="d-now-price"><span>￥</span><span>' + value.rol + '</span></span><span class="d-aog-price"><span>￥</span><span>' + value.ago + '</span></span></span></p></li>'
					});
					$tab1 += "</ul>"
					$('.xuanran8').html($tab1);

				})

			$.ajax({
					type: "post",
					url: "http://10.31.162.20/js/dangdang/php/tab21.php",
					dataType: "json"
				})
				.done(function(data) {
					//console.log(data)
					var $tab1 = '<ul>'
					$.each(data, function(index, value) { //value 每一个对象
						$tab1 += '<li><a href="#"><img src="' + value.url + '"></a><p class="name"><a href="#">' + value.title + '</a></p><span class="num-logo"><span>' + value.dang + '</span></span><p class="dujia-price"><span class="d-now-price"><span>￥</span><span>' + value.rol + '</span></span><span class="d-aog-price"><span>￥</span><span>' + value.ago + '</span></span></span></p></li>'
					});
					$tab1 += "</ul>"
					$('.xuanran21').html($tab1);

				})

			$.ajax({
					type: "post",
					url: "http://10.31.162.20/js/dangdang/php/tab22.php",
					dataType: "json"
				})
				.done(function(data) {
					//console.log(data)
					var $tab1 = '<ul>'
					$.each(data, function(index, value) { //value 每一个对象
						$tab1 += '<li><a href="#"><img src="' + value.url + '"></a><p class="name"><a href="#">' + value.title + '</a></p><span class="num-logo"><span>' + value.dang + '</span></span><p class="dujia-price"><span class="d-now-price"><span>￥</span><span>' + value.rol + '</span></span><span class="d-aog-price"><span>￥</span><span>' + value.ago + '</span></span></span></p></li>'
					});
					$tab1 += "</ul>"
					$('.xuanran22').html($tab1);

				})

		}(jQuery),
		//最大轮播数据
		maindata: ! function() {
			$.ajax({
					url: "http://10.31.162.20/js/dangdang/php/toplunbo.php",
					type: "post",
					dataType: "json"
				})
				.done(function(d) {
					//console.log(d);
					var $tlunbo1 = '<ul class="one-main">'
					$.each(d, function(index, value) {
						$tlunbo1 += '<li class="o-1"><a href="#"><img src="' + value.url + '"></a><p class="book-title"><a href="#">' + value.title + '</a></p><p class="name"><span>' + value.name + '</span></p><p class="price"><span class="rob"><span>￥</span><span>' + value.rol + '</span></span><span class="pric-r"><span>￥</span><span>' + value.ago + '</span></span></p></li>'
					});
					$tlunbo1 += "</ul>";
					$('.lunboxuanran1').append($tlunbo1);
				})

			$.ajax({
					url: "http://10.31.162.20/js/dangdang/php/toplunbo2.php",
					type: "post",
					dataType: "json"
				})
				.done(function(d) {
					//console.log(d);
					var $tlunbo2 = '<ul class="one-main">'
					$.each(d, function(index, value) {
						$tlunbo2 += '<li class="o-1"><a href="#"><img src="' + value.url + '"></a><p class="book-title"><a href="#">' + value.title + '</a></p><p class="name"><span>' + value.name + '</span></p><p class="price"><span class="rob"><span>￥</span><span>' + value.rol + '</span></span><span class="pric-r"><span>￥</span><span>' + value.ago + '</span></span></p></li>'
					});
					$tlunbo2 += "</ul>";
					$('.lunboxuanran2').append($tlunbo2);
				})

			$.ajax({
					url: "http://10.31.162.20/js/dangdang/php/toplunbo3.php",
					type: "post",
					dataType: "json"
				})
				.done(function(d) {
					//console.log(d);
					var $tlunbo3 = '<ul class="one-main">'
					$.each(d, function(index, value) {
						$tlunbo3 += '<li class="o-1"><a href="#"><img src="' + value.url + '"></a><p class="book-title"><a href="#">' + value.title + '</a></p><p class="name"><span>' + value.name + '</span></p><p class="price"><span class="rob"><span>￥</span><span>' + value.rol + '</span></span><span class="pric-r"><span>￥</span><span>' + value.ago + '</span></span></p></li>'
					});
					$tlunbo3 += "</ul>";
					$('.lunboxuanran3').append($tlunbo3);
				})

			$.ajax({
					url: "http://10.31.162.20/js/dangdang/php/toplunbo4.php",
					type: "post",
					dataType: "json"
				})
				.done(function(d) {
					//console.log(d);
					var $tlunbo4 = '<ul class="one-main">'
					$.each(d, function(index, value) {
						$tlunbo4 += '<li class="o-1"><a href="#"><img src="' + value.url + '"></a><p class="book-title"><a href="#">' + value.title + '</a></p><p class="name"><span>' + value.name + '</span></p><p class="price"><span class="rob"><span>￥</span><span>' + value.rol + '</span></span><span class="pric-r"><span>￥</span><span>' + value.ago + '</span></span></p></li>'
					});
					$tlunbo4 += "</ul>";
					$('.lunboxuanran4').append($tlunbo4);
				})

		}(),
		
		//landnav
//		landnav: ! function() {
//			$(function() {
//				$(window).on('scroll', function() {
//					$("img").lazyload();
//				})
//
//			});
//		}()

	}

})