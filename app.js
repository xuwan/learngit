//app.js
App({
	onLaunch: function () {
		//调用API从本地缓存中获取数据
	},
	onShow: function () {
	},
	onHide: function () {
	},
	onError: function (msg) {
		console.log(msg)
	},
	util: require('we7/resource/js/util.js'),
	tabBar: {
		"color": "#123",
		"selectedColor": "#1ba9ba",
		"borderStyle": "#1ba9ba",
		"backgroundColor": "#fff",
		"list": [
			{
				"pagePath": "/we7/pages/index/index",
				"iconPath": "/we7/resource/icon/home.png",
				"selectedIconPath": "/we7/resource/icon/homeselect.png",
				"text": "首页"
			},
			{
				"pagePath": "/we7_wxappdemo/pages/todo/todo",
				"iconPath": "/we7/resource/icon/todo.png",
				"selectedIconPath": "/we7/resource/icon/todoselect.png",
				"text": "ToDo"
			},
			{
				"pagePath": "/we7_wxappdemo/pages/pay/pay",
				"iconPath": "/we7/resource/icon/user.png",
				"selectedIconPath": "/we7/resource/icon/userselect.png",
				"text": "支付"
			},
			{
				"pagePath": "/rcdonkey_signup/pages/publish/publish",
				"iconPath": "/we7/resource/icon/user.png",
				"selectedIconPath": "/we7/resource/icon/userselect.png",
				"text": "报名"
			}
		]
	},
	globalData:{
		userInfo : null,
	},
	siteInfo: {
		'uniacid' : '8',
		'acid' : '8',
		'uniacid' : '1108',
		'acid' : '100384',
		'version' : '1.0.0',
		'siteroot' : 'http://172.16.1.100/weengine/pros/app/index.php',
	}
});