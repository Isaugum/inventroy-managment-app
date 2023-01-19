import React, { useContext } from "react";
import { ScreenContext } from "../../App";
import './styles/main-menu.css'

const MainMenu = (props) => {

    const { handleMenuClick } = useContext(ScreenContext);

    return(
        <React.Fragment>
            <div className="button-container">
                <button className="main-menu-button" onClick={handleMenuClick} data-btnvalue="sprejem">Sprejem</button>
                <button className="main-menu-button" onClick={handleMenuClick} data-btnvalue="odpis">Odpis</button>
                <button className="main-menu-button" onClick={handleMenuClick} data-btnvalue="pipe">Pipe</button>
                <button className="main-menu-button" onClick={handleMenuClick} data-btnvalue="inventura">Inventura</button>
                <button className="main-menu-button" onClick={handleMenuClick} data-btnvalue="urnik">Urnik</button> 
            </div>
        </React.Fragment>
    )
}

export { MainMenu };