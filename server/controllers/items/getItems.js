const express = require('express');
let router = express.Router();
const { database } = require('../../database');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


router.post("/", jsonParser, (req, res) => {


    let supplier = req.body.supplier;
    console.log(supplier);

    if(req.body === undefined || req.body.supplier === "" ||  req.body.supplier === undefined) {
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

            database.query(`SELECT * FROM items WHERE supplier_id = $1`, [supplierId], (err, result) => {
                if(err) {
                    console.log(err);
                    res.send({error: err});
                }

                if(result.rows.length > 0) {
                    res.send(result.rows);
                } else {
                    res.send({error: "No items found!"});
                }
            });

        } else {
            console.log("Supplier does not exist!");
        }
    })
});

module.exports = router;