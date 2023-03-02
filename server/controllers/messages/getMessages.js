const express = require('express');
let router = express.Router();
const { database } = require('../../database');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


router.get("/", jsonParser, (req, res) => {

    database.query(`SELECT * FROM messages`, (err, result) => {
        if(err) {
            console.log(err);
            res.send({error: err});
        }

        if(result.rows.length > 0) {
            console.log("Messages fetched!");
            res.send(result.rows);
        } else {
            res.send({ error: "No messages found!" });
        }
    })
});

module.exports = router;