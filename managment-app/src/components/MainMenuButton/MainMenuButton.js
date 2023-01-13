import React from "react";

const MainMenuButton = (props) => {


    return(
        <React.Fragment>
            <button className="main-menu-button" onClick={props.handleClick}>{props.buttonText}</button>
        </React.Fragment>
    )
}

export { MainMenuButton };