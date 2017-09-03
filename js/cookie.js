//cookies 处理函数
function addCookie(name, value, expiresHours) {
	var setcookie = name + "=" + encodeURI(value);
	if(expiresHours > 0) {
		var curdate = new Date();
		curdate.setTime(curdate.getTime() + expiresHours * 3600 * 1000);
		setcookie = setcookie + ";expires=" + curdate.toGMTString()
	}
	setcookie = setcookie + ";path=/";
	document.cookie = setcookie;
	return true;
}

function getCookie(name) {
	var strcookie = document.cookie;
	var arrcookie = strcookie.split(";");
	for(var i = 0; i < arrcookie.length; i++) {
		var arr = arrcookie[i].split("=");
		arr[0] = arr[0].trim();
		if(arr[0] == name) {
			return decodeURI(arr[1])
		}
	};
	return "";
}

function deleteCookie(name) {
	var curdate = new Date();
	curdate.setTime(curdate.getTime() - 10000);
	document.cookie = name + "=eg;expires=" + curdate.toGMTString() + ";path=/"
}

function deleteAllCookie() {
	var curdate = new Date();
	curdate.setTime(curdate.getTime() - 10000);
	var delcookies = document.cookie;
	var arrcookies = delcookies.split(";");
	for(var i = 0; i < arrcookies.length; i++) {
		var arr = arrcookies[i].split("=");
		document.cookie = arr[0] + "=eg;expires=" + curdate.toGMTString() + ";path=/"
	}
}

function isPc() {
	var userAgentInfo = navigator.userAgent;
	var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
	var flag = true;
	for(var v = 0; v < Agents.length; v++) {
		if(userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}