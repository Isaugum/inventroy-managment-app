const express = require('express');
let router = express.Router();

const { database } = require('../database');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.post("/", jsonParser, (req, res) => {

    if(req.body === undefined || req.body.password === undefined || req.body.username === undefined) {
        console.log("INVALID REQUEST");
        return null;
    }

    let username = req.body.username;
    let password = req.body.password;

    database.query(`SELECT * FROM users WHERE username=$1`, [username], (err, result) => {
        if(err) {
            console.log(err);
            res.send({error: err});
        }

        if(result.rows.length > 0) {
            if(result.rows[0].username === "" || result.rows[0].password === "") {
                console.log("Invalid username or password!");
            } else {
                bcrypt.compare(password, result.rows[0].password, (error, response) => {
                    if(error) {
                        console.log(error);
                        res.send({error: error});
                    } else if(response) {
                        console.log(response);
                    } else {
                        console.log("INVALID PASSWORD");
                    }
                })
            }
        } else {
            console.log("USERNAME DOES NOT EXIST!");
        }
    })
})

module.exports = router;