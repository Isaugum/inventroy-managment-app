const express = require('express');
const dotenv = require('dotenv').config();
const { database, initDatabase } = require("./database");
const cors = require("cors");

const loginRouter = require('./controllers/login.js');
const registerRouter = require('./controllers/register.js');

const app = express();
const port = process.env.PORT;

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true
  }));

app.use("/login", loginRouter);
app.use("/register", registerRouter);

app.listen(port, () => {
    initDatabase();
    console.log(`Listening on port ${port}`);
})