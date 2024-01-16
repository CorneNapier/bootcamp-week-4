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

// task - search on type conversion in JS

/* Answer: 
Converting Strings to Numbers
Converting Numbers to Strings
Converting Dates to Numbers
Converting Numbers to Dates
Converting Booleans to Numbers
Converting Numbers to Booleans */