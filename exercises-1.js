// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.
var add=function(x,y){
	return x+y
}
function sum(x,y){
	return x + y
}



// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.
function avg(x,y,z){
	return (x + y + z) / 3
}




// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength(a){
	return a.length
}
	


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.
function greaterThan(a , b){
	if (a < b) {
		return true
	} else {
		return false
	}
}



// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
function greet(a) {
	return "Hello," + a + "!"
}


// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Crush your enemies(a), see them driven(b) before you,
// and hear(c) the lamentation of the women(d)!


function madLib (a, b, c, d){
	//return "Crush your" + a + ", see them" + b + "before you, and" + c + "the lamentation of the" + d + "!"
	return `Crush your ${a} , see them driven ${b} before you, and ${c} the lamentation of the ${d} !`
}
