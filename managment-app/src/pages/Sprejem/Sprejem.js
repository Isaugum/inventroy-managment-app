
import React, { useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { InputForm, Navbar } from '../../components';
import style from './style/sprejem.css';
import {UserSession} from '../../App.js';
    

const Sprejem = () => {

    const { userSession, setUserSession } = useContext(UserSession);
    const navigate = useNavigate();

    useEffect(() => {
        if(!userSession) {
            navigate("/");
        }
    })

    return(
        <>  
        < Navbar />
        <div className={style.container}>
            <h1 className={style.mainTitle}>SPREJEM</h1>            
        </div> 
        </>
    )
}

export { Sprejem };