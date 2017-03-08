// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.
var add=function(x,y){
	return x+y
}
function sum(x,y){
	return(x+y)
}



// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.
var avg=function(x,y,z){
	return (x+y+z)/3
}
function avg(a,b,c)



// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLenght(a){
	return a.length
}


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.
function



// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
function greet(x){
	return "Hell, "+ x + "!"
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
//THere were several bricks* laying between * * that * when touched
function madlib(pluralNoun1, adjective, pluralNoun2, verb1){
	return "There were several " + pluralNoun1 + "laying between " + adjective + "" + pluralNoun2 + " that " + verb1 + " when touched."
}

madlib()
