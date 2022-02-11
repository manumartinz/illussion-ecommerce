import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'
import logo from '../../img/logo.png'

const NavBar = () => {

    const categories = [
        {
            id:'1', address:'/', text: 'Inicio'
        },
        {
            id:'2', address:'/category/A', text: 'Logitech'
        },
        {
            id:'3', address:'/category/B', text: 'HyperX'
        },
        {
            id:'4', address:'/category/C', text: 'Corsair'
        },
        {
            id:'5', address:'/category/D', text: 'SteelSeries'
        },
    ];

    return (
                <>
                    <header className="header">
                        <Link to='/' href="/"><img className='logo' src={logo} alt=''/></Link>
                           <nav className="nav">
                                <ul className="menu">
                                    {categories.map((cat) => {
                                        return (
                                                <li className='menu__item' key={cat.id}>
                                                    <Link to={cat.address}>{cat.text}</Link>
                                                </li>    
                                                )
                                            })} 
                                </ul>
                                <CartWidget/>
                            </nav>
                    </header>
                </>
            
            )
                       
    
}
export default NavBar
