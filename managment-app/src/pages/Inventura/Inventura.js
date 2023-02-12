
import React, { useState } from "react";
import { Navbar, InputForm } from '../../components';
import style from './style/inventura.css';

const Inventura = (props) => {

    return(
        <>
        < Navbar />
        <div className={style.container}>
            <h1 className={style.mainTitle}>INVENTURA</h1>            
            < InputForm origin="inventura"/>
        </div> 
        </>
    )
}

export { Inventura };