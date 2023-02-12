import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import style from './style/navbar.css';

import {UserSession} from '../../App.js';
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const { user, setUserSession } = useContext(UserSession);
    const navigate = useNavigate();

    const logoutHandler = () => {
        setUserSession(false);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/');
    }

    return(
        <ul className={style.navbar}>
            <Link className="main-menu-button" to="/">Main Menu</Link>
            <Link className="main-menu-button" to="/sprejem">Sprejem</Link>
            <Link className="main-menu-button" to="/odpis">Odpis</Link>
            <Link className="main-menu-button" to="/pipe">Pipe</Link>
            <Link className="main-menu-button" to="/inventura">Inventura</Link>
            <Link className="main-menu-button" to="/newItem">New Item</Link>
            <Link className="main-menu-button" to="/newSupplier">New Supplier</Link>
            <button onClick={logoutHandler}>Logout</button>
        </ul>
    )
}

export { Navbar };