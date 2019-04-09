# **JavaScript Notes**

Common JavaScript Data Types
JavaScript has six primitive data types: Boolean, Null, Undefined, Number, String, and Symbol.

## **Boolean**

Booleans are standard across all programming languages. A Boolean data type represents only one of two values: true or false.

Developers use a Boolean to represent the current state of something that is likely to change. For example, you can use a Boolean to show whether a checkbox is checked or not:

    var isChecked = true;

## **Null**

null is a special value that explicitly represents "nothing" or something that does not exist. For example, this code states that age is unknown or empty.

    let age = null;

## **Undefined**
The meaning of undefined is “value is not assigned”. A variable can be declared but not assigned a value:

    var n;
    alert(n); // shows "undefined"

What's the difference between null and undefined?
The main distinction is that null is an assigned value -- an intentionally empty value. undefined means that there is a variable declared, but the value of that variable has not yet been defined.

## **Number**

Number is a numeric data type. As you learned earlier, numbers can be written with or without a decimal point.

You can perform different operations with numbers, like multiplication *, division /, addition +, and subtraction -.

## **String**

A String is a grouping of characters used to represent text. Strings must be inside of either double " or ' single quotes. For example:

    const author = "Ursula K Le Guin";
    const book = 'A Wizard of Earthsea';

## **Symbol**

Symbol is a new data type in ES2015 that represents a unique identifier. You can read more about this new data type in the MDN docs.

Use the typeof operator to see which data type is stored in a variable.
For example:

let name = "Alena Holligan";
alert(typeof name); // returns "string"

let score = 150;
alert(typeof score); // returns "number"

let x;
alert(typeof x); // returns "undefined"
Practice JavaScript Math Methods
In this short workshop, you will practice using JavaScript's math methods to add, subtract, multiply, divide, as well as to convert strings to numbers.

# **JavaScript Frameworks**

## **Client-Side UI**

The following produce the DOM client side.

- React.js / React Native

- Vue.js

- Angular.js

## **Server Side UI**

UI frameworks that allow for predefined server setups.

- Next.js

- Nuxt.js
    - Works well with Vue.js

- Angular Universal

# **JavaScript Unit Tests**

- Mocha

- Jasmine (Best for Angular)

- Jest (Good for React)

- Enzyme