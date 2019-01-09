# **JavaScript Best Practices: Syntax**

## **Automatic Semicolon Insertion Rules**

"When, as a Script or Module is parsed from left to right, a token (called the offending token) is encountered that is not allowed by any production of the grammar,"

Rule #1a:

                var a = 12
                var b = 13
            if(a) {console.log(a)}
            console.log(a+b)

...becomes...

                var a = 12;
                var b = 13;
            if(a) {console.log(a)}
            console.log(a+b)

Rule #1b:

            var a = 12;
            var b = 13;
                if(a) {console.log(a)}
            console.log(a+b)

...becomes...

            var a = 12;
            var b = 13;
                if(a) {console.log(a);}
            console.log(a+b)

Rule #2:

            var a = 12;
            var b = 13;
            if(a) {console.log(a);}
            console.log(a+b)

...becomes...

            var a = 12;
            var b = 13;
            if(a) {console.log(a);}
                console.log(a+b);

"When, a token is encountered that is allowed by some production of the grammar, but the production is a restricted production and the token would be the first token of a restricted production, and the restricted token is seperated from the previous token by at least on line terminator, then a semicolon is automatically inserted before the restricted token."

Rule #3:

            function returnObject()
            {
                if(someTrueThing)
                }
                    return 
                    {
                        hi: 'hello'
                    }
                }
            }

...should be...

            function returnObject()
            {
                if(someTrueThing)
                }
                    return {
                        hi: 'hello'
                    };
                }
            }

#### **Useful Advice**

"Use semicolons in conjunction with JSHint or ESLint to prevent potential issues"

- Consistency with other languages
- Prevents the "0.01% issues"...

#### **Terminology**

Restricted Production: continue, break, return, or throw...

## **Linting**

A linter scans your code to detect potential problems and errors.

- JSLint: Preconfigured, not very configurable.
- JSHint: Fork of JSLint, configurable, built in package support, not exstensible.
- ESLint: Most recent, custom rules and support, lots of configuration.
- You can run a linter either at jshint.com, as an extension, or in the console.

## **Curly Braces**

- Keep opening curly braces on the same line:

...this...

        function service()
        {
            var get = function() 
            {
                console.log('get');
            }
            var set = function()
            {
                console.log('set');
            }
            return
            {
                get: get,
                set: set
            }
        }

...should be this...

        function service() {
            var get = function() {
                console.log('get');
            }
            var set = function() {
                console.log('set');
            } return {
                get: get,
                set: set
            }
        }

## **Equality**

"==" Double equals does a conversion.

        var x = 1;
        var y = '1';

        if (x == y) {
            console.log('Equals');
        } else {
            console.log('Not Equals');
        } //Equals

...or...

        var x = 1;
        var y = true;

        if (x == y) {
            console.log('Equals');
        } else {
            console.log('Not Equals');
        } //Equals

...or...

        var x = 0;
        var y = false;

        if (x == y) {
            console.log('Equals');
        } else {
            console.log('Not Equals');
        } //Equals

"===" Stric equals (change the above code to triple equals and all should be false).  This should be used as the default.

#### **Extra Note**

To check if a variable exists, use a sample like this:

        // var x;

        if (typeof x !== 'undefined') {
            console.log('Exists!');
        } else {
            console.log('...does not exist...');
        }

## **Variables**

Hoisting: Hoisting is JavaScript's default behavior of moving all declarations (variables) to the the top of the current scope.

    - The browser scans the code, line by line, moves variables to the top and sets them as 'undefined'.  As the browser continues and a variable actually has been defined, it sets it from 'undefined' to it's value.

#### **Extra Note**

Declare variables at the top of the scope and have unique names.