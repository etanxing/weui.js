// import 'weui';
import FastClick from 'fastclick';
import weui from '../src/weui';
import $ from '../src/util/util';
//import axios from 'axios';

FastClick.attach(document.body);

var maximum = 2,
	minimum = 1,
	$agents = $('.weui-panel'),
	randomnumber;
// /* tab */
// weui.tab('#tab',{
//     defaultIndex: 0
// });
// 表单提交
get('formSubmitBtn').addEventListener('click', function() {
	//Get answers
	var items = ['english', 'age', 'work', 'workAu', 'edu', 'c1', 'c2', 'c3', 'c4', 'auExp', 'auExpSp'],
		score = items.map(gv).reduce(ac, 0),
		home = get('home'),
    $prefix = $('#prefix'),
		result = get('result'),
		$result = $('#result'),
		responses = [{
			title: '恭喜！您符合澳洲技术移民资格',
			subtitle: '想进一步了解，请联系下面的澳洲注册移民代理 <a href="https://www.mara.gov.au/">(Migration Agents Registration Authority)</a>',
			msg: 'weui-icon-success',
			noMsg: ['weui-icon-warn', 'weui-icon-info'],
      prefix: '还有惊喜？'
		}, {
			title: '您的条件接近澳洲技术移民资格',
			subtitle: '想进一步了解，请联系下面的澳洲注册移民代理 <a href="https://www.mara.gov.au/">(Migration Agents Registration Authority)</a>',
			msg: 'weui-icon-info',
			noMsg: ['weui-icon-success', 'weui-icon-warn'],
      prefix: '有惊喜？'
		}, {
			title: '您目前的条件不符合澳洲技术移民资格',
			subtitle: '澳大利亚有多种家庭亲属移民签证，可以尝试让您的亲属进行评估（右上角分享）',
			msg: 'weui-icon-warn',
			noMsg: ['weui-icon-success', 'weui-icon-info'],
      prefix: '不过，有惊喜!'
		}],
		response = score >= 60 ? responses[0] : (score == 55 ? responses[1] : responses[2]);
	randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

	var loading = weui.loading('提交中...')

	setTimeout(function() {
    //window.location.href = 'https://mp.weixin.qq.com/s?__biz=MzA4Nzk5NDAzNg==&tempkey=I4opQsuNrD8nfyJDtYpxMt07w%2Fkuga0ws%2BwBu7gGfPsMwZUTL1lnq1Lzv2nsS86fBP%2BHVheF7wCezfjsajbfBcoqJgCsWfKtHG84py62Mj9SzvzogPprZlqqs0JqBRwU%2B7AZOohs5AZ1LwFPypxF0Q%3D%3D&chksm=07e614f130919de7a789b83298f30a2537a1e21e73dfda71d1ff10f92b46ebfcec5f0fe2c0bb&scene=0&previewkey=zRCwLzVrSsUq7DZ8Ks4IncNS9bJajjJKzz%252F0By7ITJA%253D&key=f17d8322b1674f1f5252ceb131fc515ad43c76cbd49c3c46e56897e896887a9b95751fe3cbdb41948cda2e7f1ce71a9a46d3ef238b48a8e36446915768260cb8da820b11d0f145a0ea6d4f939c693c36&ascene=0&uin=MTc4MDg5ODMwMA%3D%3D&devicetype=iMac+MacBookPro11%2C4+OSX+OSX+10.12.5+build(16F73)&version=12020810&nettype=WIFI&fontScale=100&pass_ticket=LkX5Ze7trflFuUhBgzDO%2FdrKDxGvWoWfgJdcFeY8pPbOPoj%2FVnaio%2BWUNhmD9Ubz';
		loading.hide();
		weui.toast('提交成功', 500)
		result.classList.remove('hidden')
		home.classList.add('hidden')
    document.title = response.title + '| 澳洲技术移民在线评估(2017版)'
    $prefix.html(response.prefix)
    window.scroll(0, 0)

		$result.find('.main-title').html(response.title)
		var item = $result.find('.weui-icon_msg').addClass(response.msg)
		response.noMsg.forEach(function(cn) {
			item.removeClass(cn)
		})

		$result.find('.weui-msg__desc').html(response.subtitle)

    if (score >=55) {
      	$agents.eq(randomnumber - 1).removeClass('hidden')
    }

	}, 500)
});

get('goBack').addEventListener('click', function() {
	result.classList.add('hidden')
	home.classList.remove('hidden')
  document.title = '澳洲技术移民在线评估(2017版)'
	$agents.eq(randomnumber - 1).addClass('hidden')
	window.scroll(0, 0)
})

// get('share').addEventListener('click', function() {
//   console.log('share clicked')
//   wx.onMenuShareTimeline({
//   	title: 'Hahah', // 分享标题
//   	link: 'au.atjava.com', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
//   	imgUrl: 'http://img5.imgtn.bdimg.com/it/u=2939280666,784546577&fm=26&gp=0.jpg', // 分享图标
//   	success: function() {
//   		// 用户确认分享后执行的回调函数
//   	},
//   	cancel: function() {
//   		// 用户取消分享后执行的回调函数
//   	}
//   });
// })

function gv(id) {
	var el = get(id)
	return el.tagName == 'SELECT' ? el.value : el.checked
}

function ac(acc, val) {
	val = val === true ? 5 : (val === false ? 0 : +val)
	return acc + val
}

function get(id) {
	return document.getElementById(id)
}

// axios.get('http://47.93.50.34:3000/api/getconfig?url=' + location.href.split('#')[0])
// 	.then(function(response) {
// 		var data = response.data;
// 		data.debug = true
// 		data.jsApiList = ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone',
//     'startRecord','stopRecord','onVoiceRecordEnd','playVoice','pauseVoice','stopVoice','onVoicePlayEnd','uploadVoice',
//     'downloadVoice','chooseImage','previewImage','uploadImage','downloadImage','translateVoice','getNetworkType',
//     'openLocation','getLocation','hideOptionMenu','showOptionMenu','hideMenuItems','showMenuItems','hideAllNonBaseMenuItem',
//     'showAllNonBaseMenuItem','closeWindow','scanQRCode','chooseWXPay','openProductSpecificView','addCard','chooseCard','openCard']
// 		wx.config(data);
//
// 		wx.error(function(res) {
// 			console.log(res)
// 		});
// 	})
// 	.catch(function(error) {
// 		console.log(error);
// 	});
//
// wx.onMenuShareTimeline({
// 	title: 'Hahah', // 分享标题
// 	link: 'au.atjava.com', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
// 	imgUrl: 'http://img5.imgtn.bdimg.com/it/u=2939280666,784546577&fm=26&gp=0.jpg', // 分享图标
// 	success: function() {
// 		// 用户确认分享后执行的回调函数
// 	},
// 	cancel: function() {
// 		// 用户取消分享后执行的回调函数
// 	}
// });
//
// wx.onMenuShareAppMessage({
// 	title: '', // 分享标题
// 	desc: '', // 分享描述
// 	link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
// 	imgUrl: '', // 分享图标
// 	type: '', // 分享类型,music、video或link，不填默认为link
// 	dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
// 	success: function() {
// 		// 用户确认分享后执行的回调函数
// 	},
// 	cancel: function() {
// 		// 用户取消分享后执行的回调函数
// 	}
// });
//
// wx.onMenuShareQQ({
// 	title: '', // 分享标题
// 	desc: '', // 分享描述
// 	link: '', // 分享链接
// 	imgUrl: '', // 分享图标
// 	success: function() {
// 		// 用户确认分享后执行的回调函数
// 	},
// 	cancel: function() {
// 		// 用户取消分享后执行的回调函数
// 	}
// });
//
// wx.onMenuShareWeibo({
// 	title: '', // 分享标题
// 	desc: '', // 分享描述
// 	link: '', // 分享链接
// 	imgUrl: '', // 分享图标
// 	success: function() {
// 		// 用户确认分享后执行的回调函数
// 	},
// 	cancel: function() {
// 		// 用户取消分享后执行的回调函数
// 	}
// });
//
// wx.onMenuShareQZone({
// 	title: '', // 分享标题
// 	desc: '', // 分享描述
// 	link: '', // 分享链接
// 	imgUrl: '', // 分享图标
// 	success: function() {
// 		// 用户确认分享后执行的回调函数
// 	},
// 	cancel: function() {
// 		// 用户取消分享后执行的回调函数
// 	}
// });
