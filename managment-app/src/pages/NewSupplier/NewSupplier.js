import React, { useState } from "react";
import { Navbar, AddNewSupplier } from '../../components';
import style from './style/newSupplier.css';

const NewSupplier = (props) => {

    return(
        <>
        < Navbar />
        <div className={style.container}>
            <h1 className={style.mainTitle}>NEW SUPPLIER</h1>
            < AddNewSupplier />            
        </div> 
        </>
    )
}

export { NewSupplier };