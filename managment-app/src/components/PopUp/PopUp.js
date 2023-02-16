import React from 'react'
import style from './style/PopUp.module.css';

const PopUp = ({ message, setError }) => {

    return (
        <div className={style.container}>
            <div className={style.messageBox}>
                <h2 className={style.header}>ERROR</h2>
                <h2 className={style.message}>{message}</h2>
                <button className={style.confirmBtn} onClick={() => setError("")}>OK</button>
            </div>
        </div>
    )
}


export { PopUp };
