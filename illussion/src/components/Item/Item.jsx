// Aca va a ir la card 

import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({item}) => {

    return (
        <Link className='card' to={`/product/${item?.id}`}>
            <div className="producto">
                <img src={item.imgUrl} alt="auriculares"></img>
                <h3>{item.marca}</h3>
                <p className="precio">{item.precio}</p>
                <p>{item.desc}</p>
                <a id="" href="/">Comprar</a>
            </div>
        </Link>
    )
}

export default Item
