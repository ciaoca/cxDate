#cxDate

cxDate 是一个用于格式化日期的插件，通过自定义样式来格式化日期，支持处理字符串及时间戳格式的日期值。

**版本：**

* cxDate v1.0

文档：http://code.ciaoca.com/jquery/cxdate/

##【参数说明】
<table>
	<thead>
		<tr>
			<th width="80">名称</th>
			<th width="100">默认值</th>
			<th>说明</th>
		</tr>
	</thead>
	<tr>
		<td>style</td>
		<td>null</td>
		<td>必要参数，日期格式化的样式</td>
	</tr>
	<tr>
		<td>time</td>
		<td>new Date()</td>
		<td>可选参数，需要格式化的时间。默认使用当前时间。
			<p>可传入一个日期字符串，如："2014-03-20 20:35:00'"、"Aug 9, 1995"、"'3/29/2014"</p>
			<p>可传入一个时间戳（距离 1970-1-1 00:00:00 相差的毫秒数）</p>
			<p>注意：时间戳为毫秒数，PHP 的 time() 及 strtotime() 方法返回的为秒数，需乘以 1000 之后再进行处理。</p>
		</td>
	</tr>
</table>

##【data 属性参数】
<table>
	<thead>
		<tr>
			<th width="80">字符</th>
			<th>说明</th>
			<th>返回值示例</th>
		</tr>
	</thead>
	<tr>
		<td>YY</td>
		<td>年份，仅末尾 2 位数字</td>
		<td>如：08 或 14</td>
	</tr>
	<tr>
		<td>YYYY</td>
		<td>年份，完整 4 位数字</td>
		<td>如：2008 或 2014</td>
	</tr>
	<tr>
		<td>M</td>
		<td>月份，数字</td>
		<td>1 到 12</td>
	</tr>
	<tr>
		<td>MM</td>
		<td>月份，数字带前导零</td>
		<td>01 到 12</td>
	</tr>
	<tr>
		<td>MMM</td>
		<td>月份，缩写名称，文本</td>
		<td>'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'</td>
	</tr>
	<tr>
		<td>MMMM</td>
		<td>月份，完整名称，文本</td>
		<td>'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'</td>
	</tr>
	<tr>
		<td>D</td>
		<td>月份中的第几天，数字</td>
		<td>1 到 31</td>
	</tr>
	<tr>
		<td>DD</td>
		<td>月份中的第几天，数字带前导零</td>
		<td>01 到 31</td>
	</tr>
	<tr>
		<td>d</td>
		<td>星期中的第几天，数字</td>
		<td>0（表示周日）到 6（表示周六）</td>
	</tr>
	<tr>
		<td>dd</td>
		<td>星期中的第几天，数字</td>
		<td>1（表示周一）到 7（表示周日）</td>
	</tr>
	<tr>
		<td>ddd</td>
		<td>星期中的第几天，缩写名称，文本</td>
		<td>'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'</td>
	</tr>
	<tr>
		<td>dddd</td>
		<td>星期中的第几天，完整名称，文本</td>
		<td>'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'</td>
	</tr>
	<tr>
		<td>H</td>
		<td>小时，24 小时格式，数字</td>
		<td>0 到 23</td>
	</tr>
	<tr>
		<td>HH</td>
		<td>小时，24 小时格式，数字带前导零</td>
		<td>00 到 23</td>
	</tr>
	<tr>
		<td>h</td>
		<td>小时，12 小时格式，数字</td>
		<td>1 到 12</td>
	</tr>
	<tr>
		<td>hh</td>
		<td>小时，12 小时格式，数字带前导零</td>
		<td>01 到 12</td>
	</tr>
	<tr>
		<td>m</td>
		<td>分钟，数字</td>
		<td>0 到 59</td>
	</tr>
	<tr>
		<td>mm</td>
		<td>分钟，数字带前导零</td>
		<td>00 到 59</td>
	</tr>
	<tr>
		<td>s</td>
		<td>秒数，数字</td>
		<td>0 到 59</td>
	</tr>
	<tr>
		<td>ss</td>
		<td>秒数，数字带前导零</td>
		<td>00 到 59</td>
	</tr>
	<tr>
		<td>A</td>
		<td>大写的上午和下午值，文本</td>
		<td>AM 或 PM</td>
	</tr>
	<tr>
		<td>a</td>
		<td>小写的上午和下午值，文本</td>
		<td>am 或 pm</td>
	</tr>
</table>

##【多语言配置】
###需要在 cxdate.js 之前引入
```html
<script src="cxdate.languages.js"></script>
<script src="cxdate.js"></script>
```

###配置文件说明
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