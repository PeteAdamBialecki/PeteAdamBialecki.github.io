# **JavaScript Best Practices: Syntax**

## **Global Variables**

        var toPrint = "print me";

        function print(out) {
            stringToPrint = out;
            console.log(stringToPrint);
        }

        print('Hello');
        console.log(stringToPrint);

...because of JavaScripts ability to fix fo you, the following code above will print 'Hello' twice because 'stringToPrint' did not have "var" before it.  JavaScript brought that and made it into a Global variable outside of 'function print(out)'.

## **Strict Mode**

        'use strict';

Place this at the top of the document to prevent JavaScript from "fixing" your code.  'use strict'; can also be placed within a function to isolate strict JavaScript.

## **Read Only Properties**

        var obj = {};
        Object.defineProperty(obj, 'readOnly', {
            enumerable: false,
            configurable: false,
            writable: false,
            value: 'This var is read only'
        });
        obj.readOnly = 'I wrote this';
        console.log(obj.readOnly) // 

...in the above code, unless you declare 'use strict'; at the top, the console will not throw an error.  If use strict is used, code will still run but throw an error at "obj.readOnly = 'I wrote this';" to warn about the possiblity of overwriting a variable or object property.