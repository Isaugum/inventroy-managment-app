import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import './style/navbar.css';

const Navbar = (props) => {

    return(
        <ul className="navbar">
            <Link className="main-menu-button" to="/">Main Menu</Link>
            <Link className="main-menu-button" to="/sprejem">Sprejem</Link>
            <Link className="main-menu-button" to="/odpis">Odpis</Link>
            <Link className="main-menu-button" to="/pipe">Pipe</Link>
            <Link className="main-menu-button" to="/inventura">Inventura</Link>
            <Link className="main-menu-button" to="/newItem">New Item</Link>
            <Link className="main-menu-button" to="/newSupplier">New Supplier</Link>
        </ul>
    )
}

export { Navbar };