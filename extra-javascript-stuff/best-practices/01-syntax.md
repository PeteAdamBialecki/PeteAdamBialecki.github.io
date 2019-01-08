# **JavaScript Best Practices**

## **Syntax**

Automatic Semicolon Insertion Rules
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







#### **Terminology**

Restricted Production: continue, break, return, or throw...