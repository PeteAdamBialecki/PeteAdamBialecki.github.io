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