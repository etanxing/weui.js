// import 'weui';
import FastClick from 'fastclick';
import weui from '../src/weui';
import $ from '../src/util/util';
import axios from 'axios';

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
		result = get('result'),
		$result = $('#result'),
		responses = [{
			title: '恭喜！您符合澳洲技术移民资格',
			subtitle: '想进一步了解，请联系下面的澳洲注册移民代理<a href="https://www.mara.gov.au/">(Migration Agents Registration Authority)</a>',
			msg: 'weui-icon-success',
			noMsg: ['weui-icon-warn', 'weui-icon-info']
		}, {
			title: '您的条件接近澳洲技术移民资格',
			subtitle: '想进一步了解，请联系下面的澳洲注册移民代理<a href="https://www.mara.gov.au/">(Migration Agents Registration Authority)</a>',
			msg: 'weui-icon-info',
			noMsg: ['weui-icon-success', 'weui-icon-warn']
		}, {
			title: '您目前的条件不符合澳洲技术移民资格',
			subtitle: '澳大利亚有多种家庭亲属移民签证，可以尝试让您的亲属进行评估（右上角分享）',
			msg: 'weui-icon-warn',
			noMsg: ['weui-icon-success', 'weui-icon-info']
		}],
		response = score >= 60 ? responses[0] : (score == 55 ? responses[1] : responses[2]);
	randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

	var loading = weui.loading('提交中...')

	setTimeout(function() {
		loading.hide();
		weui.toast('提交成功', 500)
		result.classList.remove('hidden')
		home.classList.add('hidden')
    window.scroll(0, 0)

		$result.find('h2').html(response.title)
		var item = $result.find('.weui-icon_msg').addClass(response.msg)
		response.noMsg.forEach(function(cn) {
			item.removeClass(cn)
		})

		$result.find('.weui-msg__desc').html(response.subtitle)

    if (score >=55) {
      	$agents.eq(randomnumber - 1).removeClass('hidden')
    }
	}, 1500)
});

get('goBack').addEventListener('click', function() {
	result.classList.add('hidden')
	home.classList.remove('hidden')

	$agents.eq(randomnumber - 1).addClass('hidden')
	window.scroll(0, 0)
})

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

axios.get('http://47.93.50.34:3000/api/getconfig?url=' + location.href.split('#')[0])
	.then(function(response) {
		var data = response.data;
		data.debug = true
		data.jsApiList = ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
		wx.config(data);

		wx.error(function(res) {
			console.log(res)
		});
	})
	.catch(function(error) {
		console.log(error);
	});

wx.onMenuShareTimeline({
	title: 'Hahah', // 分享标题
	link: 'wsau.oss-cn-shanghai.aliyuncs.com', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
	imgUrl: 'http://img5.imgtn.bdimg.com/it/u=2939280666,784546577&fm=26&gp=0.jpg', // 分享图标
	success: function() {
		// 用户确认分享后执行的回调函数
	},
	cancel: function() {
		// 用户取消分享后执行的回调函数
	}
});

wx.onMenuShareAppMessage({
	title: '', // 分享标题
	desc: '', // 分享描述
	link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
	imgUrl: '', // 分享图标
	type: '', // 分享类型,music、video或link，不填默认为link
	dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
	success: function() {
		// 用户确认分享后执行的回调函数
	},
	cancel: function() {
		// 用户取消分享后执行的回调函数
	}
});

wx.onMenuShareQQ({
	title: '', // 分享标题
	desc: '', // 分享描述
	link: '', // 分享链接
	imgUrl: '', // 分享图标
	success: function() {
		// 用户确认分享后执行的回调函数
	},
	cancel: function() {
		// 用户取消分享后执行的回调函数
	}
});

wx.onMenuShareWeibo({
	title: '', // 分享标题
	desc: '', // 分享描述
	link: '', // 分享链接
	imgUrl: '', // 分享图标
	success: function() {
		// 用户确认分享后执行的回调函数
	},
	cancel: function() {
		// 用户取消分享后执行的回调函数
	}
});

wx.onMenuShareQZone({
	title: '', // 分享标题
	desc: '', // 分享描述
	link: '', // 分享链接
	imgUrl: '', // 分享图标
	success: function() {
		// 用户确认分享后执行的回调函数
	},
	cancel: function() {
		// 用户取消分享后执行的回调函数
	}
});
