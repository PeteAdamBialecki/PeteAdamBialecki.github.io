# **JavaScript Design Patterns: Creational Design Patters**

## **Constructor Patterns**

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