import React, { useState, useEffect, createContext } from "react";
import { MainMenu, Sprejem, Odpis, Inventura } from './components';

export const ScreenContext = createContext(null);

function App() {
  const [ screenState, updateScreenState ] = useState("mainMenu");

  const handleMenuClick = (e) => {
    e.preventDefault();

    let btnValue = e.target.dataset.btnvalue;
    console.log(btnValue);
    updateScreenState(btnValue);
  }

  return (
      <ScreenContext.Provider value={{ handleMenuClick }} className={"main-screen"}>
        {screenState === "mainMenu" && <MainMenu handleMenuClick={handleMenuClick} />}
        {screenState === "sprejem" && <Sprejem handleMainMenu={handleMenuClick}/>}
        {screenState === "odpis" && <Odpis handleMainMenu={handleMenuClick}/>}
        {screenState === "inventura" && <Inventura handleMainMenu={handleMenuClick}/>}
      </ScreenContext.Provider>
  );
}

export default App;
