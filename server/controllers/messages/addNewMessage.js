const express = require('express');
let router = express.Router();
const { database } = require('../../database');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.post("/", jsonParser, (req, res) => {

    let postID= req.body.post_id;
    let postTitle = req.body.postTitle;
    let postContent = req.body.postContent;
    let date = new Date().toISOString().split('T')[0];

    if(postTitle === "" || postContent === "") {
        console.log("INVALID REQUEST");
        return null;
    }


    database.query(`INSERT INTO messages (post_id, post_title, post_content, date) VALUES ($1, $2, $3, $4);`, [postID, postTitle, postContent, date], (err, result) => {
        if(err) {
            console.log(err);
            res.send({error: err});
        } else {
            console.log("MESSAGE ADDED");
            res.send({ message: "Message added"});                    
        }
     });

});

module.exports = router;