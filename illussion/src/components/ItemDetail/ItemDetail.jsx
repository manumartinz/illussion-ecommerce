import React from 'react'
import './ItemDetail.css'


export const ItemDetail = ({
    id,
    marca,
    category, 
    imgUrl, 
    desc, 
    precio,

}) => {
    return (
        <div className='itemDetail'>
            <img src={imgUrl} alt={id} />
            <section>
                <h1>{marca}</h1>
                <p>{desc}</p>
                <h2>{precio}</h2>
            </section>
        </div>
    )
}