
import React, { useState } from "react";
import { InputForm, Navbar } from '../../components';
import style from './style/odpis.css';

const Odpis = (props) => {

    return(
        <>
        < Navbar />
        <div className={style.container}>
            <h1 className={style.mainTitle}>ODPIS</h1>            
            < InputForm origin="odpis"/>
        </div> 
        </>
    )
}

export { Odpis };