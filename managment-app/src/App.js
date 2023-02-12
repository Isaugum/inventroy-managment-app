

import React, { useState, useEffect, createContext } from "react";
import { MainMenu, Sprejem, Odpis, Inventura, FourOFour, NewItem, NewSupplier } from './pages';
import { Routes, Route } from "react-router-dom";

export const DataContext = createContext(null);

function App() {
  const [ screenState, updateScreenState ] = useState("mainMenu");
  const [ suppliers, updateSuppliers ] = useState(
    {"bevog": {
      id: "bvg",
      products: [
          "Baja", "Kramah", "Tak", "Helles", "Buzz"
      ]      
    },
    "barut": {
      id: "brt",
      products: [
          "Summer Snow", "Kletak", "Roadside Picnic"
      ]      
    }});

  const handleMenuClick = (e) => {
    e.preventDefault();

    let btnValue = e.target.dataset.btnvalue;
    console.log(btnValue);
    updateScreenState(btnValue);
  }

  return (
    <DataContext.Provider value={{suppliers, updateSuppliers}}>
      <Routes>
        <Route path="/" element={< MainMenu />} />
        <Route path="/sprejem" element={< Sprejem />}/>
        <Route path="/odpis" element={< Odpis />}/>
        <Route path="/inventura" element={< Inventura />}/>
        <Route path="/NewItem" element={< NewItem />}/>
        <Route path="/newSupplier" element={< NewSupplier />}/>
        <Route path="*" element={< FourOFour />} />
        
      </Routes>
    </DataContext.Provider>
  );
}

export default App;
