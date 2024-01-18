//!Array & Loops

//a single variable which holds more than one value
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//each value has an index number associated to it - index number starts from 0
let fastFood = [
    "Pizza", // index number 0
    "Burgers", //index 1
    "Ribs", //index2
    "Chicken" //index 3
];
//first item = 0
//last value = element - 1
console.log(fastFood[3]);
console.log(fastFood);
console.log(fastFood.length);

fastFood.push("Noodles"); // adds item to array
fastFood[1] = "Salad"; //replace index number 1 value with new value
fastFood.pop(); //removes last item

fastFood.forEach(food => {
    console.log(food);
});

let colours = [
    "Red",
    "Blue",
    "Green"
];

colours.splice(1, 0, "Orange", "Yellow", "Purple"); //adds items to an array, 
//first condition is at what index point you want to add/remove item, 
//second condition is how many items you want to remove
// Third statement is the items you want to add to the array.

// ! For loop
//use the for loop when the number of iteration is certain.
for (let i = 0; i < colours.length; i++) {
    console.log(colours[i]);
    
}

