## INVENTORY MANAGMENT APP

A simple app to help a small bar manage its inventory.
Mostly made up of forms that use select elements to input data, and a few components to add new possible suppliers and items.

## Dependencies and installation

Use Node Package Manager [npm](https://www.npmjs.com/) to install dependencies.

# For react app;
```
npm install react react-dom react-router-dom
npm install axios
```
all at once:
```
npm install react react-dom axios react-router-dom
```

# For server;
```
npm install express
npm install bodyparser
npm install pg
npm install jasonwebtoken
npm install bcrypt
```

# Project Structure
. **./src/index.js** sets up the router, but **./src/App.js** is the actual entry point where the routes are declared.
Input forms are contained in the components folder, as is the navbar.

- All important SCSS modules are stored in **./src/styles/index.scss** file and meant to be imported.
