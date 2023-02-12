

import React, { useState, useEffect, createContext } from "react";
import { MainMenu, Sprejem, Odpis, Inventura, FourOFour, NewItem, NewSupplier, LoginScreen } from './pages';
import { Routes, Route } from "react-router-dom";

export const DataContext = createContext(null);
export const UserSession = createContext(null);

function App() {

  const [ userSession, setUserSession ] = useState(false);

  return (
      <Routes>
        <Route path="/" element={userSession ? < MainMenu /> : < LoginScreen />} />
        <Route path="/sprejem" element={< Sprejem />}/>
        <Route path="/odpis" element={< Odpis />}/>
        <Route path="/inventura" element={< Inventura />}/>
        <Route path="/NewItem" element={< NewItem />}/>
        <Route path="/newSupplier" element={< NewSupplier />}/>
        <Route path="*" element={< FourOFour />} />
      </Routes>
  );
}

export default App;
