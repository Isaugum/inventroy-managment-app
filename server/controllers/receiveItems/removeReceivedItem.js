const express = require('express');
let router = express.Router();
const { database } = require('../../database');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


router.post("/", jsonParser, (req, res) => {

    let itemName = req.body.item;
    let quantity = req.body.quantity;
    let units = req.body.units;
    let date = req.body.date;

    database.query(`DELETE FROM received_items WHERE item_name=$1 AND quantity=$2 AND units=$3 AND date=$4`, [itemName, quantity, units, date], (err, result) => {
        if(err) {
            console.log(err);
            res.send({error: err});
        }

        console.log(`${itemName} deleted!`);
        res.send({message: `Item ${itemName} deleted!`})
    })
});

module.exports = router;