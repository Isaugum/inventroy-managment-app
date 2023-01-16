import React from "react";

const MainMenu = (props) => {

    return(
        <React.Fragment>
            <div className="button-container">
                <button className="main-menu-button" onClick={props.handleMenuClick} data-btnvalue="sprejem">Sprejem</button>
                <button className="main-menu-button" onClick={props.handleMenuClick} data-btnvalue="odpis">Odpis</button>
                <button className="main-menu-button" onClick={props.handleMenuClick} data-btnvalue="pipe">Pipe</button>
                <button className="main-menu-button" onClick={props.handleMenuClick} data-btnvalue="inventura">Inventura</button>
                <button className="main-menu-button" onClick={props.handleMenuClick} data-btnvalue="urnik">Urnik</button> 
            </div>
        </React.Fragment>
    )
}

export { MainMenu };