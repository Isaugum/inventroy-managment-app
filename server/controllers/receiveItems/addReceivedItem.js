const express = require('express');
let router = express.Router();
const { database } = require('../../database');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.post("/", jsonParser, (req, res) => {

    let itemName = req.body.item;
    let supplier = req.body.supplier;
    let quantity = req.body.quantity;
    let units = req.body.units;
    let date = new Date().toISOString().split('T')[0];

    if(itemName === "" || supplier === "" || quantity === "" || units === "") {
        console.log("INVALID REQUEST");
        return null;
    }

    database.query(`SELECT * FROM suppliers WHERE company_name = $1`, [supplier], (err, result) => {
        if(err) {
            console.log(err);
            res.send({error: err});
        }

        if(result.rows.length > 0) {
            let supplierId = result.rows[0].company_id;
            
            database.query(`INSERT INTO received_items (supplier_id, item_name, quantity, units, date) VALUES ($1, $2, $3, $4, $5);`, [supplierId, itemName, quantity, units, date], (err, result) => {
                if(err) {
                    console.log(err);
                    res.send({error: err});
                } else {
                    console.log("ITEM ADDED");
                    res.send({ message: "Item added"});                    
                }
            });

        } else {
            console.log("Supplier does not exist!");
        }
    })

});

module.exports = router;