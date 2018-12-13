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

- Rest Parameters

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

- Destructuring Arrays

- Destructuring Objects

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
