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
/*let personName = prompt("What is you name?")

function personGreeting(personName) {
    alert(`Hello ${personName}, how are you today?`);
}

personGreeting(personName);*/


//! Scope in JavaScript
  //block scope
    //let, const

  //local scope
    //var, let, const

  //global scope
    //if you declare a variable outside a function, it has global scope.


  //!Functions that call another functions

  function double(num) {
    return num*2;
  }

  function quadruple(num2) {
    return double(num2)*2;
  }

  //Function can be hoisted - Called before they are declared
  scope();

  function scope() {
    console.log("Example of hoisting.");
  }

  //Arrow function
    //omit the return statement - it has explicit return
    //omit the function keyword
    //when there is only one parameter, brackets is optional.
let add2 = num => num * 2;
let multiply = (x, y) => x * y;


/*
!Tasks:
1: Write a function that takes in a first name and a surname as arguments and returns a message greeting them.
2: Write a function that takes in a string as an argument and sorts the string into alphabetical order and returns the result.
3: Write a cash machine / atm function that takes in a withdrawal amount and a pin number as an argument and compares the pin and withdrawal amount against a stored pin and account balance. If the pin matches and the balance is sufficient approve the transaction, if not decline the transaction.
*/


