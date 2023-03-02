import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import style from './style/mainMenu.module.css'
import axios from 'axios';
import { NewMessage } from '../../pages';

const MainMenu = (props) => {

    const [ messages, setMessages ] = useState([]);
    const [ didUpdate, setDidUpdate ] = useState(false);

    const getMessages = async () => {

        await axios({
            method: "get",
            url: "/get-messages",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => {
            if(response.data.error) {
                console.log(response.data);                
            } else {
                setMessages(response.data);
                setDidUpdate(!didUpdate);
            }
        })
    }

    const deletePost = async (post) => {

        await axios({
            method: "post",
            url: "/remove-message",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                post_id: post.post_id,
                postTitle: post.post_title,
                date: post.date
            }
        }).then(response => {
            if(response.data.error) {
                console.log(response.data);                
            } else {
                console.log(response.data);
                setMessages(messages.filter(msg => msg.post_id !== post.post_id && msg.post_title !== post.post_title && msg.date !== post.date));
                setDidUpdate(!didUpdate);
            }
        })
    }

    useEffect(() => {
        getMessages();

    }, []);

    return(
        <React.Fragment>
            <div className={style.container}>
                <Navbar />
                <div className={style.importantMsg}>
                    {
                        messages.length > 0 ? 
                        messages.map(msg => {
                            return <div key={msg.post_id}>
                                <h5>{msg.date}</h5>
                                <h3>{msg.post_title}</h3>
                                <p>{msg.post_content}</p>
                                <button onClick={e => deletePost(msg)}> X </button>
                            </div>
                        })
                        : <h1>No messages</h1>
                    }
                </div>
                < NewMessage />
            </div>
        </React.Fragment>
    )
}

export { MainMenu };