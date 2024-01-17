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