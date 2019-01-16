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

- Run this first:

        npm install -g foreman



## **Cross Platform Concerns**

## **Simplify Your World**