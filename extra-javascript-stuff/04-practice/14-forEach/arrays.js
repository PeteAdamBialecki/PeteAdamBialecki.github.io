console.log(" ");
console.log("--------------------------------------------------------");


// `for` vs forEach() Example #1

const fruits = ['apple', 'pear', 'cherry'];

    // Version #1: for loop
    for (let i = 0; i < fruits.length; i += 1) {
        console.log(fruits[i]);
    }

    // Version #2: for each
    fruits.forEach(fruit => console.log(fruit));

        // Easier to read, bugs are easier to avoid, infinite loops impossible, avoids incrementing mistakes, and prevents setting wrong conditions.

        // Bad: you can't break out of a loop early. Use for or while loops instead.

console.log("--------------------------------------------------------");

// `for` vs forEach() Example #2
let capitilizedFruits = [];
    fruits.forEach(fruit => {
        let capitilizedFruit = fruit.toUpperCase();
        capitilizedFruits.push(capitilizedFruit);
    });

console.log(capitilizedFruits);

console.log("--------------------------------------------------------");

// `for` vs forEach() Example #3: Adding numbers in array with forEach
const prices = [6.75, 3.10, 4.00, 8.12];
let addedPrices = 0;
    prices.forEach(price => addedPrices += price);
    console.log(addedPrices);