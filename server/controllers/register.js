const express = require('express');
let router = express.Router();

const { database } = require('../database');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.post("/", jsonParser, (req, res) => {
    if(req.body === undefined || req.body.password === undefined || req.body.username === undefined || req.body.password === "" || req.body.username === "") {
        res.send({error: "Please provide username and password!"});
    }

    let username = req.body.username;
    let password = req.body.password;

    database.query(`SELECT * FROM users WHERE username = $1`, [username], (err, result) => {
        if(err) {
            console.log(err);
            res.send({error: err});
        }

        if(result.rows.length > 0) {
            console.log("Username already exists!")
            res.send({error: "Username already exists!"})
        } else {
            bcrypt.hash(password, saltRounds, (err, hash) => {
                if(err) {
                    console.log(err);
                }

                database.query(`INSERT INTO users (username, password) VALUES ($1, $2);`, [username, hash]);
            })

            console.log("USER ADDED");
        }
    })
});

module.exports = router;