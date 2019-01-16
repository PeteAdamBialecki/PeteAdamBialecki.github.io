# **JavaScript Best Practices: Production Code**

## **NPM Settings**

Here are a few helpful steps to get started with Node:

- cd into your working directory and run to create your package.json:

        npm init

- Add this to package.json to limit what kind of versions of Node should be used by the user...

            "engines":{
        "node": "4.2.1"

- Run this to prevent using --save when installing (then install npm package):

        npm config set save=true

- If you run this, you elimnate the possibilities of using " ^ " in package versions so it is more stable (run this command before installing packages):

        npm config set save-exact=true

## **Enviornment Variables**

- Step #1: Run this first:

        npm install -g foreman

- Step #2: Edit scripts section of package.json:

        {
            "name": "04-production-code",
            "version": "1.0.0",
            "description": "A sample project for notes on production code.",
            "main": "app.js",
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1",
                    "start": "node app.js"
            },
            "author": "Pete Adam Bialecki",
            "license": "ISC",
            "engines": {
                "node": "4.2.1"
            },
            "dependencies": {
                "express": "4.16.4",
                "passport": "0.4.0"
            }
        }

- Step #3: run nf start

- Step #4: Create ".env" file with a sample of the following code:

        {
            "port": 9000,
            "connection": {
                "sql": "",
                "mongo": ""
            }
        }

- Step #5: now run 

        nf start

...and the port should now be 9000 and other settings.

## **Cross Platform Concerns**

## **Simplify Your World**