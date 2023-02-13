const express = require('express');
let router = express.Router();
const { database } = require('../database');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const jwt = require('jsonwebtoken');


router.get("/", jsonParser, (req, res) => {

    database.query(`SELECT * FROM suppliers`, (err, result) => {
        if(err) {
            console.log(err);
            res.send({error: err});
        }

        if(result.rows.length > 0) {
            console.log("Suppliers fetched!");
            res.send(result.rows);
        } else {
            res.send({ error: "No supplier found!" });
        }
    })
});

module.exports = router;