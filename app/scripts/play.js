/*
 * Desc:   Entrance of file
 * Author: fanyong@gmail.com
 */

// 主函数
function main (argument) { 	
	console.log("this a main function");
}


// 一：设置所有的checkbox为选中状态
var cbs = $('input[type=checkbox]');

for (var i = 0 ; i < cbs.length; i++){
  var item = cbs[i];
  $(item).attr('checked', 'checked');
}


// 二：设置奇数的checkbook为选中状态
var cbs = $('input[type=checkbox]');

for (var i = 0 ; i < cbs.length; i++){
  var item = cbs[i];
  if (i % 2 != 0) {
  	$(item).attr('checked', 'checked');
  };
}


// 三：给每个文本框赋一个随机生成1-10的值
var inputs = $('input[type=text]');

for(var i = 0; i < inputs.length; i++) {
	var randomPoint = Math.ceil(Math.random() * 10)
	var item = $(inputs[i]);
	item.val(randomPoint);
}