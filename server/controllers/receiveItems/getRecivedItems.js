const express = require('express');
let router = express.Router();
const { database } = require('../../database');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


router.get("/", jsonParser, (req, res) => {

    database.query(`SELECT * FROM received_items`, (err, result) => {
        if(err) {
            console.log(err);
            res.send({error: err});
        }

        if(result.rows.length > 0) {
            console.log("Received items fetched!");
            res.send(result.rows);
        } else {
            res.send({ error: "No items found!" });
        }
    })
});

module.exports = router;