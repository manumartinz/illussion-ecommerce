import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'

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
                    {categories.map((cat) => {
                        return (
                            <div class='sidebar'>
                                <header className="sidebar">
                                    <nav className="nav">
                                        <div className='nav__img'></div>
                                        <ul className="menu">
                                                <li className='menu__item' key={cat.id}>
                                            <Link to={cat.address}>{cat.text}</Link>
                                                </li>    
                                        </ul>
                                    </nav>
                                </header>
                            </div>
                        )
                    })}
                    <CartWidget/>
                </>
            
                  /*  <header key={cat.id}>
                        <nav className="nav">
                            <div className="nav__img">
                                <Link to={cat.address}><img className="logo" src="./logo.png" alt=""></img></Link>
                            </div>
                            <ul className="menu">
                                <li key={cat.id} className="menu__item logitech">
                                    <Link to={cat.address}>Logitech</Link>
                                </li>
                                <li key={cat.id} className="menu__item steels">
                                    <Link to={cat.address}>SteelSeries</Link>
                                </li>
                                <li key={cat.id} className="menu__item corsair">
                                    <Link to={cat.address}>Corsair</Link>
                                </li>
                                <li key={cat.id} className="menu__item hyperx">
                                    <Link to={cat.address}>HyperX</Link>
                                </li>
                            </ul>
                            <CartWidget/>
                            <span className="btn_menu">
                                <i className="fas fa-bars"></i>
                            </span>
                        </nav>
                    </header> */
                    )
                       
    

      /*   <header>
            <nav className="nav">
                <div className="nav__img">
                    <a href="a"><img className="logo" src="./logo.png" alt=""></img></a>
                </div>
                <ul className="menu">
                    <li className="menu__item logitech">
                        <a href="a">Logitech</a>
                    </li>
                    <li className="menu__item steels">
                        <a href="a">SteelSeries</a>
                    </li>
                    <li className="menu__item corsair">
                        <a href="a">Corsair</a>
                    </li>
                    <li className="menu__item hyperx">
                        <a href="a">HyperX</a>
                    </li>
                </ul>
                <CartWidget/>
                <span className="btn_menu">
                    <i className="fas fa-bars"></i>
                </span>
            </nav>
        </header> */
    
}
export default NavBar
