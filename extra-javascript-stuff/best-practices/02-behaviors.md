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