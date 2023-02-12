const express = require('express');
const dotenv = require('dotenv').config();
const { database, initDatabase } = require("./database");

const loginRouter = require('./controllers/login.js');

const app = express();
const port = process.env.PORT;

app.use("/login", loginRouter);

app.listen(() => {
    console.log(`Listening on port ${port}`);
    initDatabase();
})