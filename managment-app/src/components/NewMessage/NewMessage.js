import axios from 'axios';
import {useState} from 'react';

import style from './style/NewMessage.module.css';

const NewMessage = ({ didUpdate, setDidUpdate }) => {

    const [ messageContent, setMessageContent] = useState("");
    const [ messageTitle, setMessageTitle] = useState("");

    const titleInput = document.getElementById("titleInput");
    const bodyInput = document.getElementById("bodyInput");

    const addMessage = async (e) => {
        e.preventDefault();

        await axios({
            method: "post",
            url: "/new-message",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                post_id: Math.floor(Math.random() * 100),
                postTitle: messageTitle,
                postContent: messageContent
            }
        }).then(response => {
            if(response.data.error) {
                console.log(response.data.error);
            } else {
                console.log(response.data);
                setDidUpdate(!didUpdate);
            }
        }).catch(err => {
            console.log(err);
        })

        titleInput.value = "";
        bodyInput.value = "";
    }

    return(
        <>
        <div className={style.container}>
            <input id="titleInput" className={style.titleInput} type="text" placeholder="title" onChange={e => setMessageTitle(e.target.value)} />
            <textarea id="bodyInput" className={style.bodyInput} type="text" rows="10" cols="50" placeholder="body..." onChange={e => setMessageContent(e.target.value)} />
            <button className={style.submitBtn} onClick={(e) => addMessage(e)}>Submit</button>
        </div>
        </>
    )
}

export { NewMessage };