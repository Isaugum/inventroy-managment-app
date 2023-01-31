
import React, { useState } from "react";
import { InputForm, Navbar } from '../../components';
import style from './style/sprejem.css';

const Sprejem = (props) => {

    return(
        <>  
        < Navbar />
        <div className="container">
            <h1 className="mainTitle">SPREJEM</h1>            
            < InputForm origin="sprejem"/>
        </div> 
        </>
    )
}

export { Sprejem };