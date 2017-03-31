# cxDate

cxDate 是一个用于格式化日期的插件，通过自定义样式来格式化日期，支持处理字符串及时间戳格式的日期值。

**版本：**

* cxDate v1.0

文档：http://code.ciaoca.com/javascript/cxdate/

## 参数说明
名称|默认值|说明
---|---|---
style|null|必要参数，日期格式化的样式
time|new Date()|可选参数，需要格式化的时间。默认使用当前时间。<br>可传入一个日期字符串，如："2014-03-20 20:35:00"、"Aug 9, 1995"、"3/29/2014"<br>可传入一个时间戳（距离 1970-1-1 00:00:00 相差的毫秒数）<br>注意：时间戳为毫秒数，PHP 的 time() 及 strtotime() 方法返回的为秒数，需乘以 1000 之后再进行处理。

## data 属性参数

字符|说明|返回值示例
---|---|---
YY|年份，仅末尾 2 位数字|如：08 或 14
YYYY|年份，完整 4 位数字|如：2008 或 2014
M|月份，数字|1 到 12
MM|月份，数字带前导零|01 到 12
MMM|月份，缩写名称，文本|'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
MMMM|月份，完整名称，文本|'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
D|月份中的第几天，数字|1 到 31
DD|月份中的第几天，数字带前导零|01 到 31
d|星期中的第几天，数字|0（表示周日）到 6（表示周六）
dd|星期中的第几天，数字|1（表示周一）到 7（表示周日）
ddd|星期中的第几天，缩写名称，文本|'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
dddd|星期中的第几天，完整名称，文本|'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
H|小时，24 小时格式，数字|0 到 23
HH|小时，24 小时格式，数字带前导零|00 到 23
h|小时，12 小时格式，数字|1 到 12
hh|小时，12 小时格式，数字带前导零|01 到 12
m|分钟，数字|0 到 59
mm|分钟，数字带前导零|00 到 59
s|秒数，数字|0 到 59
ss|秒数，数字带前导零|00 到 59
A|大写的上午和下午值，文本|AM 或 PM
a|小写的上午和下午值，文本|am 或 pm

## 多语言配置

### 需要在 cxdate.js 之前引入

```html
<script src="cxdate.languages.js"></script>
<script src="cxdate.js"></script>
```

### 配置文件说明

```javascript
cxDateLanguages = {
  // 浏览器的语言，纯小写字母
  'en' : {
    // 月份名称缩写
    monthAbbr : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    // 月份完整名称
    monthName : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    // 星期名称缩写
    weekAbbr : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    // 星期完整名称
    weekName : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    // 上午、下午小写
    amName : ['am', 'pm'],
    // 上午、下午大写
    AMName : ['AM', 'PM']
  },
  'language name' : {
    monthAbbr : [...],
    monthName : [...],
    weekAbbr : [...],
    weekName : [...],
    amName : [...],
    AMName : [...]
  }
};
```
