
import React, { useState } from "react";
import { Navbar, InputForm } from '../../components';
import './style/inventura.css';

const Inventura = (props) => {

    return(
        <>
        < Navbar />
        <div className="container">
            <h1 className="main-title">INVENTURA</h1>            
            < InputForm origin="inventura"/>
        </div> 
        </>
    )
}

export { Inventura };