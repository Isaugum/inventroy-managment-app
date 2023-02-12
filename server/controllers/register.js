const express = require('express');
let router = express.Router();

const { database } = require('../database');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.post("/", jsonParser, (req, res) => {
    if(req.body === undefined || req.body.password === undefined || req.body.username === undefined) {
        throw "INVALID REQUEST";
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
        } else {
            bcrypt.harsh(password, saltRounds, (err, hash) => {
                if(err) {
                    console.log(err);
                }

                database.query(`INSERT INTO users (username, password) VALUES ($1, $2);`, [username, hash]);
            })

            console.log("USER ADDED");
        }
    })
});