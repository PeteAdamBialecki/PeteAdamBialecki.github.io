# **React User Authentication**

## **Parts of the App**

index.js: The entry point into the application which renders the main <App> component.

App.js: Renders the router that wraps the components of the app.

Context.js: A higher-order component (HOC) that shares functionality across the components of the app. This will let you reuse component logic and state. Remember - "Context" is used in React when data needs to be accessible by many components at different nesting levels.

Data.js: Contains a class of Data with the API authentication utility methods you will use to create, sign up and authenticate a user. The file is mostly pre-written, making GET and POST requests to the REST API, for example. For this course, we're only going to focus on the authentication parts.

The components folder holds all the individual components of the app. For example, components that render the "Public" and "Authenticated" views, and the sign in and sign up forms.