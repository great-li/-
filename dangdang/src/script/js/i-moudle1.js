define(['../thirdplugins/jquery'], function() {
			return {
				//引入头部底部	
				data: ! function() {
					$('.headerindex').load('header.html', function() {
						//jasonp
						$('#key').on('input', function() {
							$('.jsonp').show()

							$.ajax({
								url: 'https://suggest.taobao.com/sug?code=utf-8&q=' + $(this).val() + '',
								dataType: 'jsonp',

							}).done(function(d) {

								var jsonparr = d.result;
								console.log(jsonparr)
								var $strli = ''
								$.each(jsonparr, function(index, value) {
									$strli += '<li><a href="#">' + value[0] + '</a></li>'
								});
								$('.jsonp').html($strli);
							})
						})
						$('#key').on('focus', function() {
							$(this).css({
								outline: 'none',
							}).attr('placeholder', '')
						})
						$('#key').on('blur', function() {
							$('.jsonp').hide()
						});
						$('.all-li').hover(function() {
							$('.pub-nav').show()
						}, function() {
							$('.pub-nav').hide()
						})
						$('.pub-nav').hover(function() {
							$('.pub-nav').show()
						}, function() {
							$('.pub-nav').hide()
						})

						$('.two-nav').hover(function() {
							$('.new-ub').show()
						}, function() {
							$('.new-ub').hide()
						})
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
						//效果
						if(getcookie('username')) {
							$('.login-back').show();
							$('.p-lohin').hide();
							$('.login-back a').html(getcookie('username'))
						}
						$('.close').on('click', function() {
							delcookie('username', '', -1);
							$('.login-back').hide();
							$('.p-lohin').show();
						})

					});

					$('.footerindex').load('footer.html');
				}(),

				//div 显示
				show: ! function($) {

					$('.shudan').hover(function() {
						$('.shudan-nav').show();
					}, function() {
						$('.shudan-nav').hide();
					})

					$('.dainzishu').hover(function() {
						$('.shudan-nav').show();
					}, function() {
						$('.shudan-nav').hide();
					})

				}(jQuery),
				//右侧轮播图
				rightlunbo: function() {
					var $index = null;
					var $timer1 = null;
					$(".book-lunbo ol li").on("mouseover", function() {
						$index = $(this).index();
						rlunbo();
					})
					//右侧按钮
					$(".book-right-btn").on("click", function() {
						$index++
						if($index > 2) {
							$index = 0
						}
						rlunbo();

					})
					//左侧轮播
					$(".book-left-btn").on("click", function() {
						$index--
						if($index < 0) {
							$index = 2
						}
						rlunbo();

					})
					//自动播放
					$timer1 = setInterval(function() {
						$(".book-right-btn").click();
					}, 2000)

					$('.ul-content').hover(function() {
						clearInterval($timer1);
					}, function() {
						$timer1 = setInterval(function() {
							$(".book-right-btn").click();
						}, 2000)
					})

					function rlunbo() {
						$(".book-lunbo ol li").eq($index).addClass('active1').siblings().removeClass('active1');
						$(".ul-content li").eq($index).show().siblings().hide();
					}

				}(),
				//中间轮播
				lunbomiddle: ! function($) {
					var $mindex = null;
					var timer = null;
					$('.quan li').on('mouseover', function() {
						$mindex = $(this).index();
						lunbu();
					})
					//自动播放
					timer = setInterval(function() {
						$mindex++
						if($mindex == 11) {
							$mindex = 0
						}
						lunbu();
					}, 2000)
					$(".lunbo-top").hover(function() {
						clearInterval(timer)
					}, function() {
						timer = setInterval(function() {
							$mindex++
							if($mindex == 12) {
								$mindex = 0
							}
							lunbu();
						}, 2000)
					})

					function lunbu() {
						$(".quan li").eq($mindex).addClass('active').siblings().removeClass('active');
						$(".pic li").eq($mindex).show().siblings().hide();
					}

				}(jQuery),
				//读书畅销榜的切换效果
				dushu: ! function($) {
					$('.ebook-sall ul .line11').hover(function() {
						$(this).hide();
						$('.ebook-sall ul .item11').show();
					}, function() {
						$(this).show();
						$('.ebook-sall ul .item1').hide();
					})
					$(".ebook-sall ul .item1").hover(function() {
						$(this).show();
						$('.ebook-sall ul .line1').hide();
					}, function() {
						$(this).hide();
						$('.ebook-sall ul .line1').show();
					})

					$('.ebook-sall ul .line2').hover(function() {
						$(this).hide();
						$('.ebook-sall ul .item2').show();
						$('.e-name a').css({
							'color': '#ec7814',
							'text-decoration': 'underline',
						})
					}, function() {
						$(this).show();
						$('.ebook-sall ul .item2').hide();
					})
					$(".ebook-sall ul .item2").hover(function() {
						$(this).show().siblings('.ebook-sall ul .item1').hide();
						$('.ebook-sall ul .line1').show();
						$('.ebook-sall ul .line2').hide();
					}, function() {
						$(this).hide();
						$('.ebook-sall ul .line2').show();
					})

					$('.ebook-sall ul .line3').hover(function() {
						$(this).hide();
						$('.ebook-sall ul .item3').show();
					}, function() {
						$(this).show();
						$('.ebook-sall ul .item3').hide();
					})
					$(".ebook-sall ul .item3").hover(function() {
						$(this).show().siblings('.ebook-sall ul .item1').hide();
						$('.ebook-sall ul .line1').show();
						$('.ebook-sall ul .line3').hide();
					}, function() {
						$(this).hide();
						$('.ebook-sall ul .line3').show();
					})

					$('.ebook-sall ul .line4').hover(function() {
						$(this).hide();
						$('.ebook-sall ul .item4').show();
					}, function() {
						$(this).show();
						$('.ebook-sall ul .item4').hide();
					})
					$(".ebook-sall ul .item4").hover(function() {
						$(this).show().siblings('.ebook-sall ul .item1').hide();
						$('.ebook-sall ul .line1').show();
						$('.ebook-sall ul .line4').hide();
					}, function() {
						$(this).hide();
						$('.ebook-sall ul .line4').show();
					})

					$('.ebook-sall ul .line5').hover(function() {
						$(this).hide();
						$('.ebook-sall ul .item5').show();
					}, function() {
						$(this).show();
						$('.ebook-sall ul .item5').hide();
					})
					$(".ebook-sall ul .item5").hover(function() {
						$(this).show().siblings('.ebook-sall ul .item1').hide();
						$('.ebook-sall ul .line1').show();
						$('.ebook-sall ul .line5').hide();
					}, function() {
						$(this).hide();
						$('.ebook-sall ul .line5').show();
					})

					$('.ebook-sall ul .line6').hover(function() {
						$(this).hide();
						$('.ebook-sall ul .item6').show();
					}, function() {
						$(this).show();
						$('.ebook-sall ul .item6').hide();
					})
					$(".ebook-sall ul .item6").hover(function() {
						$(this).show().siblings('.ebook-sall ul .item1').hide();
						$('.ebook-sall ul .line1').show();
						$('.ebook-sall ul .line6').hide();
					}, function() {
						$(this).hide();
						$('.ebook-sall ul .line6').show();
					})

					$('.ebook-sall ul .line7').hover(function() {
						$(this).hide();
						$('.ebook-sall ul .item7').show();
					}, function() {
						$(this).show();
						$('.ebook-sall ul .item7').hide();
					})
					$(".ebook-sall ul .item7").hover(function() {
						$(this).show().siblings('.ebook-sall ul .item1').hide();
						$('.ebook-sall ul .line1').show();
						$('.ebook-sall ul .line7').hide();
					}, function() {
						$(this).hide();
						$('.ebook-sall ul .line7').show();
					})

					$('.ebook-sall ul .line8').hover(function() {
						$(this).hide();
						$('.ebook-sall ul .item8').show();
					}, function() {
						$(this).show();
						$('.ebook-sall ul .item8').hide();
					})
					$(".ebook-sall ul .item8").hover(function() {
						$(this).show().siblings('.ebook-sall ul .item1').hide();
						$('.ebook-sall ul .line1').show();
						$('.ebook-sall ul .line8').hide();
					}, function() {
						$(this).hide();
						$('.ebook-sall ul .line8').show();
					})

					$('.ebook-sall ul .line9').hover(function() {
						$(this).hide();
						$('.ebook-sall ul .item9').show();
					}, function() {
						$(this).show();
						$('.ebook-sall ul .item9').hide();
					})
					$(".ebook-sall ul .item9").hover(function() {
						$(this).show().siblings('.ebook-sall ul .item1').hide();
						$('.ebook-sall ul .line1').show();
						$('.ebook-sall ul .line9').hide();
					}, function() {
						$(this).hide();
						$('.ebook-sall ul .line9').show();
					})

					$('.ebook-sall ul .line10').hover(function() {
						$(this).hide();
						$('.ebook-sall ul .item10').show();
					}, function() {
						$(this).show();
						$('.ebook-sall ul .item10').hide();
					})
					$(".ebook-sall ul .item10").hover(function() {
						$(this).show().siblings('.ebook-sall ul .item1').hide();
						$('.ebook-sall ul .line1').show();
						$('.ebook-sall ul .line10').hide();
					}, function() {
						$(this).hide();
						$('.ebook-sall ul .line10').show();
					})

					$('.ebook-sall ul').hover(function() {
						$('.ebook-sall ul .line1').hide();
						$('.ebook-sall ul .item1').show();
					})

				}(jQuery),
				//热门作家 tab切换效果
				remen: ! function($) {
					$('.book1-title ul li').on('mouseover', function() {
						$(this).addClass('hot-active').siblings('').removeClass('hot-active');
						$('.book-content .navdiv').eq($(this).index()).show().siblings().hide();
					})

				}(jQuery),
				//读者推荐
				dztj: ! function($) {
					$('.dztj-title ul li').on('mouseover', function() {
						$(this).addClass('dztj-active').siblings().removeClass('dztj-active');
						$('.navdztj').eq($(this).index()).show().siblings('.navdztj').hide();
					})
				}(jQuery),
				//猜你喜欢
				guess: ! function($) {
					var $gindex = 0
					$('.guess-title a').on('click', function() {
						$gindex++
						if($gindex >= 3) {
							$gindex = 0

						}
						$('.guess-left .guess-you').eq($gindex).show().siblings('.guess-left .guess-you').hide();

					})

				}(jQuery),
				//新书热卖
				xinshu: ! function($) {
					$('.hot-ul li').on('mouseover', function() {
						$(this).addClass('active-xin').siblings().removeClass('active-xin');
						$('.hot-tab>div').eq($(this).index()).show().siblings().hide();
					})

				}(jQuery),
				//tab切换效果
				tab: ! function($) {
					$('.tab-aa li').on('mouseover', function() {
						$(this).addClass('active3').siblings().removeClass('active3');
						$('.dujia-main>div').eq($(this).index()).show().siblings().hide();
					})
					$('.tab-bb li').on('mouseover', function() {
						$(this).addClass('active3').siblings().removeClass('active3');
						$('.dujia-main2>div').eq($(this).index()).show().siblings().hide();
					})
				}(jQuery),
				//底部轮播
				bottom: ! function($) {
					//设置ul宽度
					var num = 0;
					var bstop = true;
					var $liwidth = $('.t-lunbo-pic').outerWidth(true) * 5
					$('.t-lunbo-allpic').css({
						'width': $liwidth * 5,
						'left': -$liwidth
					})
					console.log($('.t-lunbo-allpic').outerWidth(true))
					$('.endabbtn2').on('click', function() {
						num++
						if(bstop) {
							switchpic();
							bstop = false
						}
					})
					$('.endabbtn1').on('click', function() {
						num--
						if(bstop) {
							switchpic();
							bstop = false
						}
					})

					function switchpic() {
						$('.t-lunbo-allpic').stop().animate({
							left: -$liwidth * (num + 1)
						}, 600, function() {

							if(num == 3) {
								$('.t-lunbo-allpic').css({
									left: -$liwidth
								})
								num = 0
							}
							if(num == -1) {
								$('.t-lunbo-allpic').css({
									left: -$liwidth * 3
								})
								num = 2
							}
							bstop = true
						})

					}

				}(jQuery),
				bottom2: ! function($) {
					//设置ul宽度
					var num = 0;
					var bstop = true;
					var $liwidth = $('.t-lunbo-allpic2 li').outerWidth(true) * 5
					$('.t-lunbo-allpic2').css({
						'width': $liwidth * 5,
						'left': -$liwidth
					})
					console.log($('.t-lunbo-allpic2').outerWidth(true))
					$('.endabbtn4').on('click', function() {
						num++
						if(bstop) {
							switchpic();
							bstop = false
						}
					})
					$('.endabbtn3').on('click', function() {
						num--
						if(bstop) {
							switchpic();
							bstop = false
						}
					})

					function switchpic() {
						$('.t-lunbo-allpic2').stop().animate({
							left: -$liwidth * (num + 1)
						}, 600, function() {

							if(num == 3) {
								$('.t-lunbo-allpic2').css({
									left: -$liwidth
								})
								num = 0
							}
							if(num == -1) {
								$('.t-lunbo-allpic2').css({
									left: -$liwidth * 3
								})
								num = 2
							}
							bstop = true
						})

					}

				}(jQuery),
				bottom3: ! function($) {
					//设置ul宽度

					var num = 0;
					var bstop = true;
					var $liwidth = $('.t-lunbo-pic').outerWidth(true) * 5
					$('.t-lunbo-allpic3').css({
						'width': $liwidth * 5,
						'left': -$liwidth
					})
					console.log($('.t-lunbo-allpic3').outerWidth(true))
					$('.endabbtn6').on('click', function() {
						num++
						if(bstop) {
							switchpic();
							bstop = false
						}
					})
					$('.endabbtn5').on('click', function() {
						num--
						if(bstop) {
							switchpic();
							bstop = false
						}
					})

					function switchpic() {
						$('.t-lunbo-allpic3').stop().animate({
							left: -$liwidth * (num + 1)
						}, 600, function() {

							if(num == 3) {
								$('.t-lunbo-allpic3').css({
									left: -$liwidth
								})
								num = 0
							}
							if(num == -1) {
								$('.t-lunbo-allpic3').css({
									left: -$liwidth * 3
								})
								num = 2
							}
							bstop = true
						})

					}

				}(jQuery),
				//最大的轮播效果
				mainlunbo: ! function() {
					var $pic = $('.content-l');
					var $li = $('.one');
					var $num = 0;
					var bstop = true;
					var $oli = $('.ol-quan li');
					var $liwidth = $('.one').width();
					$pic.append($('.lunboxuanran1').clone())
					$pic.prepend($('.lunboxuanran4').clone())
					//设置ul宽度
					$pic.css({
						'width': $liwidth * 6,
						'left': -$liwidth
					})
					$oli.on('mouseover', function() {
						switchpic()
						$num = $(this).index()

					})
					$('.left-btn').on('click', function() {
						$num++
						if(bstop) {
							switchpic();
							bstop = false;
						}
					})

					$('.right-btn').on('click', function() {
						$num--
						if(bstop) {
							switchpic();
							bstop = false;
						}
					})

					//封装函数
					function switchpic() {
						$oli.removeClass('ccenten1')
						$oli.eq($num).addClass('ccenten1')
						$pic.stop().animate({
							left: -$liwidth * ($num + 1)
						}, function() {
							if($num == 4) {
								$pic.css({
									left: -$liwidth
								})

								$num = 0
								//$oli.eq(0).addClass('ccenten1')
							}
							if($num == -1) {
								$pic.css({
									left: -$liwidth * 4
								})
								$num = 3
							}
							bstop = true
						})
					}
				}(),
				//楼梯效果
				louti: ! function() {
					//滚动条高度大于800楼梯出现
					$(window).on('scroll', function() {
						var $scrolltop = $(window).scrollTop();
						if($scrolltop > 800) {
							$('.louti').show()
						} else {
							$('.louti').hide()
						}
						$('.main-content>div').not('.topad,.lunbo,.mingren,.last').each(function(index, ele) {
							var $top1 = $('.main-content>div').not('.topad,.lunbo,.mingren').eq(index).offset().top + 400;

							if($top1 > $scrolltop) {
								$('.louti li').removeClass('active-lou'); //清除前面的加过active
								$('.louti li').eq(index).addClass('active-lou');
								return false; //循环停止
							}
						});
					})
					//点击事件
					$('.louti li').not('.last').on('click', function() {
						$(this).addClass('active-lou').siblings().removeClass('active-lou');
						var $top = $('.main-content>div').not('.topad,.lunbo,.mingren').eq($(this).index()).offset().top;
						$('html,body').animate({
							scrollTop: $top,
						})

					})
					//回到顶部
					$('.louti .last').on('click', function() {
						$('html,body').animate({
							scrollTop: 0,
						})
					})

				}(),
//				lazyload: ! function() {
//					//判断元素是否出现在可视区内
//					function isShow($el) {
//						var winH = $(window).height(), //获取窗口高度
//							scrollH = $(window).scrollTop(), //获取窗口滚动高度
//							top = $el.offset().top; //获取元素距离窗口顶部偏移高度
//						if(top < scrollH + winH) {
//							return true; //在可视范围
//						} else {
//							return false; //不在可视范围
//						}
//					}
//
//					$(window).on('scroll', function() { //监听滚动事件
//						checkShow();
//					})
//					checkShow();
//
//					function checkShow() { //检查元素是否在可视范围内
//						$('img').each(function() { //遍历每一个元素
//							var $cur = $(this);
//							if(!!isloaded($cur)) {
//								return;
//							} //判断是否已加载
//							if(isShow($cur)) {
//								setTimeout(function() {
//									showImg($cur);
//								}, 300) //设置时间是为了更好的看出效果
//							};
//						});
//					}
//
//					function showImg($el) {
//						$el.attr('src', $el.attr('data-src'));
//						$cur.data('isloaded', true);
//					}
//					}()
				}

			})