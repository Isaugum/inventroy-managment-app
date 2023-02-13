
import React, { useState } from "react";
import { Navbar } from '../../components';
import style from './style/newItem.css';

const NewItem = (props) => {

    return(
        <>
        < Navbar />
        <div className={style.container}>
            <h1 className={style.mainTitle}>New Item</h1>
        </div> 
        </>
    )
}

export { NewItem };