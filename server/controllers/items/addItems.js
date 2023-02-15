const express = require('express');
let router = express.Router();
const { database } = require('../../database');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const jwt = require('jsonwebtoken');


router.post("/", jsonParser, (req, res) => {

    if(req.body === undefined || req.body.supplier === "" || req.body.item === "") {
        console.log("INVALID REQUEST");
        return null;
    }

    let supplier = req.body.supplier;
    let itemName = req.body.item;

    database.query(`SELECT * FROM suppliers WHERE company_name = $1`, [supplier], (err, result) => {
        if(err) {
            console.log(err);
            res.send({error: err});
        }

        if(result.rows.length > 0) {
            let supplierId = result.rows[0].company_id;
            database.query(`SELECT * FROM items WHERE item_name = $1`, [itemName], (err, result) => {
                if(err) {
                    console.log(err);
                    res.send({error: err});
                }

                if(result.rows.length > 0) {
                    console.log("ERROR: ITEM ALREADY EXISTS");
                } else {
                    database.query(`INSERT INTO items (supplier_id, item_name) VALUES ($1, $2);`, [supplierId, itemName], (err, result) => {
                        console.log("ITEM ADDED");
                        res.send({ message: "Item added"});
                    });
                }
            });

        } else {
            console.log("Supplier does not exist!");
        }
    })
});

module.exports = router;