
import React, { useState } from "react";
import { Navbar, AddNewItem } from '../../components';
import './style/inventura.css';

const NewItem = (props) => {

    return(
        <>
        < Navbar />
        <div className="container">
            <h1 className="main-title">New Item</h1>            
            < AddNewItem />
        </div> 
        </>
    )
}

export { NewItem };