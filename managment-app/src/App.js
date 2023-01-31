import React, { useState, useEffect, createContext } from "react";
import { MainMenu, Sprejem, Odpis, Inventura, FourOFour, NewItem, NewSupplier } from './pages';
import { Routes, Route } from "react-router-dom";

function App() {
  const [ screenState, updateScreenState ] = useState("mainMenu");

  const handleMenuClick = (e) => {
    e.preventDefault();

    let btnValue = e.target.dataset.btnvalue;
    console.log(btnValue);
    updateScreenState(btnValue);
  }

  return (
      <Routes>
        <Route path="/" element={< MainMenu />} />
        <Route path="/sprejem" element={< Sprejem />}/>
        <Route path="/odpis" element={< Odpis />}/>
        <Route path="/inventura" element={< Inventura />}/>
        <Route path="/NewItem" element={< NewItem />}/>
        <Route path="/newSupplier" element={< NewSupplier />}/>
        <Route path="*" element={< FourOFour />} />
        
      </Routes>
      /*<ScreenContext.Provider value={{ handleMenuClick }} className={"main-screen"}>
        {screenState === "mainMenu" && <MainMenu handleMenuClick={handleMenuClick} />}
        {screenState === "sprejem" && <Sprejem handleMainMenu={handleMenuClick}/>}
        {screenState === "odpis" && <Odpis handleMainMenu={handleMenuClick}/>}
        {screenState === "inventura" && <Inventura handleMainMenu={handleMenuClick}/>}
      </ScreenContext.Provider>*/
  );
}

export default App;
