
// way 1 using bind method
var multiply = function(x,y){
	return x*y;
}

var multipleOfTwo = multiply.bind(this,2);
console.log(multipleOfTwo(3));


// way 2 using closures
var add = function(x){
	return function(y){
		return x+y;
	}
}

var addOfTwo = add(2);
console.log(addOfTwo(3));