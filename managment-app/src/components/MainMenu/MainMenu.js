import React from "react";
import { MainMenuButton } from "./MainMenuButton";
import { getUrnik, getInventura, getSprejem, getOdpis, getPipe } from './buttonFunctions';
const MainMenu = (props) => {


    return(
        <React.Fragment>
            <div className="button-container">
                < MainMenuButton buttonText="Sprejem" handleClick={getSprejem}/>
                < MainMenuButton buttonText="Odpis" handleClick={getOdpis}/>
                < MainMenuButton buttonText="Pipe" handleClick={getPipe}/>
                < MainMenuButton buttonText="Inventura" handleClick={getInventura}/>
                < MainMenuButton buttonText="Urnik" handleClick={getUrnik}/> 
            </div>
        </React.Fragment>
    )
}

export { MainMenu };