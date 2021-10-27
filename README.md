# cxDate

cxDate 是一个用于格式化日期的插件，通过自定义样式来格式化日期，支持处理字符串及时间戳格式的日期值。

**版本：**
* cxDate v1.1

Demo: http://ciaoca.github.io/cxDate/



## 使用方法

### 载入 JavaScript 文件

```html
<script src="cxdate.js"></script>
```
### 调用 cxCalendar

```javascript
cxDate('YYYY-MM-DD');
cxDate('YYYY-MM-DD', 1577808000000);
cxDate('YYYY-MM-DD', '1/1/2020');

// 自定义语言，完整配置可参考源码 language
cxDate.setLanguage({
  monthAbbr: [..],
  monthName: [..],
  weekAbbr: [..],
  weekName: [..],
  amName: [..],
  AMName: [..]
});
```


## 参数说明

名称 | 默认值 | 说明
--- | --- | ---
style | null | 必要参数，日期格式化的样式
time | new Date() | 可选参数，需要格式化的时间，默认使用当前时间。<br>可传入日期字符串，如：'2014-03-20 20:35:00', '3/29/2014'<br>可传入时间戳（毫秒）



## style 属性参数

字符 | 说明 | 返回值示例
--- | --- | ---
YY | 年份，仅末尾 2 位数字 | 如：08 或 14
YYYY | 年份，完整 4 位数字 | 如：2008 或 2014
M | 月份 | 1 到 12
MM | 月份，带前导零 | 01 到 12
MMM | 月份，缩写名称 | 'Jan', 'Feb', ..
MMMM | 月份，完整名称 | 'January', 'February', ..
D | 月份中的第几天 | 1 到 31
DD | 月份中的第几天，带前导零 | 01 到 31
DDD | 年份中的第几天 | 1 到 366
DDDD | 年份中的第几天，带前导零 | 001 到 366
d | 星期的第几天 | 0（周日）到 6（周六）
ddd | 星期的第几天，缩写名称 | 'Sun', 'Mon', ..
dddd | 星期的第几天，完整名称 | 'Sunday', 'Monday', ..
w | 年份中的第几周 | 1 到 53
ww | 年份中的第几周，带前导零 | 01 到 53
H | 小时，24 小时格式 | 0 到 23
HH | 小时，24 小时格式，带前导零 | 00 到 23
h | 小时，12 小时格式 | 1 到 12
hh | 小时，12 小时格式，带前导零 | 01 到 12
m | 分钟 | 0 到 59
mm | 分钟，带前导零 | 00 到 59
s | 秒数 | 0 到 59
ss | 秒数，带前导零 | 00 到 59
A | 大写的上午或下午 | AM 或 PM
a | 小写的上午或下午 | am 或 pm

