
/* Imports */
import React from 'react';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css'

const App = () => {

  return (
    <BrowserRouter>
    {/* Arriba de switch pongo todo lo que se mantenga en la app like NavBar */}
        <NavBar/>
  
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae eligendi rem dignissimos quibusdam eum unde cum, et, nobis veniam, repellat consequuntur quidem esse eius blanditiis expedita voluptas praesentium. Ipsa, velit.</p>
            <ItemListContainer/>
          </Route>
          <Route exact path="/category/:catId">
            <ItemListContainer/>
          </Route>

          <Route path="/product/:itemId">
            <ItemDetailContainer/>
          </Route>
          {/* <Route path='*'>
            <h1>¡Error 404!</h1> 
            <Redirect to="/"/>

          </Route> */}
        </Switch>
    </BrowserRouter>
  );
}


export default App;
