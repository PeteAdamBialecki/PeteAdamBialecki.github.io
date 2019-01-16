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

Step 3: app.js (version #5)

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

## **ES6 and Babel**

Step #1: app.js:

        for(let i = 0; i < 10; i++) {
            console.log(i);
        }

        console.log('Doing stuff...' + i);

Step #2 (command line in the directory): npm install -g babel-cli

Step #3 (command line in the directory): touch .babelrc

Step #4 (command line in the directory): npm install --save-dev babel-preset-es2015

Step #5 (command line in the directory): babel app.js -o es6.js

## **Async - Await**

From the code above:

Step #1: app.js (version #5)

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


Step #2: app.js (version #5)

        'use strict';
        function asyncMethod(message, num) {
            return new Promise(function (fulfill, reject) {
                setTimeout(function () {
                    console.log(message + ' ' + num);
                    fulfill(num + 1);
                }, 500)
            });
        }

        async function main() {
            var one = await asyncMethod('Open DB Connection', 0)
            var two = await asyncMethod('Find User', one)
            var three = await asyncMethod('Validate User', two)
            var four = await asyncMethod('Do Stuff', three)
        }

        main();

Step #3 (command line in the directory): npm install -save babel-preset-stage-3

Step #4 (command line in the directory): babel app.js -o esNext.js

Step #5: .babelrc

        {
            "presets": [
                "stage-3"
            ],
            "plugins": []
        }

Step #6: index.html 

        <html>
        <body>
            <h1>Lets Talk Promises</h1>
            <script src="esNext.js"></script>
            <script src="https://www.promisejs.org/polyfills/promise-7.0.4.min.js"></script>
        </body>
        </html>