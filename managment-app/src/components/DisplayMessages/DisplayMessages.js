import style from './style/DisplayMessages.module.css';

const DisplayMessages = ({ messages, deletePost }) => {

    return(
        <div className={style.container}>
        {
        messages.length > 0 ? 
        messages.map(msg => {
            return <div className={style.msgContainer}key={msg.post_id}>
                <div className={style.postHead}>
                    <h3 className={style.msgTitle}>{msg.post_title}</h3>  
                    <button className={style.deleteBtn} onClick={e => deletePost(msg)}> X </button>                  
                </div>
                <p className={style.msgBody}>{msg.post_content}</p>
                </div>
                })
            : <h1>No messages</h1>
        }
        </div>
    )
}

export { DisplayMessages };