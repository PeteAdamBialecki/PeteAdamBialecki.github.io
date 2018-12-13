# **JavaScript Language Fundamentals and Concepts**

## **Language Features**

- [Constants](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

Constants are block-scoped, much like variables defined using the let statement. The value of a constant cannot change through reassignment, and it can't be redeclared.

        const number = 42;

        try {
        number = 99;
        } catch(err) {
        console.log(err);
        }

        console.log(number);
        // expected output: 42

- [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

The let statement declares a block scope local variable, optionally initializing it to a value.

        let x = 1;

        if (x === 1) {
        let x = 2;

        console.log(x);
        // expected output: 2
        }

        console.log(x);
        // expected output: 1

- [var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)

The var statement declares a variable, optionally initializing it to a value.

        var x = 1;

        if (x === 1) {
        var x = 2;

        console.log(x);
        // expected output: 2
        }

        console.log(x);
        // expected output: 2

- [Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

        function sum(...theArgs) {
        return theArgs.reduce((previous, current) => {
            return previous + current;
        });
        }

        console.log(sum(1, 2, 3));
        // expected output: 6

        console.log(sum(1, 2, 3, 4));
        // expected output: 10

- [Destructuring Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

        var a, b, rest;
        [a, b] = [10, 20];

        console.log(a);
        // expected output: 10

        console.log(b);
        // expected output: 20

        [a, b, ...rest] = [10, 20, 30, 40, 50];

        console.log(rest);
        // expected output: [30,40,50]

- Destructuring Objects

        const wes = {
        first: 'Wes',
        last: 'Bos',
        links: {
            social: {
            twitter: 'https://twitter.com/wesbos',
            facebook: 'https://facebook.com/wesbos.developer',
            },
            web: {
            blog: 'https://wesbos.com'
            }
        }
        };

        const twitter = wes.links.social.twitter;
        const facebook = wes.links.social.facebook;
        // Annoying!

or 

        const { twitter, facebook } = wes.links.social;
        console.log(twitter, facebook); // logs the 2 variables 

- Spread Syntax

- typeof()

- Common Type Conversions

- Controlling Loops

## **Operators**

- Equality Operators

- Unary Operators

- Logical (Boolean) Operators

- Relational Operators

- Conditional Operators

- Assignment Operators

- Operator Precedence

## **Functions and Scope**

- Function Scope

- Block Scope

- IIFE's

- Closures

- this

- call()

- apply()

- bind()

- Arrow Functions

- Default Parameters

## **Objects and Arrays**

- Constructor Functions

- Prototypes

- Objects Using Prototypes

- JSON / JavaScript Object Notation

- Array Iteration

## **Classes and Modules**

- Classes

- Constructors and Properties

- Methods

- Inheritance

- Creating Modules

- Importing Modules
