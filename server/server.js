const express = require('express');
const dotenv = require('dotenv').config();
const { database, initDatabase } = require("./database");
const cors = require("cors");


//USERS
const loginRouter = require('./controllers/users/login.js');
const registerRouter = require('./controllers/users/register.js');
//SUPPLIERS
const addSupplierRouter = require('./controllers/suppliers/addSupplier.js');
const removeSupplierRouter = require('./controllers/suppliers/removeSupplier.js');
const getSuppliersRouter = require('./controllers/suppliers/getSuppliers.js');
//ITEMS
const addItemsRouter = require('./controllers/items/addItems.js');
const removeItemsRouter = require('./controllers/items/removeItems.js');
const getItemsRouter = require('./controllers/items/getItems.js');

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

app.use("/new-items", addItemsRouter);
app.use("/remove-items", removeItemsRouter);
app.use("/get-items", getItemsRouter);


app.listen(port, () => {
    initDatabase();
    console.log(`Listening on port ${port}`);
})