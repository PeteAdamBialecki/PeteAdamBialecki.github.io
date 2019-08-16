# **Create React App**

In React Basics, you started to build the scoreboard app using the CDN links to help you focus on learning React, without having to worry about installing and running any tools.

The CDN-based approach is not useful in a production environment as soon as you start using JSX. For instance, we used Babel directly in the browser to transpile JSX into JavaScript. The Babel script is ~800KB in size, which for most use cases, is too large of a download to be practical. Also, there's the overhead in the browser of transpiling JSX into JavaScript.

Developers use compiling as part of a build process to avoid the overhead of downloading Babel and multiple JavaScript files to the client. Create React App sets up a modern build system for your React apps in little time, no need to install or configure tools like Webpack or Babel. The tools are already pre-configured in each new project, that way you can focus on building your app.

To get started, install Create React App:

        npm install -g create-react-app

 and create a new app, at all once, with npx. For example:

        npx create-react-app scoreboard
        cd scoreboard

Helpful commands:
Start development server:

        npm start

Bundles the app into static files for production:

        npm run build

Starts the test runner

        npm test

Removes this tool and copies build dependencies, config files and scripts in the app directory.  If you do this, YOU CAN"T GO BACK!!!

# **React Tools**

[Flow: Static Type Checker For JavaScript](https://flow.org/)

[TypeScript](https://www.typescriptlang.org/)

## **Extra Notes and Resources**

[Giphy API documentation](https://github.com/Giphy/GiphyAPI)
[Fetch API – MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
[Introduction to fetch()](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
[Browser support for fetch()](http://caniuse.com/#feat=fetch)
[fetch() polyfill](https://github.com/github/fetch)
[Browser support for JavaScript promises](http://caniuse.com/#feat=promises)

## **Create Production Build**

If using Create React App, run 

        npm run build

Use "serve"

        npm install -g serve

Then, in the directory, run

        serve -s build

Then view the production build in the given URLs.  If you want to make changes, you need to go through the entire build process again.

## **GitHub Pages Deploy**

For GitHub pages, create a repo in Github with the whole project.  In the 'package.json', Add, under "name", 

        "homepage": "https://username.github.io/reponame",

Run the command 

        npm install --save gh-pages

Setup deploy scripts in package.json

        "scripts": {
            "predeploy": "npm run build",
            "deploy": "gh-pages -d build",
            ...
        }

Run the command 

        npm run deploy

Once that's commplete, in your browser, go to your Github repo, go to settings, scroll down, and navigate to where your site is published.

Set a Base URL
When using React Router, if your app is served from a sub-directory, pass the 'basename' prop to the router to set the base URL for all locations. For example:

        <BrowserRouter basename="/course-directory">