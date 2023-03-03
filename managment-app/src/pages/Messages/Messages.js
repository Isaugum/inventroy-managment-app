import { useEffect, useState } from 'react';
import axios from 'axios';
import { DisplayMessages, NewMessage, Navbar } from "../../components"

import style from './style/Messages.module.css';

const Messages = () => {

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
                console.log(response.data.error);                
            } else {
                console.log(response.data);
                setMessages(response.data);
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
                setMessages(messages.filter(msg => msg.post_id !== post.post_id));
            }
        })
    }

    useEffect(() => {
        getMessages();
        console.log("Fetched")
    }, [didUpdate]);

    return(
        <>
            <Navbar />
            <div className={style.container} >
                < DisplayMessages messages={messages} deletePost={deletePost}/>
                < NewMessage didUpdate={didUpdate} setDidUpdate={setDidUpdate} />                   
            </div>
     
        </>

    )
}

export { Messages };