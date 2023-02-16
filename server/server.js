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
//WRITE OFF
const newWriteOffRouter = require('./controllers/writeOff/newWriteOff.js');
const getWriteOffRouter = require('./controllers/writeOff/getWriteOff.js');
const removeWriteOffRouter = require('./controllers/writeOff/removeWriteOff.js');
//RECIEVE
const newReceivedRouter = require('./controllers/receiveItems/addReceivedItem');
const getReceivedRouter = require('./controllers/receiveItems/getRecivedItems');
const removeReceivedRouter = require('./controllers/receiveItems/removeReceivedItem');

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

app.use("/new-write-off", newWriteOffRouter);
app.use("/get-write-off", getWriteOffRouter);
app.use("/remove-write-off", removeWriteOffRouter);

app.use("/new-received", newReceivedRouter);
app.use("/get-received", getReceivedRouter);
app.use("/remove-received", removeReceivedRouter);


app.listen(port, () => {
    initDatabase();
    console.log(`Listening on port ${port}`);
})