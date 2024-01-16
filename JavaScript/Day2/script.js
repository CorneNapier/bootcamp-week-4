let num1 = 100; //number value
let firstName = "Corné"; //string value
console.log(typeof num1);
console.log(typeof firstName);


let cold = true; //boolean has two values - true, false
console.log(typeof cold);

if (cold) {
    console.log("It is very cold!");
}

// null is used to declare a value as empty
let a = null;
console.log(a);
//undefine is a variable which is not defined
let b;
console.log(b);

/*undefined means a variable has been declared but has not yet been assigned a value, 
whereas null is an assignment value, meaning that a variable has been declared and 
given the value of null */

let num2 = 1484718734817047170941847n; //n at the end of the number makes it a big integer(bigInt)
console.log(typeof num2);
console.clear();
// task - search on type conversion in JS

/* Answer: 
Converting Strings to Numbers
Converting Numbers to Strings
Converting Dates to Numbers
Converting Numbers to Dates
Converting Booleans to Numbers - true=1, false=0
Converting Numbers to Booleans */

//number to strings
let f = 3;
console.log(typeof f);
console.log(typeof String(f));

let g = String(100);
console.log(typeof g);

// Why should you do type conversion?
// The reason to use type conversion is that, any user input will be in string data type

//convert to number
let p = "20";
console.log(Number(p));

console.log(Number(false));

//convert to boolean
console.log(Boolean(0)); //false
console.log(Boolean(1)); //true

console.log(Boolean("JavaScript")) //true
console.log(Boolean("")); //false
console.clear();

//TRY THESE IN YOUR JS FILE:

// after the string all the + will act as concatenation
console.log('1' + 2); //12
console.log('1' + 2 + true); //12true
console.log('12' + undefined); //12undefined
console.log('12' + null); //12null
console.log(2 +'1'); //21
console.log(2 + true); //3



//Automatic type conversion is happening - Coercion
console.log('12' / 2); //6
console.log(2 * '2');  //4
console.log('10' / 2); //5
console.log('10' % 2); //0
console.log(true * 7); //7

let lang = "JavaScript";

//String in JavaScript
let firstMessage = "Welcome to JavaScript";
let secondMessage = 'Welcome to JavaScript';
let thirdMessage = `Welcome to ${lang}`; //string interpolation
console.log(firstMessage);
console.log(secondMessage);
console.log(thirdMessage);