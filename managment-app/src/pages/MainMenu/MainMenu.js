import React, { useContext } from "react";
import { Link } from "react-router-dom";
import style from './styles/mainMenu.css'

const MainMenu = (props) => {

    //const { handleMenuClick } = useContext(ScreenContext);

    return(
        <React.Fragment>
            <div className={style.buttonContainer}>
                <Link className="main-menu-button" to="/sprejem">Sprejem</Link>
                <Link className="main-menu-button" to="/odpis">Odpis</Link>
                <Link className="main-menu-button" to="/pipe">Pipe</Link>
                <Link className="main-menu-button" to="/inventura">Inventura</Link>
            </div>
        </React.Fragment>
    )
}

export { MainMenu };