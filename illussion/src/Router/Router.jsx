import './Router.css'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from '../Containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../Containers/ItemListContainer/ItemListContainer';
import NavBar from '../components/NavBar/NavBar';
import Cart from '../components/Cart/Cart';
import Footer from '../components/Footer/Footer';
import banner from '../img/banner-log.jpg'
import Mouses from '../components/Mouses/Mouses';

const Router = () => {
    return (
        <BrowserRouter>
        <NavBar/>
        <h1 className='router-titulo'>Illusion Ecommerce</h1>
        <img className='banner' src={banner} alt=''/>
  
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route exact path="/category/:catId">
            <ItemListContainer/>
          </Route>

          <Route exact path="/product/:itemId">
            <ItemDetailContainer/>
          </Route>

          <Route exact path='/cart'>
            <Cart/>
          </Route>
        </Switch>
        <Mouses/>
        <Footer/>
    </BrowserRouter>
    )
}

export default Router
