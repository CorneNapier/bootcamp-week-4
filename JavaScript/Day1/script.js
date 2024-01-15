// console.log("Welcome to JavaScript");

// single line comment

/* 
Multi line comment
*/

/*console.log("Display a message to console");
console.warn("Displays a warning message to console");
console.error("displays a error message to console");
alert("Creates a message box");
console.clear(); // clears content of the console*/

console.log("Welcome to JavaScript");
console.error("Welcome to JavaScript");
console.warn("Welcome to JavaScript");
console.clear();

// Ways of creating a variable
let favouriteMeal = "pizza"; //let allows you to change the variable, has block-scope
const number = 5; //has block-scope, it needs to be initialized when declared, value cannot be changed (read only)
var happyPlace = "Beach"; //doesnt have block-scope, old way of declaring variable, not recommended


if (favouriteMeal == "pizza") {
    favouriteMeal = "yes";
    console.log(favouriteMeal)
}

console.log(number * 5);
console.clear();

//! ***  TASK ***
 
 /*
 1. I would like you to Create a variable called fastFood and assign the value Pizza,
    another variable called favColor with the value Red and a third
    variable called favDrink with the value lemonade.
 
 2. Console log the favDrink variable to show it's value.
 
 3. Change the value of the favFood variable to "Pasta", console log it's value.
 
 4. Create a variable, call it whatever you want and assign the value of your brithday.*/


let favFood = "Pizza";
let favColor = "Red";
let favDrink = "Lemonade";

console.log(favDrink);

favFood = "Pasta";
console.log(favFood);

const dob = "20/09/1993";
console.log(dob);
