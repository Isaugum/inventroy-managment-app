
import React, { useState } from "react";
import { InputForm, Navbar } from '../../components';
import style from './style/sprejem.css';

const Sprejem = (props) => {

    return(
        <>  
        < Navbar />
        <div className={style.container}>
            <h1 className={style.mainTitle}>SPREJEM</h1>            
        </div> 
        </>
    )
}

export { Sprejem };