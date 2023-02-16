const express = require('express');
let router = express.Router();
const { database } = require('../../database');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


router.get("/", jsonParser, (req, res) => {

    database.query(`SELECT * FROM write_off`, (err, result) => {
        if(err) {
            console.log(err);
            res.send({error: err});
        }

        if(result.rows.length > 0) {
            console.log("Write off fetched!");
            res.send(result.rows);
        } else {
            res.send({ error: "No items found!" });
        }
    })
});

module.exports = router;