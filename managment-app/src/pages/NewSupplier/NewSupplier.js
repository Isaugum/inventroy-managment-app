
import React, { useState } from "react";
import { Navbar } from '../../components';
import './style/inventura.css';

const NewSupplier = (props) => {

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

export { NewSupplier };