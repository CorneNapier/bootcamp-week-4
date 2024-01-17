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
//used true for checking condition
switch (true) {
    case testScore >= 75:
        console.log(`Distinction`)
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