import React, { useState, useEffect } from "react";
import { MainMenu, Sprejem } from './components';

function App() {
  const [ screenState, updateScreenState ] = useState("mainMenu");

  const handleMenuClick = (e) => {
    e.preventDefault();

    let btnValue = e.target.dataset.btnvalue;
    updateScreenState(btnValue);
  }

  return (
      <div className={"main-screen"}>
        {screenState === "mainMenu" && <MainMenu handleMenuClick={handleMenuClick} />}
        {screenState === "sprejem" && <Sprejem handleMainMenu={handleMenuClick}/>}
      </div>
  );
}

export default App;
