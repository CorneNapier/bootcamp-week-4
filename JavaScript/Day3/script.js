let weather = "foggy";

if (weather == "raining") {
    console.log("Take an umbrella!");
} else if (weather == "sunny") {
    console.log("Wear sunglasses!");
} else {
    console.log("The weather may be foggy or cloudy, wear an hoodie");
}

/* //!OPERATOR
+   addition
-   subtraction
/   devision
*   multiply
%   moduler
++  increment
--  decrement
=       assignment
==      equal too -> comparison
===     ->equal value and equal data type.
! in === both the data type and value should be equal
! in == only the value should be equal
> greater
< less than
>= greater or equal
<= less than equal
!Logical operators
&& = and
|| = or
*/

let num = 5;
let str = "";

if (num == 5 && str == "hello") {
    console.log("Hello number 5!")
} else if (num == 5 || str == "hi") {
    console.log("Hi there number 5!")
}

let age = 21;

if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("Sorry, you are not old enough to vote.");
}
console.clear();
//switch statement - useful when you have one condition being checked against multiple cases

let day = "Saturday";

switch (day) {
    case "Monday":
        console.log("Happy Monday!");
        break;
    case "Tuesday":
        console.log("Second day of the week!");
        break;
    case "Wednesday":
        console.log("Halfway through the week!")
        break;
    case "Thursday":
        console.log("Fourth day of the week!")
        break;
    case "Friday":
        console.log("Yaaay it's Friday!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It is the weekend!");
        break;

    default:
        console.log("Day not recognised, try again!");
        break;
}

//switch statement 2

let testScore = 80;
//used true for checking condition - any condition that is true will execute
switch (true) {
    case testScore >= 75:
        console.log(`Score:${testScore},  Distinction`)
        break;
    case testScore >= 60:
        console.log(`Merit`);
        break;
    case testScore >= 50:
        console.log(`Pass`);
        break;

    default:
        console.log(`Fail`);
        break;
}
console.clear()
//!Task
/*1:  Write a conditional statement to check a customer’s age at a bar. If the customer is under 18 log a message advising they are too young, otherwise ask what they would like to drink.
2: Declare a variable called "Password". Write an if statement that checks how many characters are in the password, if the password has more than 8 characters log the password to the console, if the password has less than 8 characters log to the console that the password is too short.
3: Create a variable that stores a number. Check whether the number is divisible by 3 or 5, if so log "This number is divisible by 3 or 5" to the console. Otherwise log an alternate message to the console.
4: Create a variable that stores a number. If the number is divisible by 3, log "fizz" to the console. If the number is divisible by 5 log "buzz" to the console. If the number is divisible by both 3 and 5, log "fizz buzz" to the console. Otherwise log the number to the console.*/

//Task 1
if (age < 18) {
    console.log(`Sorry, you are not allowed to buy any alcoholic drinks.`)
} else {
    console.log(`What drink would you like?`);
}

//Task 2
let password = "whuaffarwwr";

if (password.length >= 8) {
    console.log(password);
} else {
    console.log(`Password is too short, add more characters`);
}

//Task 3
let number = 30;

if (number % 3 == 0 && number % 5 == 0) {
    console.log(`Number is divisible by 3 and 5`);
} else if (number % 3 == 0 || number % 5 == 0) {
    console.log(`Number is divisible by 3 or 5`)
} else {
    console.log(`Number is not divisible by 3 or 5`);
}

//task 4
let num2 = 30;

switch (true) {
    case num2 % 3 == 0 && num2 % 5 == 0:
        console.log(`fizz buzz`);
        break;
    case num2 % 3 == 0:
        console.log(`fizz`);
        break;
    case num2 % 5 == 0:
        console.log(`buzz`);
        break;

    default:
        console.log(num2);
        break;
}