
import React, { useState } from "react";
import { InputForm, Navbar } from '../../components';
import './style/sprejem.css';

const Sprejem = (props) => {

    return(
        <>  
        < Navbar />
        <div className="container">
            <h1 className="main-title">SPREJEM</h1>            
            < InputForm origin="sprejem"/>
        </div> 
        </>
    )
}

export { Sprejem };