import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import style from './style/mainMenu.module.css'

const MainMenu = (props) => {

    const [ messages, setMessages ] = useState([]);

    return(
        <React.Fragment>
            <div className={style.container}>
                <Navbar />
                <div className={style.importantMsg}>
                    {
                        messages.length > 0 ? 
                        messages.map(msg => {
                            return <p>MSG</p>
                        })
                        : <h1>No messages</h1>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export { MainMenu };