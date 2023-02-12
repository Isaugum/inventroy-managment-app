const express = require('express');
let router = express.Router();
const { database } = require('../database');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const jwt = require('jsonwebtoken');

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
                res.send({error: "Invalid username or password!"});
            } else {
                bcrypt.compare(password, result.rows[0].password, (error, response) => {
                    if(error) {
                        console.log(error);
                        res.send({error: error});
                    } else if(response) {
                        const payload = { userID: result.rows[0].id, username: result.rows[0].username };
                        const secret = process.env.SECRET;

                        const token = jwt.sign(payload, secret, { expiresIn: "1h"});

                        res.send({ user: username, token: token});
                    } else {
                        console.log("INVALID PASSWORD");
                        res.send({error: "Invalid password!"});
                    }
                })
            }
        } else {
            console.log("USERNAME DOES NOT EXIST!");
            res.send({error: "Username does not exist!"});
        }
    })
})

module.exports = router;