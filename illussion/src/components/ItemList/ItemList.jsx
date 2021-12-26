//esto va a mapear los productos y devolver un item por cada uno

import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({items}) => {
    return (
        <div className="seccion__productos">
            {items.map((item) => {
                return <Item key={item.id} item={item} imgUrl={item.imgUrl}/>
                })}
        </div>
    )
}


export default ItemList
