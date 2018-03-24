// 1 ***********************

console.log(hello);
var hello = 'world';

// Result: undefined - hello not assigned before console.log but is declared

// 2 ***********************

var needle = 'haystack';
test();

function test(){
	var needle = 'magnet';
	console.log(needle);
}

// Result: magnet - var needle inside test is scoped to the function

// 3 ***********************

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

// Result: super cool - print() not invoked

// 4 ***********************

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

// Result: chicken, half-chicken - console.logged values of food is scoped inside and outside of function

// 5 ***********************

mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

// Result: TypeError - mean() declared as variable and not a function

// 6 ***********************

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

// Result:
// undefined - genre not assigned before invoking first console.log
// rock - scoped var inside function
// r&b - scoped var inside function
// disco - scoped var outside function

// 7 ***********************

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

// Result:
// san jose - var assigned before console.log
// seattle - scoped var inside func
// burbank - scoped var inside func
// san jose - scoped var outside func