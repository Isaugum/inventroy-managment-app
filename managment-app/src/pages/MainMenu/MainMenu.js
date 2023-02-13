import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import style from './style/mainMenu.module.css'

const MainMenu = (props) => {


    return(
        <React.Fragment>
            <div className={style.container}>
                <Navbar />
                <div className={style.importantMsg}>
                </div>
            </div>
        </React.Fragment>
    )
}

export { MainMenu };