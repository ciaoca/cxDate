/*!
 * cxDate 1.0
 * http://code.ciaoca.com/
 * https://github.com/ciaoca/cxDate
 * E-mail: ciaoca@gmail.com
 * Released under the MIT license
 * Date: 2014-03-25
 *
 * @param	{string}		style	格式化的样式
 * @param	{string|int}	time	需要格式化的时间
 */
(function(window, undefined) {
	var cxDate = function(style, time){
		return cxDate.decode.apply(cxDate, arguments);
	};

	cxDate.DEFAULTS = {
		language : {
			monthAbbr : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			monthName : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			weekAbbr : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			weekName : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			amName : ['am', 'pm'],
			AMName : ['AM', 'PM']
		}
	};

	cxDate.getLanguage = function(){
		var lang;

		if (typeof cxDateLanguages === 'object') {
			var obj = cxDateLanguages;

			if (typeof navigator.language === 'string') {
				lang = navigator.language.toLowerCase();
			} else if (typeof navigator.browserLanguage === 'string') {
				lang = navigator.browserLanguage.toLowerCase();
			};

			if (typeof lang === 'string' && typeof obj[lang] === 'object') {
				lang = obj[lang];
			} else {
				lang = this.DEFAULTS.language;
			};

		} else {
			lang = this.DEFAULTS.language;
		};
		
		return lang;
	};

	cxDate.language = cxDate.getLanguage();

	cxDate.getAttr = function(date){
		var _this = this;
		var attr = {};

		attr.YYYY = date.getFullYear();
		attr.YY = attr.YYYY.toString(10).slice(-2);
		attr.M = date.getMonth() + 1;
		attr.MM = (attr.M < 10) ? '0' + attr.M : attr.M;
		attr.MMM = function(n){
			return _this.language.monthAbbr[n];
		};
		attr.MMMM = function(n){
			return _this.language.monthName[n];
		};
		attr.D = date.getDate();
		attr.DD = (attr.D < 10) ? '0' + attr.D : attr.D;

		attr.d = date.getDay();
		attr.dd = attr.d + 1;
		attr.ddd = function(n){
			return _this.language.weekAbbr[n];
		};
		attr.dddd = function(n){
			return _this.language.weekName[n];
		};

		attr.H = date.getHours();
		attr.HH = (attr.H < 10) ? '0' + attr.H : attr.H;
		attr.h = (attr.H > 12) ? attr.H-12 : attr.H;
		attr.hh = (attr.h < 10) ? '0' + attr.h : attr.h;
		attr.m = date.getMinutes();
		attr.mm = (attr.m < 10) ? '0' + attr.m : attr.m;
		attr.s = date.getSeconds();
		attr.ss = (attr.s < 10) ? '0' + attr.s : attr.s;

		if(attr.H > 12){
			attr.A = this.language.AMName[1];
			attr.a = this.language.amName[1];
		}else{
			attr.A = this.language.AMName[0];
			attr.a = this.language.amName[0];
		};

		return attr;
	};

	cxDate.format = function(attr, style){
		var str = style;
		var _monthAbbr = '{;}'
		var _monthName = '{;;}'
		var _weekAbbr = '{.}'
		var _weekName = '{..}'

		str = str.replace(/YYYY/g, attr.YYYY);
		str = str.replace(/YY/g, attr.YY);
		str = str.replace(/MMMM/g, _monthName);
		str = str.replace(/MMM/g, _monthAbbr);
		str = str.replace(/MM/g, attr.MM);
		str = str.replace(/M/g, attr.M);
		str = str.replace(/DD/g, attr.DD);
		str = str.replace(/D/g, attr.D);
		str = str.replace(/dddd/g, _weekName);
		str = str.replace(/ddd/g, _weekAbbr);
		str = str.replace(/dd/g, attr.dd);
		str = str.replace(/d/g, attr.d);
		str = str.replace(/HH/g, attr.HH);
		str = str.replace(/H/g, attr.H);
		str = str.replace(/hh/g, attr.hh);
		str = str.replace(/h/g, attr.h);
		str = str.replace(/mm/g, attr.mm);
		str = str.replace(/m/g, attr.m);
		str = str.replace(/ss/g, attr.ss);
		str = str.replace(/s/g, attr.s);
		str = str.replace(/A/g, attr.A);
		str = str.replace(/a/g, attr.a);
		
		str = str.replace(new RegExp(_monthName, 'g'), attr.MMMM(attr.M));
		str = str.replace(new RegExp(_monthAbbr, 'g'), attr.MMM(attr.M));
		str = str.replace(new RegExp(_weekName, 'g'), attr.dddd(attr.d));
		str = str.replace(new RegExp(_weekAbbr, 'g'), attr.ddd(attr.d));

		return  str;
	};

	cxDate.decode = function(style, time){
		if (typeof style !== 'string') {
			return false;
		};

		if (typeof time === 'string') {
			time = time.replace(/[\.-]/g, '/');
			time = Date.parse(time);

		} else if (typeof time === 'number') {
			time = parseInt(time, 10);

		} else {
			time = new Date();
			time = time.getTime();
		};

		if (isNaN(time)) {
			return false;
		};

		var date = new Date();

		date.setTime(time);

		if (isNaN(date.getFullYear())) {
			return false;
		};

		var attr = this.getAttr(date);

		text = this.format(attr, style);

		return text;
	};

	window.cxDate = cxDate;

})(window);