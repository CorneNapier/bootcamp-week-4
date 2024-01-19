//!Function
//function is a block of code used to perform a specific task
//function is executed when something invokes it (calls it)

//declaring a function
function greeting() {
    console.log("Hello, welcome to JavaScript!");
}

//call or invoke a function
greeting();

//User login/logout function

let userOnline = true;

function userStatus() {

    if (userOnline) {
        console.log("User Signed In!");
        console.log(userOnline);
    } else {
        console.log("User Signed Out!");
        console.log(userOnline);
    }

}

userStatus();

//!Function with parameters/arguments

//parameters are defined when we declare the function. Data that is expected.
function atm(accountNumber, amount) {
    console.log(`Account Number: ${accountNumber}. Amount: ${amount}`);
}

//Arguments are the data we pass to the function when we call it
atm(135332553, 300);

function sum(num1, num2) {
    return num1+num2;
}

console.log(sum(20, 10));

console.clear();

//task
function personGreeting(personName) {
    console.log(`Hello ${personName}, how are you today?`);
}

personGreeting("Corné");



//! Scope in JavaScript
  //block scope
  //local scope
  //global scope