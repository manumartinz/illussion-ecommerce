
import React, { useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import './ItemDetail.css'

const ItemDetail = ({product}) => {
    const {addItem} = useContext(CartContext)
    const [add, setAdd] = useState(false);

    const onAdd = (count) => {
        setAdd(true)
        addItem(product, count)
    }

    return (
        <div className='itemDetail'>
            <img src={product.imgUrl} alt={product.id} />
            <section>
                    <h1>{product.marca}</h1>
                    <p>{product.desc}</p>
                    <h2>{product.precio}</h2>
                        {
                            add ?
                                <div>Añadido!</div>
                                :
                                <ItemCount item={product} max={10} initial={1} addItem={addItem} onAdd={onAdd}/>
                        }
            </section>
        </div>
    )
}

export { ItemDetail }
