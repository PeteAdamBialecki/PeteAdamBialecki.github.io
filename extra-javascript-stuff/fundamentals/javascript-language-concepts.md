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

- let and var for Variable Declarations

- Rest Parameters

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
