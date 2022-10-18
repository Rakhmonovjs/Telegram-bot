import './App.css';
import React, { useState, useEffect } from 'react';
import {useTelegram} from "../src/Components/hooks/useTelegram";
import Header from "./Components/Header/Header";
// const {user, onClose} = useTelegram();
import {Route, Routes} from 'react-router-dom'
import Productlist from './Components/Productlist/Productlist';
import Form from './Components/Form/Form';



function App() {
  const {onToggleButton, tg} = useTelegram();


  useEffect( () => {
    tg.ready();
  }, [])


  return (
    <div className="App">
        <Header/>
        {/* <button onClick={onToggleButton}> Toggle</button> */}
        <Routes>
          <Route index element={<Productlist/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
        
    </div>
  );
}

export default App;
