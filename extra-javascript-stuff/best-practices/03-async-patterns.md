# **JavaScript Best Practices: Async Patterns**

## **Callbacks**

- To avoid christmas tree code, use named functions and call them.

- Use Error as a first parameter:

        - function validateUser(err, results) {
            if (err) {
                return done(err, null);
            }
        }

- Use "return" within a error to break out of it.

## **Promises**

What christmas tree code looks like before promises:

Step 1: app.js (version #1)

        function asyncMethod(message, cb){
            setTimeout(function(){
                console.log(message);
                cb;
            }, 500)
        }

        asyncMethod('Open DB Connection', function(){
            asyncMethod('Find User', function(){
                asyncMethod('Validate User', function(){
                    asyncMethod('Do Stuff', function(){})
                })
            })
        })

Step 2: index.html

        <html>
        <body>
            <h1>Lets Talk Promises</h1>
            <script src="app.js"></script>
            <script src="https://www.promisejs.org/polyfills/promise-7.0.4.min.js"></script>
        </body>
        </html>

Step 3: app.js (version #3)

        function asyncMethod(message){
            return new Promise(function (fulfill, reject) {
                setTimeout(function(){
                    console.log(message);
                    fulfill();
                }, 500)
            })
        }

        asyncMethod('Open DB Connection').then(function(){
            asyncMethod('Find User').then(function(){
                asyncMethod('Validate User').then(function(){
                    asyncMethod('Do Stuff', function(){})
                })
            })
        })


Step 3: app.js (version #4)

        function asyncMethod(message) {
            return new Promise(function (fulfill, reject) {
                setTimeout(function () {
                    console.log(message);
                    fulfill();
                }, 500)
            });
        }

        function findUser() {
            return asyncMethod('Find User')
            .then(validateUser)
        }

        function validateUser() {
            return asyncMethod('validate User')
            .then(doStuff)
        }

        function doStuff() {
            return asyncMethod('do stuff')
            .then(function () {})
        }
        asyncMethod('Open DB Connection')
            .then(findUser);

Step 3: app.js (version #4)

        function asyncMethod(message) {
            return new Promise(function (fulfill, reject) {
                setTimeout(function () {
                    console.log(message);
                    fulfill();
                }, 500)
            });
        }

        function findUser() {
            return asyncMethod('Find User')
        }

        function validateUser() {
            return asyncMethod('validate User')
        }

        function doStuff() {
            return asyncMethod('do stuff')
        }
        asyncMethod('Open DB Connection')
            .then(findUser)
            .then(validateUser)
            .then(doStuff)
            .then(function () {})