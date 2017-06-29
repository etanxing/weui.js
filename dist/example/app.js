/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _fastclick = __webpack_require__(1);

	var _fastclick2 = _interopRequireDefault(_fastclick);

	var _weui = __webpack_require__(2);

	var _weui2 = _interopRequireDefault(_weui);

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import axios from 'axios';

	_fastclick2.default.attach(document.body); // import 'weui';


	if (!get('jobs-page')) {
	  var maximum = 2,
	      minimum = 1,
	      $agents = (0, _util2.default)('.weui-panel'),
	      randomnumber;
	  // /* tab */
	  // weui.tab('#tab',{
	  //     defaultIndex: 0
	  // });
	  // 表单提交
	  get('formSubmitBtn').addEventListener('click', function () {
	    //Get answers
	    var items = ['english', 'age', 'work', 'workAu', 'edu', 'c1', 'c2', 'c3', 'c4', 'auExp', 'auExpSp'],
	        score = items.map(gv).reduce(ac, 0),
	        home = get('home'),
	        $prefix = (0, _util2.default)('#prefix'),
	        result = get('result'),
	        $result = (0, _util2.default)('#result'),
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
	        response = score >= 60 ? responses[0] : score == 55 ? responses[1] : responses[2];
	    randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

	    var loading = _weui2.default.loading('提交中...');

	    setTimeout(function () {
	      //window.location.href = 'https://mp.weixin.qq.com/s?__biz=MzA4Nzk5NDAzNg==&tempkey=I4opQsuNrD8nfyJDtYpxMt07w%2Fkuga0ws%2BwBu7gGfPsMwZUTL1lnq1Lzv2nsS86fBP%2BHVheF7wCezfjsajbfBcoqJgCsWfKtHG84py62Mj9SzvzogPprZlqqs0JqBRwU%2B7AZOohs5AZ1LwFPypxF0Q%3D%3D&chksm=07e614f130919de7a789b83298f30a2537a1e21e73dfda71d1ff10f92b46ebfcec5f0fe2c0bb&scene=0&previewkey=zRCwLzVrSsUq7DZ8Ks4IncNS9bJajjJKzz%252F0By7ITJA%253D&key=f17d8322b1674f1f5252ceb131fc515ad43c76cbd49c3c46e56897e896887a9b95751fe3cbdb41948cda2e7f1ce71a9a46d3ef238b48a8e36446915768260cb8da820b11d0f145a0ea6d4f939c693c36&ascene=0&uin=MTc4MDg5ODMwMA%3D%3D&devicetype=iMac+MacBookPro11%2C4+OSX+OSX+10.12.5+build(16F73)&version=12020810&nettype=WIFI&fontScale=100&pass_ticket=LkX5Ze7trflFuUhBgzDO%2FdrKDxGvWoWfgJdcFeY8pPbOPoj%2FVnaio%2BWUNhmD9Ubz';
	      loading.hide();
	      _weui2.default.toast('提交成功', 500);
	      result.classList.remove('hidden');
	      home.classList.add('hidden');
	      document.title = response.title + '| 澳洲技术移民在线评估(2017版)';
	      $prefix.html(response.prefix);
	      window.scroll(0, 0);

	      $result.find('.main-title').html(response.title);
	      var item = $result.find('.weui-icon_msg').addClass(response.msg);
	      response.noMsg.forEach(function (cn) {
	        item.removeClass(cn);
	      });

	      $result.find('.weui-msg__desc').html(response.subtitle);

	      if (score >= 55) {
	        $agents.eq(randomnumber - 1).removeClass('hidden');
	      }
	    }, 500);
	  });

	  get('goBack').addEventListener('click', function () {
	    result.classList.add('hidden');
	    home.classList.remove('hidden');
	    document.title = '澳洲技术移民在线评估(2017版)';
	    $agents.eq(randomnumber - 1).addClass('hidden');
	    window.scroll(0, 0);
	  });
	} else {}
	/* searchBar */
	//weui.searchBar('#searchBar');


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
	  var el = get(id);
	  return el.tagName == 'SELECT' ? el.value : el.checked;
	}

	function ac(acc, val) {
	  val = val === true ? 5 : val === false ? 0 : +val;
	  return acc + val;
	}

	function get(id) {
	  return document.getElementById(id);
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
		'use strict';

		/**
		 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
		 *
		 * @codingstandard ftlabs-jsv2
		 * @copyright The Financial Times Limited [All Rights Reserved]
		 * @license MIT License (see LICENSE.txt)
		 */

		/*jslint browser:true, node:true*/
		/*global define, Event, Node*/


		/**
		 * Instantiate fast-clicking listeners on the specified layer.
		 *
		 * @constructor
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		function FastClick(layer, options) {
			var oldOnClick;

			options = options || {};

			/**
			 * Whether a click is currently being tracked.
			 *
			 * @type boolean
			 */
			this.trackingClick = false;


			/**
			 * Timestamp for when click tracking started.
			 *
			 * @type number
			 */
			this.trackingClickStart = 0;


			/**
			 * The element being tracked for a click.
			 *
			 * @type EventTarget
			 */
			this.targetElement = null;


			/**
			 * X-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartX = 0;


			/**
			 * Y-coordinate of touch start event.
			 *
			 * @type number
			 */
			this.touchStartY = 0;


			/**
			 * ID of the last touch, retrieved from Touch.identifier.
			 *
			 * @type number
			 */
			this.lastTouchIdentifier = 0;


			/**
			 * Touchmove boundary, beyond which a click will be cancelled.
			 *
			 * @type number
			 */
			this.touchBoundary = options.touchBoundary || 10;


			/**
			 * The FastClick layer.
			 *
			 * @type Element
			 */
			this.layer = layer;

			/**
			 * The minimum time between tap(touchstart and touchend) events
			 *
			 * @type number
			 */
			this.tapDelay = options.tapDelay || 200;

			/**
			 * The maximum time for a tap
			 *
			 * @type number
			 */
			this.tapTimeout = options.tapTimeout || 700;

			if (FastClick.notNeeded(layer)) {
				return;
			}

			// Some old versions of Android don't have Function.prototype.bind
			function bind(method, context) {
				return function() { return method.apply(context, arguments); };
			}


			var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
			var context = this;
			for (var i = 0, l = methods.length; i < l; i++) {
				context[methods[i]] = bind(context[methods[i]], context);
			}

			// Set up event handlers as required
			if (deviceIsAndroid) {
				layer.addEventListener('mouseover', this.onMouse, true);
				layer.addEventListener('mousedown', this.onMouse, true);
				layer.addEventListener('mouseup', this.onMouse, true);
			}

			layer.addEventListener('click', this.onClick, true);
			layer.addEventListener('touchstart', this.onTouchStart, false);
			layer.addEventListener('touchmove', this.onTouchMove, false);
			layer.addEventListener('touchend', this.onTouchEnd, false);
			layer.addEventListener('touchcancel', this.onTouchCancel, false);

			// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
			// layer when they are cancelled.
			if (!Event.prototype.stopImmediatePropagation) {
				layer.removeEventListener = function(type, callback, capture) {
					var rmv = Node.prototype.removeEventListener;
					if (type === 'click') {
						rmv.call(layer, type, callback.hijacked || callback, capture);
					} else {
						rmv.call(layer, type, callback, capture);
					}
				};

				layer.addEventListener = function(type, callback, capture) {
					var adv = Node.prototype.addEventListener;
					if (type === 'click') {
						adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
							if (!event.propagationStopped) {
								callback(event);
							}
						}), capture);
					} else {
						adv.call(layer, type, callback, capture);
					}
				};
			}

			// If a handler is already declared in the element's onclick attribute, it will be fired before
			// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
			// adding it as listener.
			if (typeof layer.onclick === 'function') {

				// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
				// - the old one won't work if passed to addEventListener directly.
				oldOnClick = layer.onclick;
				layer.addEventListener('click', function(event) {
					oldOnClick(event);
				}, false);
				layer.onclick = null;
			}
		}

		/**
		* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
		*
		* @type boolean
		*/
		var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

		/**
		 * Android requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


		/**
		 * iOS requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


		/**
		 * iOS 4 requires an exception for select elements.
		 *
		 * @type boolean
		 */
		var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


		/**
		 * iOS 6.0-7.* requires the target element to be manually derived
		 *
		 * @type boolean
		 */
		var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

		/**
		 * BlackBerry requires exceptions.
		 *
		 * @type boolean
		 */
		var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

		/**
		 * Determine whether a given element requires a native click.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element needs a native click
		 */
		FastClick.prototype.needsClick = function(target) {
			switch (target.nodeName.toLowerCase()) {

			// Don't send a synthetic click to disabled inputs (issue #62)
			case 'button':
			case 'select':
			case 'textarea':
				if (target.disabled) {
					return true;
				}

				break;
			case 'input':

				// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
				if ((deviceIsIOS && target.type === 'file') || target.disabled) {
					return true;
				}

				break;
			case 'label':
			case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
			case 'video':
				return true;
			}

			return (/\bneedsclick\b/).test(target.className);
		};


		/**
		 * Determine whether a given element requires a call to focus to simulate click into element.
		 *
		 * @param {EventTarget|Element} target Target DOM element
		 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
		 */
		FastClick.prototype.needsFocus = function(target) {
			switch (target.nodeName.toLowerCase()) {
			case 'textarea':
				return true;
			case 'select':
				return !deviceIsAndroid;
			case 'input':
				switch (target.type) {
				case 'button':
				case 'checkbox':
				case 'file':
				case 'image':
				case 'radio':
				case 'submit':
					return false;
				}

				// No point in attempting to focus disabled inputs
				return !target.disabled && !target.readOnly;
			default:
				return (/\bneedsfocus\b/).test(target.className);
			}
		};


		/**
		 * Send a click event to the specified element.
		 *
		 * @param {EventTarget|Element} targetElement
		 * @param {Event} event
		 */
		FastClick.prototype.sendClick = function(targetElement, event) {
			var clickEvent, touch;

			// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
			if (document.activeElement && document.activeElement !== targetElement) {
				document.activeElement.blur();
			}

			touch = event.changedTouches[0];

			// Synthesise a click event, with an extra attribute so it can be tracked
			clickEvent = document.createEvent('MouseEvents');
			clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
			clickEvent.forwardedTouchEvent = true;
			targetElement.dispatchEvent(clickEvent);
		};

		FastClick.prototype.determineEventType = function(targetElement) {

			//Issue #159: Android Chrome Select Box does not open with a synthetic click event
			if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
				return 'mousedown';
			}

			return 'click';
		};


		/**
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.focus = function(targetElement) {
			var length;

			// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
			if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
				length = targetElement.value.length;
				targetElement.setSelectionRange(length, length);
			} else {
				targetElement.focus();
			}
		};


		/**
		 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
		 *
		 * @param {EventTarget|Element} targetElement
		 */
		FastClick.prototype.updateScrollParent = function(targetElement) {
			var scrollParent, parentElement;

			scrollParent = targetElement.fastClickScrollParent;

			// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
			// target element was moved to another parent.
			if (!scrollParent || !scrollParent.contains(targetElement)) {
				parentElement = targetElement;
				do {
					if (parentElement.scrollHeight > parentElement.offsetHeight) {
						scrollParent = parentElement;
						targetElement.fastClickScrollParent = parentElement;
						break;
					}

					parentElement = parentElement.parentElement;
				} while (parentElement);
			}

			// Always update the scroll top tracker if possible.
			if (scrollParent) {
				scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
			}
		};


		/**
		 * @param {EventTarget} targetElement
		 * @returns {Element|EventTarget}
		 */
		FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

			// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
			if (eventTarget.nodeType === Node.TEXT_NODE) {
				return eventTarget.parentNode;
			}

			return eventTarget;
		};


		/**
		 * On touch start, record the position and scroll offset.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchStart = function(event) {
			var targetElement, touch, selection;

			// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
			if (event.targetTouches.length > 1) {
				return true;
			}

			targetElement = this.getTargetElementFromEventTarget(event.target);
			touch = event.targetTouches[0];

			if (deviceIsIOS) {

				// Only trusted events will deselect text on iOS (issue #49)
				selection = window.getSelection();
				if (selection.rangeCount && !selection.isCollapsed) {
					return true;
				}

				if (!deviceIsIOS4) {

					// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
					// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
					// with the same identifier as the touch event that previously triggered the click that triggered the alert.
					// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
					// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
					// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
					// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
					// random integers, it's safe to to continue if the identifier is 0 here.
					if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
						event.preventDefault();
						return false;
					}

					this.lastTouchIdentifier = touch.identifier;

					// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
					// 1) the user does a fling scroll on the scrollable layer
					// 2) the user stops the fling scroll with another tap
					// then the event.target of the last 'touchend' event will be the element that was under the user's finger
					// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
					// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
					this.updateScrollParent(targetElement);
				}
			}

			this.trackingClick = true;
			this.trackingClickStart = event.timeStamp;
			this.targetElement = targetElement;

			this.touchStartX = touch.pageX;
			this.touchStartY = touch.pageY;

			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				event.preventDefault();
			}

			return true;
		};


		/**
		 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.touchHasMoved = function(event) {
			var touch = event.changedTouches[0], boundary = this.touchBoundary;

			if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
				return true;
			}

			return false;
		};


		/**
		 * Update the last position.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchMove = function(event) {
			if (!this.trackingClick) {
				return true;
			}

			// If the touch has moved, cancel the click tracking
			if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
				this.trackingClick = false;
				this.targetElement = null;
			}

			return true;
		};


		/**
		 * Attempt to find the labelled control for the given label element.
		 *
		 * @param {EventTarget|HTMLLabelElement} labelElement
		 * @returns {Element|null}
		 */
		FastClick.prototype.findControl = function(labelElement) {

			// Fast path for newer browsers supporting the HTML5 control attribute
			if (labelElement.control !== undefined) {
				return labelElement.control;
			}

			// All browsers under test that support touch events also support the HTML5 htmlFor attribute
			if (labelElement.htmlFor) {
				return document.getElementById(labelElement.htmlFor);
			}

			// If no for attribute exists, attempt to retrieve the first labellable descendant element
			// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
			return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
		};


		/**
		 * On touch end, determine whether to send a click event at once.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onTouchEnd = function(event) {
			var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

			if (!this.trackingClick) {
				return true;
			}

			// Prevent phantom clicks on fast double-tap (issue #36)
			if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
				this.cancelNextClick = true;
				return true;
			}

			if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
				return true;
			}

			// Reset to prevent wrong click cancel on input (issue #156).
			this.cancelNextClick = false;

			this.lastClickTime = event.timeStamp;

			trackingClickStart = this.trackingClickStart;
			this.trackingClick = false;
			this.trackingClickStart = 0;

			// On some iOS devices, the targetElement supplied with the event is invalid if the layer
			// is performing a transition or scroll, and has to be re-detected manually. Note that
			// for this to function correctly, it must be called *after* the event target is checked!
			// See issue #57; also filed as rdar://13048589 .
			if (deviceIsIOSWithBadTarget) {
				touch = event.changedTouches[0];

				// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
				targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
				targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
			}

			targetTagName = targetElement.tagName.toLowerCase();
			if (targetTagName === 'label') {
				forElement = this.findControl(targetElement);
				if (forElement) {
					this.focus(targetElement);
					if (deviceIsAndroid) {
						return false;
					}

					targetElement = forElement;
				}
			} else if (this.needsFocus(targetElement)) {

				// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
				// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
				if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
					this.targetElement = null;
					return false;
				}

				this.focus(targetElement);
				this.sendClick(targetElement, event);

				// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
				// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
				if (!deviceIsIOS || targetTagName !== 'select') {
					this.targetElement = null;
					event.preventDefault();
				}

				return false;
			}

			if (deviceIsIOS && !deviceIsIOS4) {

				// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
				// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
				scrollParent = targetElement.fastClickScrollParent;
				if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
					return true;
				}
			}

			// Prevent the actual click from going though - unless the target node is marked as requiring
			// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
			if (!this.needsClick(targetElement)) {
				event.preventDefault();
				this.sendClick(targetElement, event);
			}

			return false;
		};


		/**
		 * On touch cancel, stop tracking the click.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.onTouchCancel = function() {
			this.trackingClick = false;
			this.targetElement = null;
		};


		/**
		 * Determine mouse events which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onMouse = function(event) {

			// If a target element was never set (because a touch event was never fired) allow the event
			if (!this.targetElement) {
				return true;
			}

			if (event.forwardedTouchEvent) {
				return true;
			}

			// Programmatically generated events targeting a specific element should be permitted
			if (!event.cancelable) {
				return true;
			}

			// Derive and check the target element to see whether the mouse event needs to be permitted;
			// unless explicitly enabled, prevent non-touch click events from triggering actions,
			// to prevent ghost/doubleclicks.
			if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

				// Prevent any user-added listeners declared on FastClick element from being fired.
				if (event.stopImmediatePropagation) {
					event.stopImmediatePropagation();
				} else {

					// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
					event.propagationStopped = true;
				}

				// Cancel the event
				event.stopPropagation();
				event.preventDefault();

				return false;
			}

			// If the mouse event is permitted, return true for the action to go through.
			return true;
		};


		/**
		 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
		 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
		 * an actual click which should be permitted.
		 *
		 * @param {Event} event
		 * @returns {boolean}
		 */
		FastClick.prototype.onClick = function(event) {
			var permitted;

			// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
			if (this.trackingClick) {
				this.targetElement = null;
				this.trackingClick = false;
				return true;
			}

			// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
			if (event.target.type === 'submit' && event.detail === 0) {
				return true;
			}

			permitted = this.onMouse(event);

			// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
			if (!permitted) {
				this.targetElement = null;
			}

			// If clicks are permitted, return true for the action to go through.
			return permitted;
		};


		/**
		 * Remove all FastClick's event listeners.
		 *
		 * @returns {void}
		 */
		FastClick.prototype.destroy = function() {
			var layer = this.layer;

			if (deviceIsAndroid) {
				layer.removeEventListener('mouseover', this.onMouse, true);
				layer.removeEventListener('mousedown', this.onMouse, true);
				layer.removeEventListener('mouseup', this.onMouse, true);
			}

			layer.removeEventListener('click', this.onClick, true);
			layer.removeEventListener('touchstart', this.onTouchStart, false);
			layer.removeEventListener('touchmove', this.onTouchMove, false);
			layer.removeEventListener('touchend', this.onTouchEnd, false);
			layer.removeEventListener('touchcancel', this.onTouchCancel, false);
		};


		/**
		 * Check whether FastClick is needed.
		 *
		 * @param {Element} layer The layer to listen on
		 */
		FastClick.notNeeded = function(layer) {
			var metaViewport;
			var chromeVersion;
			var blackberryVersion;
			var firefoxVersion;

			// Devices that don't support touch don't need FastClick
			if (typeof window.ontouchstart === 'undefined') {
				return true;
			}

			// Chrome version - zero for other browsers
			chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

			if (chromeVersion) {

				if (deviceIsAndroid) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// Chrome 32 and above with width=device-width or less don't need FastClick
						if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}

				// Chrome desktop doesn't need FastClick (issue #15)
				} else {
					return true;
				}
			}

			if (deviceIsBlackBerry10) {
				blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

				// BlackBerry 10.3+ does not require Fastclick library.
				// https://github.com/ftlabs/fastclick/issues/251
				if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
					metaViewport = document.querySelector('meta[name=viewport]');

					if (metaViewport) {
						// user-scalable=no eliminates click delay.
						if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
							return true;
						}
						// width=device-width (or less than device-width) eliminates click delay.
						if (document.documentElement.scrollWidth <= window.outerWidth) {
							return true;
						}
					}
				}
			}

			// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
			if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			// Firefox version - zero for other browsers
			firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

			if (firefoxVersion >= 27) {
				// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

				metaViewport = document.querySelector('meta[name=viewport]');
				if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
					return true;
				}
			}

			// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
			// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
			if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
				return true;
			}

			return false;
		};


		/**
		 * Factory method for creating a FastClick object
		 *
		 * @param {Element} layer The layer to listen on
		 * @param {Object} [options={}] The options to override the defaults
		 */
		FastClick.attach = function(layer, options) {
			return new FastClick(layer, options);
		};


		if (true) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return FastClick;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = FastClick.attach;
			module.exports.FastClick = FastClick;
		} else {
			window.FastClick = FastClick;
		}
	}());


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _toast = __webpack_require__(3);

	var _toast2 = _interopRequireDefault(_toast);

	var _loading = __webpack_require__(9);

	var _loading2 = _interopRequireDefault(_loading);

	var _tab = __webpack_require__(11);

	var _tab2 = _interopRequireDefault(_tab);

	var _form = __webpack_require__(12);

	var _form2 = _interopRequireDefault(_form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import uploader from './uploader/uploader';
	// import {picker, datePicker} from './picker/picker';
	// import gallery from './gallery/gallery';
	// import slider from './slider/slider';

	// import actionSheet from './actionSheet/actionSheet';
	// import topTips from './topTips/topTips';
	// import searchBar from './searchBar/searchBar';
	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	*
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	*
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	*
	*       http://opensource.org/licenses/MIT
	*
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// import dialog from './dialog/dialog';
	// import alert from './alert/alert';
	// import confirm from './confirm/confirm';
	exports.default = {
	    // dialog,
	    // alert,
	    // confirm,
	    toast: _toast2.default,
	    loading: _loading2.default,
	    // actionSheet,
	    // topTips,
	    // searchBar,
	    tab: _tab2.default,
	    form: _form2.default
	    // uploader,
	    // picker,
	    // datePicker,
	    // gallery,
	    // slider
	};
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _toast = __webpack_require__(8);

	var _toast2 = _interopRequireDefault(_toast);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	* 
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	* 
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	* 
	*       http://opensource.org/licenses/MIT
	* 
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	var _sington = void 0;

	/**
	 * toast 一般用于操作成功时的提示场景
	 * @param {string} content toast的文字
	 * @param {Object|function=} options 配置项或回调
	 * @param {number=} [options.duration=3000] 多少毫秒后关闭toast
	 * @param {function=} options.callback 关闭后的回调
	 * @param {string=} options.className 自定义类名
	 *
	 * @example
	 * weui.toast('操作成功', 3000);
	 * weui.toast('操作成功', {
	 *     duration: 3000,
	 *     className: 'custom-classname',
	 *     callback: function(){ console.log('close') }
	 * });
	 */
	function toast() {
	    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (_sington) return _sington;

	    if (typeof options === 'number') {
	        options = {
	            duration: options
	        };
	    }
	    if (typeof options === 'function') {
	        options = {
	            callback: options
	        };
	    }

	    options = _util2.default.extend({
	        content: content,
	        duration: 3000,
	        callback: _util2.default.noop,
	        className: ''
	    }, options);

	    var $toastWrap = (0, _util2.default)(_util2.default.render(_toast2.default, options));
	    var $toast = $toastWrap.find('.weui-toast');
	    var $mask = $toastWrap.find('.weui-mask');

	    (0, _util2.default)('body').append($toastWrap);
	    $toast.addClass('weui-animate-fade-in');
	    $mask.addClass('weui-animate-fade-in');

	    setTimeout(function () {
	        $mask.addClass('weui-animate-fade-out');
	        $toast.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
	            $toastWrap.remove();
	            _sington = false;
	            options.callback();
	        });
	    }, options.duration);

	    _sington = $toastWrap[0];
	    return $toastWrap[0];
	}
	exports.default = toast;
	module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
	                                                                                                                                                                                                                                                                              * Tencent is pleased to support the open source community by making WeUI.js available.
	                                                                                                                                                                                                                                                                              * 
	                                                                                                                                                                                                                                                                              * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	                                                                                                                                                                                                                                                                              * 
	                                                                                                                                                                                                                                                                              * Licensed under the MIT License (the "License"); you may not use this file except in compliance
	                                                                                                                                                                                                                                                                              * with the License. You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                              * 
	                                                                                                                                                                                                                                                                              *       http://opensource.org/licenses/MIT
	                                                                                                                                                                                                                                                                              * 
	                                                                                                                                                                                                                                                                              * Unless required by applicable law or agreed to in writing, software distributed under the License is
	                                                                                                                                                                                                                                                                              * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	                                                                                                                                                                                                                                                                              * either express or implied. See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                              * limitations under the License.
	                                                                                                                                                                                                                                                                              */

	__webpack_require__(5);

	var _objectAssign = __webpack_require__(6);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _balajs = __webpack_require__(7);

	var _balajs2 = _interopRequireDefault(_balajs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 其实，$ 的原型就是一个数组，拥有数组的各种方法
	// 这里只是库内部使用，所以通过文档约束，不做容错校验，达到代码最小化

	/* 判断系统 */
	function _detect(ua) {
	    var os = this.os = {},
	        android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
	    if (android) {
	        os.android = true;
	        os.version = android[2];
	    }
	}
	_detect.call(_balajs2.default, navigator.userAgent);

	(0, _objectAssign2.default)(_balajs2.default.fn, {
	    /**
	     * 只能是一个 HTMLElement 元素或者 HTMLElement 数组，不支持字符串
	     * @param {Element|Element[]} $child
	     * @returns {append}
	     */
	    append: function append($child) {
	        if (!($child instanceof HTMLElement)) {
	            $child = $child[0];
	        }
	        this.forEach(function ($element) {
	            $element.appendChild($child);
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {remove}
	     */
	    remove: function remove() {
	        this.forEach(function ($element) {
	            $element.parentNode.removeChild($element);
	        });
	        return this;
	    },
	    /**
	     *
	     * @param selector
	     * @returns {HTMLElement}
	     */
	    find: function find(selector) {
	        return (0, _balajs2.default)(selector, this);
	    },
	    /**
	     *
	     * @param {String} className
	     * @returns {addClass}
	     */
	    addClass: function addClass(className) {
	        this.forEach(function ($element) {
	            // http://caniuse.com/#search=classList
	            $element.classList.add(className);
	        });
	        return this;
	    },
	    /**
	     *
	     * @param {String} className
	     * @returns {removeClass}
	     */
	    removeClass: function removeClass(className) {
	        this.forEach(function ($element) {
	            // http://caniuse.com/#search=classList
	            $element.classList.remove(className);
	        });
	        return this;
	    },
	    /**
	     *
	     * @param index
	     * @returns {*|jQuery|HTMLElement}
	     */
	    eq: function eq(index) {
	        return (0, _balajs2.default)(this[index]);
	    },
	    /**
	     *
	     * @returns {show}
	     */
	    show: function show() {
	        this.forEach(function ($element) {
	            $element.style.display = 'block';
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {hide}
	     */
	    hide: function hide() {
	        this.forEach(function ($element) {
	            $element.style.display = 'none';
	        });
	        return this;
	    },
	    /**
	     *
	     * @param html 目前只能接受字符串
	     * @returns {html}
	     */
	    html: function html(_html) {
	        this.forEach(function ($element) {
	            $element.innerHTML = _html;
	        });
	        return this;
	    },
	    /**
	     *
	     * @param {Object} obj 目前只能接受object
	     * @returns {css}
	     */
	    css: function css(obj) {
	        var _this = this;

	        Object.keys(obj).forEach(function (key) {
	            _this.forEach(function ($element) {
	                $element.style[key] = obj[key];
	            });
	        });
	        return this;
	    },
	    /**
	     *
	     * @param eventType
	     * @param selector
	     * @param handler
	     */
	    on: function on(eventType, selector, handler) {
	        var isDelegate = typeof selector === 'string' && typeof handler === 'function';
	        if (!isDelegate) {
	            handler = selector;
	        }
	        this.forEach(function ($element) {
	            eventType.split(' ').forEach(function (event) {
	                $element.addEventListener(event, function (evt) {
	                    if (isDelegate) {
	                        // http://caniuse.com/#search=closest
	                        if (this.contains(evt.target.closest(selector))) {
	                            handler.call(evt.target, evt);
	                        }
	                    } else {
	                        handler.call(this, evt);
	                    }
	                });
	            });
	        });
	        return this;
	    },
	    /**
	     *
	     * @param {String} eventType
	     * @param {String|Function} selector
	     * @param {Function=} handler
	     * @returns {off}
	     */
	    off: function off(eventType, selector, handler) {
	        if (typeof selector === 'function') {
	            handler = selector;
	            selector = null;
	        }

	        this.forEach(function ($element) {
	            eventType.split(' ').forEach(function (event) {
	                if (typeof selector === 'string') {
	                    $element.querySelectorAll(selector).forEach(function ($element) {
	                        $element.removeEventListener(event, handler);
	                    });
	                } else {
	                    $element.removeEventListener(event, handler);
	                }
	            });
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {Number}
	     */
	    index: function index() {
	        var $element = this[0];
	        var $parent = $element.parentNode;
	        return Array.prototype.indexOf.call($parent.children, $element);
	    },
	    /**
	     * @desc 因为off方法目前不可以移除绑定的匿名函数，现在直接暴力移除所有listener
	     * @returns {offAll}
	     */
	    offAll: function offAll() {
	        var _this2 = this;

	        this.forEach(function ($element, index) {
	            var clone = $element.cloneNode(true);
	            $element.parentNode.replaceChild(clone, $element);

	            _this2[index] = clone;
	        });
	        return this;
	    },
	    /**
	     *
	     * @returns {*}
	     */
	    val: function val() {
	        var _arguments = arguments;

	        if (arguments.length) {
	            this.forEach(function ($element) {
	                $element.value = _arguments[0];
	            });
	            return this;
	        }
	        return this[0].value;
	    },
	    /**
	     *
	     * @returns {*}
	     */
	    attr: function attr() {
	        var _arguments2 = arguments;

	        if (_typeof(arguments[0]) == 'object') {
	            var attrsObj = arguments[0];
	            var that = this;
	            Object.keys(attrsObj).forEach(function (attr) {
	                that.forEach(function ($element) {
	                    $element.setAttribute(attr, attrsObj[attr]);
	                });
	            });
	            return this;
	        }

	        if (typeof arguments[0] == 'string' && arguments.length < 2) {
	            return this[0].getAttribute(arguments[0]);
	        }

	        this.forEach(function ($element) {
	            $element.setAttribute(_arguments2[0], _arguments2[1]);
	        });
	        return this;
	    }
	});

	(0, _objectAssign2.default)(_balajs2.default, {
	    extend: _objectAssign2.default,
	    /**
	     * noop
	     */
	    noop: function noop() {},
	    /**
	     * render
	     * 取值：<%= variable %>
	     * 表达式：<% if {} %>
	     * 例子：
	     *  <div>
	     *    <div class="weui-mask"></div>
	     *    <div class="weui-dialog">
	     *    <% if(typeof title === 'string'){ %>
	     *           <div class="weui-dialog__hd"><strong class="weui-dialog__title"><%=title%></strong></div>
	     *    <% } %>
	     *    <div class="weui-dialog__bd"><%=content%></div>
	     *    <div class="weui-dialog__ft">
	     *    <% for(var i = 0; i < buttons.length; i++){ %>
	     *        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_<%=buttons[i]['type']%>"><%=buttons[i]['label']%></a>
	     *    <% } %>
	     *    </div>
	     *    </div>
	     *  </div>
	     * A very simple template engine
	     * @param {String} tpl
	     * @param {Object=} data
	     * @returns {String}
	     */
	    render: function render(tpl, data) {
	        var code = 'var p=[];with(this){p.push(\'' + tpl.replace(/[\r\t\n]/g, ' ').split('<%').join('\t').replace(/((^|%>)[^\t]*)'/g, '$1\r').replace(/\t=(.*?)%>/g, '\',$1,\'').split('\t').join('\');').split('%>').join('p.push(\'').split('\r').join('\\\'') + '\');}return p.join(\'\');';
	        return new Function(code).apply(data);
	    },
	    /**
	     * getStyle 获得元素计算后的样式值
	     * (from http://stackoverflow.com/questions/2664045/how-to-get-an-html-elements-style-values-in-javascript)
	     */
	    getStyle: function getStyle(el, styleProp) {
	        var value,
	            defaultView = (el.ownerDocument || document).defaultView;
	        // W3C standard way:
	        if (defaultView && defaultView.getComputedStyle) {
	            // sanitize property name to css notation
	            // (hypen separated words eg. font-Size)
	            styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
	            return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
	        } else if (el.currentStyle) {
	            // IE
	            // sanitize property name to camelCase
	            styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
	                return letter.toUpperCase();
	            });
	            value = el.currentStyle[styleProp];
	            // convert other units to pixels on IE
	            if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
	                return function (value) {
	                    var oldLeft = el.style.left,
	                        oldRsLeft = el.runtimeStyle.left;
	                    el.runtimeStyle.left = el.currentStyle.left;
	                    el.style.left = value || 0;
	                    value = el.style.pixelLeft + 'px';
	                    el.style.left = oldLeft;
	                    el.runtimeStyle.left = oldRsLeft;
	                    return value;
	                }(value);
	            }
	            return value;
	        }
	    }
	});

	exports.default = _balajs2.default;
	module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	// element-closest | CC0-1.0 | github.com/jonathantneal/closest

	(function (ElementProto) {
		if (typeof ElementProto.matches !== 'function') {
			ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
				var element = this;
				var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
				var index = 0;

				while (elements[index] && elements[index] !== element) {
					++index;
				}

				return Boolean(elements[index]);
			};
		}

		if (typeof ElementProto.closest !== 'function') {
			ElementProto.closest = function closest(selector) {
				var element = this;

				while (element && element.nodeType === 1) {
					if (element.matches(selector)) {
						return element;
					}

					element = element.parentNode;
				}

				return null;
			};
		}
	})(window.Element.prototype);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, $) {
		$ = (function(document, s_addEventListener, s_querySelectorAll) {
			function $(s, context, bala) {
				bala = Object.create($.fn);

				s && bala.push.apply(bala, // if s is truly then push the following
					s[s_addEventListener] // if arg is node or window,
						? [s] // then pass [s]
						: "" + s === s // else if arg is a string
							? /</.test(s) // if the string contains "<" (if HTML code is passed)
								// then parse it and return node.children
								// use 'addEventListener' (HTMLUnknownElement) if content is not presented
								? ((context = document.createElement(context || s_addEventListener)).innerHTML = s
									, context.children)
								: context // else if context is truly
									? ((context = $(context)[0]) // if context element is found
										? context[s_querySelectorAll](s) // then select element from context
										: bala) // else pass [] (context isn't found)
									: document[s_querySelectorAll](s) // else select elements globally
							: typeof s == 'function' // else if function is passed
								// if DOM is ready
								// readyState[7] means readyState value is "interactive" or "complete" (not "loading")
								? document.readyState[7]
									? s() // then run given function
									: document[s_addEventListener]('DOMContentLoaded', s) // else wait for DOM ready
								: s); // else guessing that s variable is array-like Object

				return bala;
			}

			$.fn = [];

			$.one = function(s, context) {
				return $(s, context)[0] || null;
			};

			return $;
		})(document, 'addEventListener', 'querySelectorAll');


		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return $;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module == 'object' && module.exports) {
			module.exports = $;
		} else {
			root.$ = $;
		}
	})(this);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"<%= className %>\"> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class=\"weui-icon_toast weui-icon-success-no-circle\"></i> <p class=weui-toast__content><%=content%></p> </div> </div> ";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _loading = __webpack_require__(10);

	var _loading2 = _interopRequireDefault(_loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	* 
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	* 
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	* 
	*       http://opensource.org/licenses/MIT
	* 
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	var _sington = void 0;

	/**
	 * loading
	 * @param {string} content loading的文字
	 * @param {object=} options 配置项
	 * @param {string=} options.className 自定义类名
	 *
	 * @example
	 * var loading = weui.loading('loading', {
	 *     className: 'custom-classname'
	 * });
	 * setTimeout(function () {
	 *     loading.hide(function() {
	 *          console.log('`loading` has been hidden');
	 *      });
	 * }, 3000);
	 */
	function loading() {
	    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (_sington) return _sington;

	    options = _util2.default.extend({
	        content: content,
	        className: ''
	    }, options);

	    var $loadingWrap = (0, _util2.default)(_util2.default.render(_loading2.default, options));
	    var $loading = $loadingWrap.find('.weui-toast');
	    var $mask = $loadingWrap.find('.weui-mask');

	    function _hide(callback) {
	        _hide = _util2.default.noop; // 防止二次调用导致报错

	        $mask.addClass('weui-animate-fade-out');
	        $loading.addClass('weui-animate-fade-out').on('animationend webkitAnimationEnd', function () {
	            $loadingWrap.remove();
	            _sington = false;
	            callback && callback();
	        });
	    }
	    function hide(callback) {
	        _hide(callback);
	    }

	    (0, _util2.default)('body').append($loadingWrap);
	    $loading.addClass('weui-animate-fade-in');
	    $mask.addClass('weui-animate-fade-in');

	    _sington = $loadingWrap[0];
	    _sington.hide = hide;
	    return _sington;
	}
	exports.default = loading;
	module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"weui-loading_toast <%= className %>\"> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class=\"weui-loading weui-icon_toast\"></i> <p class=weui-toast__content><%=content%></p> </div> </div> ";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * tab tab导航栏
	 * @param {string} selector tab的selector
	 * @param {object=} options 配置项
	 * @param {number=} [options.defaultIndex=0] 初始展示的index
	 * @param {function=} options.onChange 点击tab时，返回对应的index
	 *
	 * @example
	 * #### html
	 * ```html
	 * <div class="weui-tab" id="tab">
	 *     <div class="weui-navbar">
	 *         <div class="weui-navbar__item">反馈</div>
	 *         <div class="weui-navbar__item">表单</div>
	 *         <div class="weui-navbar__item">上传</div>
	 *         <div class="weui-navbar__item">其它</div>
	 *     </div>
	 *     <div class="weui-tab__panel">
	 *         <div class="weui-tab__content">反馈页</div>
	 *         <div class="weui-tab__content">表单页</div>
	 *         <div class="weui-tab__content">上传页</div>
	 *         <div class="weui-tab__content">其它页</div>
	 *     </div>
	 * </div>
	 * ```
	 *
	 * #### js
	 * ```javascript
	 * weui.tab('#tab',{
	 *     defaultIndex: 0,
	 *     onChange: function(index){
	 *         console.log(index);
	 *     }
	 * });
	 * ```
	 */
	function tab(selector) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var $eles = (0, _util2.default)(selector);
	    options = _util2.default.extend({
	        defaultIndex: 0,
	        onChange: _util2.default.noop
	    }, options);

	    $eles.forEach(function (ele) {
	        var $tab = (0, _util2.default)(ele);
	        var $tabItems = $tab.find('.weui-navbar__item, .weui-tabbar__item');
	        var $tabContents = $tab.find('.weui-tab__content');

	        $tabItems.eq(options.defaultIndex).addClass('weui-bar__item_on');
	        $tabContents.eq(options.defaultIndex).show();

	        $tabItems.on('click', function () {
	            var $this = (0, _util2.default)(this),
	                index = $this.index();

	            $tabItems.removeClass('weui-bar__item_on');
	            $this.addClass('weui-bar__item_on');

	            $tabContents.hide();
	            $tabContents.eq(index).show();

	            options.onChange.call(this, index);
	        });
	    });

	    return this;
	} /*
	  * Tencent is pleased to support the open source community by making WeUI.js available.
	  * 
	  * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	  * 
	  * Licensed under the MIT License (the "License"); you may not use this file except in compliance
	  * with the License. You may obtain a copy of the License at
	  * 
	  *       http://opensource.org/licenses/MIT
	  * 
	  * Unless required by applicable law or agreed to in writing, software distributed under the License is
	  * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	  * either express or implied. See the License for the specific language governing permissions and
	  * limitations under the License.
	  */

	exports.default = tab;
	module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _topTips = __webpack_require__(13);

	var _topTips2 = _interopRequireDefault(_topTips);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	* 
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	* 
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	* 
	*       http://opensource.org/licenses/MIT
	* 
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	function _findCellParent(ele) {
	    if (!ele || !ele.classList) return null;
	    if (ele.classList.contains('weui-cell')) return ele;
	    return _findCellParent(ele.parentNode);
	}
	function _validate($input, $form, regexp) {
	    var input = $input[0],
	        val = $input.val();

	    if (input.tagName == 'INPUT' || input.tagName == 'TEXTAREA') {
	        var reg = input.getAttribute('pattern') || '';

	        if (input.type == 'radio') {
	            var radioInputs = $form.find('input[type="radio"][name="' + input.name + '"]');
	            for (var i = 0, len = radioInputs.length; i < len; ++i) {
	                if (radioInputs[i].checked) return null;
	            }
	            return 'empty';
	        } else if (input.type == 'checkbox') {
	            if (reg) {
	                var checkboxInputs = $form.find('input[type="checkbox"][name="' + input.name + '"]');
	                var regs = reg.replace(/[{\s}]/g, '').split(',');
	                var count = 0;

	                if (regs.length != 2) {
	                    throw input.outerHTML + ' regexp is wrong.';
	                }

	                checkboxInputs.forEach(function (checkboxInput) {
	                    if (checkboxInput.checked) ++count;
	                });

	                if (!count) return 'empty';

	                if (regs[1] === '') {
	                    // {0,}
	                    if (count >= parseInt(regs[0])) {
	                        return null;
	                    } else {
	                        return 'notMatch';
	                    }
	                } else {
	                    // {0,2}
	                    if (parseInt(regs[0]) <= count && count <= parseInt(regs[1])) {
	                        return null;
	                    } else {
	                        return 'notMatch';
	                    }
	                }
	            } else {
	                return input.checked ? null : 'empty';
	            }
	        } else if (reg) {
	            if (/^REG_/.test(reg)) {
	                if (!regexp) throw 'RegExp ' + reg + ' is empty.';

	                reg = reg.replace(/^REG_/, '');
	                if (!regexp[reg]) throw 'RegExp ' + reg + ' has not found.';

	                reg = regexp[reg];
	            }
	            return new RegExp(reg).test(val) ? null : !$input.val().length ? 'empty' : 'notMatch';
	        } else if (!$input.val().length) {
	            return 'empty';
	        } else {
	            return null;
	        }
	    } else if (val.length) {
	        // 有输入值
	        return null;
	    }

	    return 'empty';
	}

	/**
	 * 表单校验
	 * @param {string} selector 表单的selector
	 * @param {function} callback 校验后的回调
	 * @param {Object=} options 配置项
	 * @param {object=} options.regexp 表单所需的正则表达式
	 *
	 * @example
	 * ##### 普通input的HTML
	 * ```html
	 * <input type="tel" required pattern="[0-9]{11}" placeholder="输入你现在的手机号" emptyTips="请输入手机号" notMatchTips="请输入正确的手机号">
	 * <input type="text" required pattern="REG_IDNUM" placeholder="输入你的身份证号码" emptyTips="请输入身份证号码" notMatchTips="请输入正确的身份证号码">
	 * ```
	 * - required 表示需要校验
	 * - pattern 表示校验的正则，不填则进行为空校验。当以REG_开头时，则获取校验时传入的正则。如`pattern="REG_IDNUM"`，则需要在调用相应方法时传入`{regexp:{IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/}}`，详情请看下面`checkIfBlur`和`validate`
	 * - 报错的wording会从 emptyTips | notMatchTips | tips | placeholder 里获得
	 * <br>
	 *
	 * ##### radio
	 * radio需要检验，只需把参数写在同一表单下，同name的第一个元素即可。
	 * ```html
	 * <input type="radio" value="male" name="sex" required tips="请选择性别" />
	 * <input type="radio" value="female" name="sex" />
	 * ```
	 * <br>
	 *
	 * ##### checkbox
	 * checkbox需要校验，只需把参数写在同一表单下，同name的第一个元素即可。
	 * pattern 规定选择个数，用法与正则一致，例如：
	 * ```html
	 * <input type="checkbox" name="assistance" value="黄药师" required pattern="{1,2}" tips="请勾选1-2个敲码助手" />
	 * <input type="checkbox" name="assistance" value="欧阳锋" />
	 * <input type="checkbox" name="assistance" value="段智兴" />
	 * <input type="checkbox" name="assistance" value="洪七公" />
	 * ```
	 * - {1,}   至少选择1个
	 * - {1,2}  选择1-2个
	 * - 这里不会出现{0,}这种情况，因为有required就表示必选。否则直接去掉required即可。
	 * <br>
	 *
	 * ``` js
	 * // weui.form.validate('#form', function(error){ console.log(error);}); // error: {dom:[Object], msg:[String]}
	 * weui.form.validate('#form', function (error) {
	 *     if (!error) {
	 *         var loading = weui.loading('提交中...');
	 *         setTimeout(function () {
	 *             loading.hide();
	 *             weui.toast('提交成功', 3000);
	 *         }, 1500);
	 *     }
	 *     // return true; // 当return true时，不会显示错误
	 * }, {
	 *     regexp: {
	 *         IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
	 *         VCODE: /^.{4}$/
	 *     }
	 * });
	 * ```
	 */
	function validate(selector) {
	    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util2.default.noop;
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    var $eles = (0, _util2.default)(selector);

	    $eles.forEach(function (ele) {
	        var $form = (0, _util2.default)(ele);
	        var $requireds = $form.find('[required]');
	        if (typeof callback != 'function') callback = showErrorTips;

	        for (var i = 0, len = $requireds.length; i < len; ++i) {
	            var $required = $requireds.eq(i),
	                errorMsg = _validate($required, $form, options.regexp),
	                error = { ele: $required[0], msg: errorMsg };
	            if (errorMsg) {
	                if (!callback(error)) showErrorTips(error);
	                return;
	            }
	        }
	        callback(null);
	    });

	    return this;
	}

	/**
	 * checkIfBlur 当表单的input失去焦点时校验
	 * @param {string} selector 表单的selector
	 * @param {Object=} options 配置项
	 * @param {object=} options.regexp 表单所需的正则表达式
	 *
	 * @example
	 * weui.form.checkIfBlur('#form', {
	 *     regexp: {
	 *         IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
	 *         VCODE: /^.{4}$/
	 *     }
	 * });
	 */
	function checkIfBlur(selector) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var $eles = (0, _util2.default)(selector);

	    $eles.forEach(function (ele) {
	        var $form = (0, _util2.default)(ele);
	        $form.find('[required]').on('blur', function () {
	            // checkbox 和 radio 不做blur检测，以免误触发
	            if (this.type == 'checkbox' || this.type == 'radio') return;

	            var $this = (0, _util2.default)(this);
	            if ($this.val().length < 1) return; // 当空的时候不校验，以防不断弹出toptips

	            var errorMsg = _validate($this, $form, options.regexp);
	            if (errorMsg) {
	                showErrorTips({
	                    ele: $this[0],
	                    msg: errorMsg
	                });
	            }
	        }).on('focus', function () {
	            hideErrorTips(this);
	        });
	    });

	    return this;
	}

	/**
	 * showErrorTips 显示错误提示
	 * @param {Object} error 错误数据
	 * @param {string} error.ele 出错了的dom元素
	 * @param {string} error.msg 出错了的msg。会根据此`msg`找到对应的`Tips`（比如`msg`是`empty`），那么`ele`上的`emptyTips`就会以`topTips`显示
	 *
	 * @example
	 * weui.form.showErrorTips({
	 *     ele: document.getElementById("xxxInput")
	 *     msg: 'empty'
	 * });
	 */
	function showErrorTips(error) {
	    if (error) {
	        var $ele = (0, _util2.default)(error.ele),
	            msg = error.msg,
	            tips = $ele.attr(msg + 'Tips') || $ele.attr('tips') || $ele.attr('placeholder');
	        if (tips) (0, _topTips2.default)(tips);

	        if (error.ele.type == 'checkbox' || error.ele.type == 'radio') return;

	        var cellParent = _findCellParent(error.ele);
	        if (cellParent) cellParent.classList.add('weui-cell_warn');
	    }
	}

	/**
	 * hideErrorTips 隐藏错误提示
	 * @param {Object} ele dom元素
	 *
	 * @example
	 * weui.form.hideErrorTips(document.getElementById("xxxInput"));
	 */
	function hideErrorTips(ele) {
	    var cellParent = _findCellParent(ele);
	    if (cellParent) cellParent.classList.remove('weui-cell_warn');
	}

	exports.default = {
	    showErrorTips: showErrorTips,
	    hideErrorTips: hideErrorTips,
	    validate: validate,
	    checkIfBlur: checkIfBlur
	};
	module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _util = __webpack_require__(4);

	var _util2 = _interopRequireDefault(_util);

	var _topTips = __webpack_require__(14);

	var _topTips2 = _interopRequireDefault(_topTips);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	* Tencent is pleased to support the open source community by making WeUI.js available.
	* 
	* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
	* 
	* Licensed under the MIT License (the "License"); you may not use this file except in compliance
	* with the License. You may obtain a copy of the License at
	* 
	*       http://opensource.org/licenses/MIT
	* 
	* Unless required by applicable law or agreed to in writing, software distributed under the License is
	* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
	* either express or implied. See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	var _toptips = null;

	/**
	 * toptips 顶部报错提示
	 * @param {string} content 报错的文字
	 * @param {number|function|object=} options 多少毫秒后消失|消失后的回调|配置项
	 * @param {number=} [options.duration=3000] 多少毫秒后消失
	 * @param {string=} options.className 自定义类名
	 * @param {function=} options.callback 消失后的回调
	 *
	 * @example
	 * weui.topTips('请填写正确的字段');
	 * weui.topTips('请填写正确的字段', 3000);
	 * weui.topTips('请填写正确的字段', function(){ console.log('close') });
	 * weui.topTips('请填写正确的字段', {
	 *     duration: 3000,
	 *     className: 'custom-classname',
	 *     callback: function(){ console.log('close') }
	 * });
	 * 
	 * // 主动关闭
	 * var $topTips = weui.topTips('请填写正确的字段');
	 * $topTips.hide(function() {
	 *      console.log('`topTips` has been hidden');
	 * });
	 */
	function topTips(content) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (typeof options === 'number') {
	        options = {
	            duration: options
	        };
	    }

	    if (typeof options === 'function') {
	        options = {
	            callback: options
	        };
	    }

	    options = _util2.default.extend({
	        content: content,
	        duration: 3000,
	        callback: _util2.default.noop,
	        className: ''
	    }, options);

	    var $topTips = (0, _util2.default)(_util2.default.render(_topTips2.default, options));
	    function _hide(callback) {
	        _hide = _util2.default.noop; // 防止二次调用导致报错

	        $topTips.remove();
	        callback && callback();
	        options.callback();
	        _toptips = null;
	    }
	    function hide(callback) {
	        _hide(callback);
	    }

	    (0, _util2.default)('body').append($topTips);
	    if (_toptips) {
	        clearTimeout(_toptips.timeout);
	        _toptips.hide();
	    }

	    _toptips = {
	        hide: hide
	    };
	    _toptips.timeout = setTimeout(hide, options.duration);

	    $topTips[0].hide = hide;
	    return $topTips[0];
	}
	exports.default = topTips;
	module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"weui-toptips weui-toptips_warn <%= className %>\" style=display:block><%= content %></div> ";

/***/ })
/******/ ]);