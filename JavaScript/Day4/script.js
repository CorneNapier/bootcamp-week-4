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


//task
for (let i = 0; i < 21; i++) {
    console.log(i);
}


// ! While loop

//use this loop when the number of iteration is uncertain
let num2 = 0;
while (num2 <= 20) {
    console.log(num2)
    num2++; //use increment or decrement to make condition false, otherwise you'll have an infinite loop
}

// ! Do While loop

//it will run the loop once even if the condition is false as it will check condition after
let num3 = 1;
do {
    console.log(num3)
    num3++
} while (num3 <= 5);
console.clear();

//!Task 2
/*
1: Create an array of your favourite films / TV shows, up to 5 items. Use an array method to add 2 more items to your array. Use a loop to cycle through the array and log each item to the console.
2: Generate 10 random numbers between 1-100 and log them to the console.
3: Create a loop that counts backwards from 20-0.
4: Generate 5 random numbers between 1-50. For each number generated, check if the number is divisible by 5 or not. Log whether it is divisible or not to the console.
*/

//Task 1

let favouriteShows = ["Futurama", "Supernatural", "Rick and Morty", "Mandolorian", "Fullmetal Alchemist: Brotherhood"];
favouriteShows.splice(5, 0, "Trailer Park Boys", "The Office (US)");

for (let i = 0; i < favouriteShows.length; i++) {
    console.log(favouriteShows[i]);
    
}



//Task 2
for (let i = 1; i <= 10; i++) {
    let ranNumber = Math.floor(Math.random() * 100) + 1;
    console.log(ranNumber);   
}


//Task 3
for (let i = 20; i >= 0; i--) {
   console.log(i);   
}


//task 4
for (let i = 1; i <= 5; i++) {
    let ranNumber = Math.floor(Math.random() * 50) + 1;

    if (ranNumber % 5 === 0) {
        console.log(`${ranNumber} is divisible by 5`);
    } else {
        console.log(`${ranNumber} is not divisible by 5`);
    }
}