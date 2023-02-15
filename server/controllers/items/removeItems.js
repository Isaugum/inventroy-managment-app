const express = require('express');
let router = express.Router();
const { database } = require('../../database');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const jwt = require('jsonwebtoken');


router.post("/", jsonParser, (req, res) => {
    if(req.body === undefined || req.body.supplier === "") {
        console.log("INVALID REQUEST");
        return null;
    }

    let supplier = req.body.supplier;
    let itemName = req.body.item;

    database.query(`SELECT * FROM items WHERE item_name = $1`, [itemName], (err, result) => {
        if(err) {
            console.log(err);
            res.send({error: err});
        }

        if(result.rows.length > 0) {
            database.query(`DELETE FROM items WHERE item_name=$1`, [itemName], (err, result) => {
                if(err) {
                    console.log(err);
                    res.send({error: err});
                }
        
                console.log(`${itemName} deleted!`);
                res.send({message: `Item ${itemName} deleted!`})
            })
        } else {
            console.log("Item does not exist!");
        }
    })
});

module.exports = router;