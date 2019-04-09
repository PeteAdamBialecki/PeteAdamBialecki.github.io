console.log("--------------------------------------------------------");
console.log("`for` vs forEach() Example #3:");
console.log(" ");

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
console.log("`for` vs forEach() Example #2:");
console.log(" ");

    let capitilizedFruits = [];
        fruits.forEach(fruit => {
            let capitilizedFruit = fruit.toUpperCase();
            capitilizedFruits.push(capitilizedFruit);
        });
    console.log(capitilizedFruits);

console.log("--------------------------------------------------------");
console.log("`for` vs forEach() Example #3:");
console.log(" ");

    const prices = [6.75, 3.10, 4.00, 8.12];
    let totalPrices = 0;
        prices.forEach(price => totalPrices += price);
        console.log(totalPrices);

console.log("--------------------------------------------------------");
console.log("`for` vs forEach() Example #4:");
console.log(" ");

    // Using forEach, copy only the first 2 characters of each string in the days array and store the abbreviations in the dayAbbreviations array.
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayAbbreviations = [];

    // dayAbbreviations should be: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    days.forEach(day => dayAbbreviations.push(day.slice(0,2)));
    console.log(dayAbbreviations);

console.log("--------------------------------------------------------");
console.log("`for` vs forEach() Example #5:");
console.log(" ");

    // The split method turns a string into an array. In the case of alphabet below, each letter of the string is being turned into an element in an array by split. Using forEach, iterate over the alphabet array and store each letter in the array noel except for the L character.
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let noel = [];

    // noel should be: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    alphabet.forEach(character => {
        if (character !== 'L') {
            noel.push(character)
        }
    });
    console.log(noel);

console.log("--------------------------------------------------------");
console.log("`for` vs forEach() Example #6:");
console.log(" ");

    // Using forEach, iterate over the percentages and store all percentages over 50 percent in the array upperRange.
    const percentages = [34, 67, 12, 39, 90, 82, 22, 24, 99];
    let upperRange = [];

    // upperRange should be: [67, 90, 82, 99]
    percentages.forEach(percentage => {
        if (percentage > 50) {
            upperRange.push(percentage);
        }
    });
    console.log(upperRange);

console.log("--------------------------------------------------------");
console.log("`for` vs forEach() Example #7:");
console.log(" ");

    // Using forEach, iterate over the colors array and store the hex colors that start with the letter F (ex. #FF0000) in the array filteredColors.
    const colors = ['#87E2D0', '#559F4D', '#FFE0F4', '#7E7E7E', '#FF2D2D', '#F7FFEC'];
    let filteredColors = [];

    // filteredColors should be: ['#FFE0F4', '#FF2D2D', '#F7FFEC']
    colors.forEach(color => {
        if (color[1] === 'F') {
            filteredColors.push(color);
        }
    });
    console.log(filteredColors);

console.log("--------------------------------------------------------");
console.log("`for` vs forEach() Example #7:");
console.log(" ");

    // Using forEach, capitalize all the strings in the months array and store them in the array capitalizedMonths.
    const months = ['january', 'february', 'march', 'april', 'may'];
    let capitalizedMonths = [];

    // filteredColors should be: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY']
    // months.forEach(month => {
    //     const capitalizedMonth = month.toUpperCase();
    //     capitilizedMonths.push(capitilizedMonth);
    // });

    // ...refactored version from above:
    months.forEach(month => capitalizedMonths.push(month.toUpperCase()));
    console.log(capitalizedMonths);