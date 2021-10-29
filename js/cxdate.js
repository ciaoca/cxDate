/*!
 * cxDate
 * 
 * @version 1.1
 * @author ciaoca
 * @email ciaoca@gmail.com
 * @site https://github.com/ciaoca/cxDate
 * @license Released under the MIT license
 */
(function(window, undefined) {
  var plugins = {
    language: {
      // 月份名称缩写
      monthAbbr: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      // 月份完整名称
      monthName: ['January','February','March','April','May','June','July','August','September','October','November','December'],
      // 星期名称缩写
      weekAbbr: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
      // 星期完整名称
      weekName: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      // 上午、下午小写
      amName: ['am','pm'],
      // 上午、下午大写
      AMName: ['AM','PM']
    },
    reg: {
      isYear: /^\d{4}$/,
      isTime: /^\d{1,2}(\:\d{1,2}){1,2}$/
    },
    isDateObject: function(obj) {
      return Object.prototype.toString.call(obj) === '[object Date]' && typeof obj.getTime === 'function' && !isNaN(obj.getTime());
    },
  };

  // 补充前置零
  plugins.fillLeadZero = function(value, num) {
    var str = String(value);

    if (str.length < num) {
      str = Array(num - str.length).fill(0).join('') + value;
    };

    return str;
  };

  // 解析日期
  plugins.parseDate = function(value) {
    var self = this;
    var theDate = new Date();
    var tags;

    if (self.reg.isYear.test(value)) {
      theDate.setFullYear(parseInt(value, 10));

    } else if (/^\d+$/.test(value) || (typeof value === 'number' && isFinite(value))) {
      theDate.setTime(parseInt(value, 10));

    } else if (typeof value === 'string') {
      if (self.reg.isTime.test(value)) {
        tags = value.split(':');

        if (tags.length === 2) {
          tags.push(0);
        };

        theDate.setHours(tags[0], tags[1], tags[2]);

      } else {
        theDate = new Date(value);
      };
    };

    if (!self.isDateObject(theDate) || isNaN(theDate.getTime())) {
      theDate = new Date();
    };

    return theDate;
  };

  // 获取周数
  plugins.getWeekNum = function(dateObj) {
    var self = this;
    var curTime = dateObj.getTime();
    var yearFirstDate = new Date(dateObj.getFullYear(), 0, 1, 0, 0, 0, 0);
    var weekFirstTime = yearFirstDate.getTime();
    var weekDay = yearFirstDate.getDay();
    var weekNum = 0;

    if (weekDay === 0) {
      weekDay = 7;
    };

    var weekOffset = weekDay > 4 ? -1 : 0;

    if (weekDay > 4) {
      weekFirstTime += (8 - weekDay) * 86400000;
    } else {
      weekFirstTime += (1 - weekDay) * 86400000;
    };

    if (curTime < weekFirstTime) {
      weekNum = self.getWeekNum(new Date(dateObj.getFullYear() - 1, 11, 31));
    } else {
      weekNum = Math.floor((curTime - weekFirstTime) / 86400000) + 1;
      weekNum = Math.ceil(weekNum / 7);
    };

    return weekNum;
  };

  plugins.getAttr = function(dateObj) {
    var self = this;
    var attr = {};
    var timestamp = dateObj.getTime();

    attr.YYYY = dateObj.getFullYear();
    attr.YY = String(attr.YYYY).slice(-2);

    var yearFirstDate = new Date(attr.YYYY, 0, 1, 0, 0, 0, 0);
    var yearFirstTime = dateObj.getTime();

    attr.M = dateObj.getMonth();
    attr.MMM = self.language.monthAbbr[attr.M];
    attr.MMMM = self.language.monthName[attr.M];
    attr.M += 1;
    attr.MM = self.fillLeadZero(attr.M, 2);

    attr.D = dateObj.getDate();
    attr.DD = self.fillLeadZero(attr.D, 2);
    attr.DDD = Math.floor((timestamp - yearFirstTime) / 86400000) + 1;
    attr.DDDD = self.fillLeadZero(attr.DDD, 3);

    attr.d = dateObj.getDay();
    attr.ddd = self.language.weekAbbr[attr.d];
    attr.dddd = self.language.weekName[attr.d];

    attr.w = self.getWeekNum(dateObj);
    attr.ww = self.fillLeadZero(attr.w, 2);

    attr.H = dateObj.getHours();
    attr.HH = self.fillLeadZero(attr.H, 2);
    attr.h = attr.H > 12 ? attr.H - 12: attr.H;
    attr.hh = self.fillLeadZero(attr.h, 2);
    attr.m = dateObj.getMinutes();
    attr.mm = self.fillLeadZero(attr.m, 2);
    attr.s = dateObj.getSeconds();
    attr.ss = self.fillLeadZero(attr.s, 2);

    if (attr.H > 12) {
      attr.A = self.language.AMName[1];
      attr.a = self.language.amName[1];
    } else {
      attr.A = self.language.AMName[0];
      attr.a = self.language.amName[0];
    };

    return attr;
  };

  plugins.format = function(attr, style) {
    var str = style;
    var keys = ['YYYY','YY','MMMM','MMM','MM','M','DDDD','DDD','DD','D','dddd','ddd','d','ww','w','HH','H','hh','h','mm','m','ss','s','A','a'];
    var reg = new RegExp('(' + keys.join('|') + ')', 'g');

    // 转义边界符号
    str = str.replace(/([\{\}])/g, '\\$1');

    // 转义关键词
    str = str.replace(reg, function(match, p1) {
      return '{{' + p1 + '}}';
    });

    // 还原转义字符
    str = str.replace(/\\\{\{(.)\}\}/g, '$1');

    // 替换关键词
    for (var i = keys.length - 1; i >= 0; i--) {
      str = str.replace(new RegExp('{{' + keys[i] + '}}', 'g'), attr[keys[i]]);
    };

    // 还原转义内容
    str = str.replace(/\\(.)/g, '$1');

    return str;
  };

  plugins.decode = function(style, time) {
    var self = this;

    if (typeof style !== 'string') {
      console.warn('[cxDate] Missing parameters.');
      return false;
    };

    time = self.parseDate(time);

    var attr = self.getAttr(time);
    var text = self.format(attr, style);

    return text;
  };

  var cxDate = function(style, time) {
    return plugins.decode.apply(plugins, arguments);
  };

  cxDate.setLanguage = function(options) {
    Object.assign(plugins.language, options);
  };

  window.cxDate = cxDate;
})(window);