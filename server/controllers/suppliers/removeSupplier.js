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

    database.query(`DELETE FROM suppliers WHERE company_name=$1`, [supplier], (err, result) => {
        if(err) {
            console.log(err);
            res.send({error: err});
        }

        console.log(`${supplier} deleted!`);
        res.send({message: `Supplier ${supplier} deleted!`})
    })
});

module.exports = router;