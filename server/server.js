const express = require('express');
const dotenv = require('dotenv').config();
const { database, initDatabase } = require("./database");
const cors = require("cors");

const loginRouter = require('./controllers/login.js');
const registerRouter = require('./controllers/register.js');
const addSupplierRouter = require('./controllers/addSupplier.js');
const removeSupplierRouter = require('./controllers/removeSupplier.js');
const getSuppliersRouter = require('./controllers/getSuppliers.js');

const app = express();
const port = process.env.PORT;

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true
  }));

app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/new-supplier", addSupplierRouter);
app.use("/remove-supplier", removeSupplierRouter);
app.use("/get-suppliers", getSuppliersRouter);


app.listen(port, () => {
    initDatabase();
    console.log(`Listening on port ${port}`);
})