
import React, { useState } from "react";
import { InputForm } from '../InputForm';
import { Navbar } from '../Navbar';
import './style/odpis.css';

const Odpis = (props) => {

    return(
        <>
        < Navbar />
        <div className="container">
            <h1 className="main-title">ODPIS</h1>            
            < InputForm origin="odpis"/>
        </div> 
        </>
    )
}

export { Odpis };