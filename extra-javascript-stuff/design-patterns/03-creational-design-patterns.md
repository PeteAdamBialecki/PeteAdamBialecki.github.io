# **JavaScript Design Patterns: Creational Design Patters**

## **Constructor Patterns**

- Can use prototypes to simplify and shorten.

The 'new' keyword:

    - Creates a brand new object

    - Links to an object prototype

    - Binds 'this' to the new object scope

    - Implicitly returns 'this'

Sample Code:

        function ObjectName(param1, param2) {
            this.param1 = param1;
            this.param2 = param2;
            this.toString = function () {
                return this.param1 + ' ' + this param2;
            } // Implicitly returns 'this' here...
        }

## **Module Pattern**

- Simple way to encapsulate methods.

- Creates a "Toolbox" of functions to use.

Module Pattern Object Literal Ex #1:

        var Module = {
            method: fucntion(){...},
            nextMethod: function(){...}
        }

Module Pattern Object Literal Ex #2:

        var Module = function () {
            var privateVar = 'I am private...';
            return {
                method: function () {...},
                nextMethod: function () {...}
            }
        }

## **Factory Pattern**

- Simplifies object creation.

- Creating different objects based on need.

- Repository creation

## **Singleton**

- Remembers the last time you used it

- Hands the same instance back

- Node.js uses CommonJS