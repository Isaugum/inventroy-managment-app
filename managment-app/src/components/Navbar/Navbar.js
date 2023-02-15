import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import style from './style/Navbar.module.css';

import { UserSession } from '../../App.js';
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const [ navbarPosition, setNavbarPosition ] = useState({
        right: "-700px",
        buttonOpen: "block",
    });

    const { user, setUserSession } = useContext(UserSession);
    const navigate = useNavigate();

    const logoutHandler = () => {
        setUserSession(false);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/');
    }

    const handleNavbarClick = (e) => {
        if(e.target.id === "close") {
            setNavbarPosition({
                right: "-700px",
                buttonOpen: "block",
            });
        }

        if(e.target.id === "open") {
            setNavbarPosition({
                right: "0",
                buttonOpen: "none",
            });
        }
    }

    return(
        <>
        <div className={style.openBtn} id="open" style={{ display: navbarPosition.openButton }} onClick={e => handleNavbarClick(e)}>MENU</div>
        <ul className={style.navbarContainer} style={{right: navbarPosition.right}}>
            <Link className={style.navbarBtn} to="/" >Main Menu</Link>
            <Link className={style.navbarBtn} to="/sprejem" >Sprejem</Link>
            <Link className={style.navbarBtn} to="/odpis" >Odpis</Link>
            <Link className={style.navbarBtn} to="/pipe" >Pipe</Link>
            <Link className={style.navbarBtn} to="/inventura" >Inventura</Link>
            <Link className={style.navbarBtn} to="/newItem" >New Item</Link>
            <Link className={style.navbarBtn} to="/newSupplier" >Update Suppliers</Link>
            <div className={style.navbarBtn} id="close" onClick={e => handleNavbarClick(e)}>CLOSE</div>
            <button className={style.logoutBtn} onClick={logoutHandler}>Logout</button>
        </ul>
        </>
    )
}

export { Navbar };