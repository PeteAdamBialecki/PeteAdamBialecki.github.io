# **JavaScript Design Patterns: Objects in JavaScript**

## **Creating Objects In JavaScript**

Method #1:

        var obj = {};

Method #2:

        var nextObj = Object.create(Object.prototype);

Method #3:

        var lastObj = new Object();

## **Reading and Writing Attributes**

Dot Notation:

        var obj = {};
        obj.param = 'new value';
        console.log(obj.param); // new value

Square Bracket Notation:

Example #1:

        var obj = {};
        obj['param'] = 'new value';
        console.log(obj['param']); // new value

Example #2 (use bracket notation to access a variable):

        var obj = {};
        var val = 'value';
        obj[val] = 'new value';
        console.log(obj[val]); // new value

## **Defining Properties in Objects**

        Object.defineProperty(obj, 'name', {
            value: 'my name',
            writable: true,
            enumerable: true,
            configurable: true
        })

## ****