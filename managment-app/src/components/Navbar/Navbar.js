import React, { useState, useContext } from "react";
import { ScreenContext } from "../../App";
import './style/navbar.css';

const Navbar = (props) => {

    const { handleMenuClick } = useContext(ScreenContext);

    return(
        <ul className="navbar">
            <button className="navbar-btn" onClick={handleMenuClick} data-btnvalue="mainMenu">Menu</button>
            <button className="navbar-btn" onClick={handleMenuClick} data-btnvalue="sprejem">Sprejem</button>
            <button className="navbar-btn" onClick={handleMenuClick} data-btnvalue="odpis">Odpis</button>
            <button className="navbar-btn" onClick={handleMenuClick} data-btnvalue="pipe">Pipe</button>
            <button className="navbar-btn" onClick={handleMenuClick} data-btnvalue="inventura">Inventura</button>
            <button className="navbar-btn" onClick={handleMenuClick} data-btnvalue="urnik">Urnik</button> 
        </ul>
    )
}

export { Navbar };