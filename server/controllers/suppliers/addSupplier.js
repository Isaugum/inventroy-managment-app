const express = require('express');
let router = express.Router();
const { database } = require('../../database');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();



router.post("/", jsonParser, (req, res) => {

    if(req.body === undefined || req.body.supplier === "") {
        console.log("INVALID REQUEST");
        return null;
    }

    let supplier = req.body.supplier;

    database.query(`SELECT * FROM suppliers WHERE company_name = $1`, [supplier], (err, result) => {
        if(err) {
            console.log(err);
            res.send({error: err});
        }

        if(result.rows.length > 0) {
            console.log("Supplier already exists!")
            res.send({error: "Supplier already exists!"})
        } else {
            database.query(`INSERT INTO suppliers (company_name) VALUES ($1);`, [supplier]);
            console.log("SUPPLIER ADDED");
            res.send({ message: "Supplier added"});
        }
    })

});

module.exports = router;