console.log('\'Allo \'Allo!');


 
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