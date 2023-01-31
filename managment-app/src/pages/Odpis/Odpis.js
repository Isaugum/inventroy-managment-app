
import React, { useState } from "react";
import { InputForm, Navbar } from '../../components';
import style from './style/odpis.css';

const Odpis = (props) => {

    return(
        <>
        < Navbar />
        <div className="container">
            <h1 className="mainTitle">ODPIS</h1>            
            < InputForm origin="odpis"/>
        </div> 
        </>
    )
}

export { Odpis };