
/* Imports */
import React from 'react';
import './App.css'
import { CartContextProvider } from './Context/CartContext';
import Router from './Router/Router';

const App = () => {

  return (
    <>
      <CartContextProvider>
        <Router/>
      </CartContextProvider>
    </>
  );
}


export default App;
