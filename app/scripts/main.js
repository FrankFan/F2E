console.log('\'Allo \'Allo!');

// js 作用域

(function a(){
	var foo = 1;

	if(true){
		foo = 2;
		for(var i = 3; i <= 5; i++){
			foo = i;
			console.log(foo);
		}
	}
})();


// 在函数中用var声明变量
var foo = function(){
	var boo = function(){
		bar = 2;
	}();
}();

console.log(bar);