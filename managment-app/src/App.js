import axios from 'axios';

import React, { useState, useEffect, createContext } from "react";
import { MainMenu, Sprejem, Odpis, Inventura, FourOFour, NewItem, NewSupplier, LoginScreen } from './pages';
import { Routes, Route } from "react-router-dom";

export const DataContext = createContext(null);
export const UserSession = createContext(null);

function App() {

  const [ userSession, setUserSession ] = useState(false);
  const [ user, setUser ] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUserSession(token);
      setUser(user);
    }
  }, []);

  return (
    <UserSession.Provider value={{userSession, setUserSession, user, setUser}}>
      <Routes>
        <Route path="/" element={userSession ? < MainMenu /> : < LoginScreen/>} />
        <Route path="/sprejem" element={< Sprejem />}/>
        <Route path="/odpis" element={< Odpis />}/>
        <Route path="/inventura" element={< Inventura />}/>
        <Route path="/NewItem" element={< NewItem />}/>
        <Route path="/newSupplier" element={< NewSupplier />}/>
        <Route path="*" element={< FourOFour />} />
      </Routes>
    </UserSession.Provider>
  );
}

export default App;
