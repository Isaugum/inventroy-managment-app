
import React, { useState } from "react";
import { InputForm } from '../InputForm';
import { Navbar } from '../Navbar';
import './style/inventura.css';

const Inventura = (props) => {

    return(
        <>
        < Navbar />
        <div className="container">
            <h1 className="main-title">INVENTURA</h1>            
            {/* Custom input! - Create inventura (seperate file) -> select*/}
        </div> 
        </>
    )
}

export { Inventura };