function clone(myObj){ 
	if(typeof(myObj) != 'object') 
		return myObj; 
	if(myObj == null) return myObj;

	var myNewObj = {}; 
	for(var i in myObj) 
		myNewObj[i] = clone(myObj[i]); 
	return myNewObj; 
}

var a = { name: 'a', test: function(){ console.log('hi'); }, b:{ str: 'hehe'}}
var b = clone(a);
console.log(b);

console.dir(typeof('ff'));



Javascript 原型

原型是Javascript面向对象特性中的重要的概念，也是大家不太熟悉的概念。

function Person() {

}

Person.prototype.name = 'Frank';
Person.prototype.showName = function() {
	console.log(this.name);
};

var person = new Person();
person.showName();