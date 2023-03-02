const express = require('express');
let router = express.Router();
const { database } = require('../../database');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


router.post("/", jsonParser, (req, res) => {

    let postID= req.body.post_id;
    let postTitle = req.body.postTitle;
    let date = new Date().toISOString().split('T')[0];

    database.query(`DELETE FROM messages WHERE post_id=$1 AND post_title=$2 AND date=$3`, [postID, postTitle, date], (err, result) => {
        if(err) {
            console.log(err);
            res.send({error: err});
        }

        console.log(`${postTitle} deleted!`);
        res.send({message: `Item ${postTitle} deleted!`})
    })
});

module.exports = router;