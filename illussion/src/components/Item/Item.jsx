// Aca va a ir la card 

import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({item}) => {

    return (
        <Link to={`/product/${item.id}`}>
            <div className="producto">
                <img src={`./img/${item.imgUrl}`} alt=""></img>
                <h3>{item.marca}</h3>
                <p>{item.precio}</p>
                <p>{item.desc}</p>
                <a id="" href="/">Comprar</a>
            </div>
        </Link>
    )
}

export default Item
