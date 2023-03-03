import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, DisplayMessages, NewMessage } from "../../components";
import style from './style/mainMenu.module.css'
import axios from 'axios';

const MainMenu = (props) => {

    return(
        <React.Fragment>
            <div className={style.container}>
                <div className={style.mainMenuBtns}>
                    <Link className={style.menuNavBtn} to="/obvestila" >Obvestila</Link>
                    <Link className={style.menuNavBtn} to="/sprejem" >Sprejem</Link>
                    <Link className={style.menuNavBtn} to="/odpis" >Odpis</Link>
                    <Link className={style.menuNavBtn} to="/pipe" >Pipe</Link>
                    <Link className={style.menuNavBtn} to="/inventura" >Inventura</Link>
                    <Link className={style.menuNavBtn} to="/newItem" >Update Items</Link>
                    <Link className={style.menuNavBtn} to="/newSupplier" >Update Suppliers</Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export { MainMenu };