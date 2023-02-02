import React, { useState } from "react";
import { Navbar, AddNewSupplier } from '../../components';
import './style/inventura.css';

const NewSupplier = (props) => {

    return(
        <>
        < Navbar />
        <div className="container">
            <h1 className="main-title">NEW SUPPLIER</h1>
            < AddNewSupplier />            
        </div> 
        </>
    )
}

export { NewSupplier };