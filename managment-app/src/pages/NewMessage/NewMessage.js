import axios from 'axios';
import {useState} from 'react';

const NewMessage = () => {

    const [ messageContent, setMessageContent] = useState("");
    const [ messageTitle, setMessageTitle] = useState("");
    const [ didUpdate, setDidUpdate ] = useState(false);

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
            console.log(response);

            if(response.data.error) {
                console.log(response.data.error);
            } else {
                console.log(response.data);
                setDidUpdate(!didUpdate);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    return(
        <>
        <div>
            <input type="text" placeholder="title" onChange={e => setMessageTitle(e.target.value)} />
            <input type="text" onChange={e => setMessageContent(e.target.value)} />
            <button onClick={(e) => addMessage(e)}>Submit</button>
        </div>
        </>
    )
}

export { NewMessage };