define(['../thirdplugins/jquery'], function() {
			return {
				cart: ! function() {
					//cookie函数
					//添加cookie
					function addcookie(key, value, days) {
						var d = new Date();
						d.setDate(d.getDate() + days);
						document.cookie = key + '=' + encodeURI(value) + ';expires=' + d;
					}
					//获取cookie
					function getcookie(key) {
						var arr = decodeURI(document.cookie).split('; '); //将cookie拆分成数组
						for(var i = 0; i < arr.length; i++) { //遍历数组
							var newarr = arr[i].split('='); //继续拆分数组的每一项
							if(newarr[0] == key) {
								return newarr[1];
							}
						}
					}
					//删除cookie
					function delcookie(key) {
						addcookie(key, '', -1);
					}
					//1:获取详情页的cookie值(是数组)
					if(getcookie('cartsid') && getcookie('cartnum')) { //判断是否存在，存在获取
						var s = getcookie('cartsid').split(',') //下标组成的数组
						var c = getcookie('cartnum').split(',') //数量组成的数组	
						console.log(s);
						console.log(c);
					}

					function cookieToArray() {
						if(getcookie('cartsid')) {
							sidarr = getcookie('cartsid').split(',');
						}

						if(getcookie('cartnum')) {
							numarr = getcookie('cartnum').split(',');
						}
					}
					//1:遍历下标数组
					$.each(s, function(index, value) { //遍历cookie中的下标的数组
						creatvalue(value, c[index]) //传参 下标和对应的值

					})

					//2根据传来的sid拼接ul
					function creatvalue(psid, num) { //sid图片的编号，与其对应的数量
						$.ajax({
							url: 'http://10.31.162.20/js/dangdang/php/cart.php',
							dataType: 'json',
							type: 'post',
						}).done(function(d) {
							//console.log(d);
							//cookie中的sid和数据库中的sid一样时开始克隆ul
							$.each(d, function(index, value) {
								if(psid == d[index].sid) { //判断：s的value值(sid)和d中的sid可以匹配上就开

									var $clone = $('.shopping-ul:hidden').clone(true) //克隆ul
									//都是赋值，防止取不到元素
									$clone.find('.row-pic').find('img').attr({
										'src': d[index].url1,
										'id': d[index].sid
									});
									$clone.find('.row-name').find('a').html(d[index].title1);
									$clone.find('.row-price').find('span').html(d[index].price1);
									$clone.find('.roe-tip').find('input').val(num);
									var $dj = parseFloat($clone.find('.row-price span').html()); //获取当前的单价

									$clone.find('.row4 span').html(($dj * num).toFixed(2)); //计算商品总价
									$clone.css('display', 'block'); //克隆的模块是隐藏，显示出来。
									$('.shopping-list').append($clone); //追加
									totalprice()
									kong()
									//zojiang()
								}

							})

						})
					}

					//3：cookie不存在时
					function kong() {
						if(getcookie('cartsid')) { //存在
							$('.main-wrap').hide();
						} else {
							$('.main-wrap').show();
						}
					}
					$.ajax({
						url: 'http://10.31.162.20/js/dangdang/php/cart.php',
						dataType: 'json',
					}).done(function(d) {
						//console.log(d)
						$.each(d, function(index, value) {
							if(tsid = d[index].sid) {
								console.log(tsid)
								var ttitlearr = value.title2.split(',')
								var urlarr = value.url2.split(',')
								var pricearr = value.price2.split(',')
								//console.log(ttitlearr)
								var $tstr = ''
								$.each(ttitlearr, function(index, value) {
									$tstr += '<li><div class="like-pic"><a href="#" class="pica"><img src="' + urlarr[index] + '" id="' + tsid[index] + 0 + '"></a> <a href="javascript:;" class="jairu">加入购物车</a></div><div class="price">' + pricearr[index] + '</div><div class="like-name"><a>' + ttitlearr[index] + '</a></div><div class="like-pinglu"><span class="star"><span style="width:100%"></span></span><a href="#">7364条评论</a></div></li>'
								});
								$('.like').html($tstr)
							}
						});
					})
					var sidarr = [];
					var numarr = [];
					$(".tuijian ul").on("click", ".like-pic .jairu", function() {
							var p = $(this).parents(".like li").find(".like-pic").find(".pica").find("img").attr("id")
							var s = $(this).parents(".like li").find(".like-pic").find(".pica").find("img").attr("src")
							var a = $(this).parents(".like li").find(".price").html()
							var e = $(this).parents(".like li").find(".like-name").find("a").html();
							if($.inArray(tsid, sidarr) != -1) {
								$('.goods-item:visible').each(function() { //遍历可视的商品列表
									if(sid == $(this).find('img').attr('sid')) { //添加购物车按钮的索引和购物车中商品列表的索引一致
										var $num = $(this).find('.shuliang input').val(); //获取数量的值
										$num++; //数量累加
										$(this).find('.shuliang input').val($num); //将数量赋值回去
										//计算价格
										var $dj = parseFloat($(this).find('.row-price span').html()); //获取当前的单价
										$(this).find('.row4 input').html(($dj * $num).toFixed(2)); //计算商品总价

										//存储数量到cookie里面。通过编号找数量
										numarr[$.inArray(sid, sidarr)] = $num; //将数量存储到对应的cookie存放数量的数组中
										addCookie('cartnum', numarr.toString(), 7); //添加购物车
										totalprice();
									}
								})
							} else {
								sidarr.push(tsid); //将当前id添加到数组里面。
								addcookie('cartsid', sidarr.toString(), 7); //将整个数组添加到cookie
								numarr.push(1); //走这里数量都是1.
								addcookie('cartnum', numarr.toString(), 7);
								//createcart(sid, 1);
								totalprice();
							}
						})
							//拼接商品列表的效果
							//1：ul有cookie时出现
							if(getcookie('cartsid')) { //cookie存在
								$('.like').show();
							}
							$('.tuijian').on('mouseover', '.like li', function() {
								$(this).find('.like-pic').find('.jairu').show()
							})
							$('.tuijian').on('mouseout', '.like li', function() {
								$(this).find('.like-pic').find('.jairu').hide()
							})

							//5计算总价
							//计算总价

							function totalprice() { //计算总价
								var total = 0; //总的价格
								var countnum = 0; //总的数量
								$('.shopping-ul:visible').each(function() { //可视的商品列表进行遍历，循环叠加
									if($('.shopping-ul').find('.checked').find('input:checkbox').is(':checked')) { //商品的复选框是选中的
										total += parseFloat($(this).find('.row4 span').html());
										countnum += parseInt($(this).find('.roe-tip').find('.shuliang').find('input').val());
										//console.log(total)
										console.log(countnum)
									}
									$('.total-right a').css({
										'background': 'red',
									})

								});
								//赋值
								$('.payAmount').html(total);
								$('.xuanze a').html(countnum);

							}

							//6改变数量
							//++
							$('.jia').on('click', function() {
								var $count = $(this).parents('.shopping-ul').find('.roe-tip input').val()
								$count++
								if($count >= 99) {
									$count = 99
								}
								$(this).parents('.shopping-ul').find('.roe-tip input').val($count)
								$(this).parents('.shopping-ul').find('.row4 span').html(gaibian($(this)));
								totalprice()
								setcookie($(this))
							})
							//--
							$('.jian').on('click', function() {
								var $count = $(this).parents('.shopping-ul').find('.roe-tip input').val()
								$count--
								if($count <= 1) {
									$count = 1
								}
								$(this).parents('.shopping-ul').find('.roe-tip input').val($count)
								$(this).parents('.shopping-ul').find('.row4 span').html(gaibian($(this)));
								totalprice()
								setcookie($(this))
							})
							//直接改变
							$('.shuliang input').on('input', function() {
								//限制只能是数字
								var $value = $(this).val()
								var reg = /^\d+$/g
								if(reg.test($value)) {
									if($value >= 99) {
										$(this).val(99)
									} else if($value <= 0) {
										$(this).val(1)
									} else {
										$(this).val($value)
									}
								} else {
									$(this).val(1)
								}
								$(this).parents('.shopping-ul').find('.row4 span').html(gaibian($(this)));
								totalprice()
								setcookie($(this))

							})

							//7:改变后的每一个ul的价钱
							function gaibian(ele) {
								var dj = ele.parents('.shopping-ul').find('.row-price').find('span').html();
								var gnum = ele.parents('.shopping-ul').find('.roe-tip .shuliang input').val();
								return(dj * gnum).toFixed(2)
							}

							//8 全选按钮
							//点击全选按钮，所有显示的ul的选择框，选中
							$('.f1 input').on('click', function() {
								$('.shopping-ul:visible').find('.checked').find('input:checkbox').prop('checked', $(this).prop('checked'));
								$('.f1').prop('checked', $(this).prop('checked'));
								totalprice()

							})
							//获取li
							var $inputchecked = $('.shopping-ul:visible').find('input:checkbox'); //获取委托元素
							$('.shopping-list').on('change', $inputchecked, function() {

								var $inputs = $('.shopping-ul:visible').find('.checked').find('input:checkbox'); //放内部

								if($('.shopping-ul:visible').find('.checked').find('input:checked').length == $inputs.size()) {

									$('.f1 input').prop('checked', true);
								} else {
									$('.f1 input').prop('checked', false);
								}
								totalprice()
							});
							//9.将改变后的数量的值存放到cookie
							function setcookie(obj) { //obj:当前操作的对象
								cookieToArray();
								var $index = obj.parents('.shopping-ul').find('.row-pic').find('a').find('img').attr('id');
								numarr[sidarr.indexOf($index)] = obj.parents('.shopping-ul').find('.roe-tip input').val();
								addcookie('cartnum', numarr.toString(), 7);
							}

							//删除
							//10.删除
							//删除cookie的函数
							function delgoodslist(sid, sidarr) { //sid：当前的sid，sidarr:cookie的sid的值
								var index = -1;
								for(var i = 0; i < sidarr.length; i++) {
									if(sid == sidarr[i]) {
										index = i;
									}
								}
								sidarr.splice(index, 1); //删除数组对应的值
								numarr.splice(index, 1); //删除数组对应的值
								addcookie('cartsid', sidarr.toString(), 7); //添加cookie
								addcookie('cartnum', numarr.toString(), 7);
								location.reload();
							}
							$('.shopping-list').on('click', '.remove', function() {
								cookieToArray(); //转数组
								if(confirm('你确定要删除吗？')) {
									$(this).first().parents('.shopping-ul').remove();
								}
								delgoodslist($(this).first().parents('.row-pic').find('img').attr('sid'), sidarr);

							});

						}()
					}

				})