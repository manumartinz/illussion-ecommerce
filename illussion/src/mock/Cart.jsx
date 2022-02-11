import React, { useContext } from 'react'
import { CartContext } from '../Context/useContext'

const Cart = () => {
    
    const { items, removeItem, clearItems } = useContext(CartContext);

    return (
        <div>
            {
                items.map((item) => (
                    <div key={item.id}>
                        <h3>{item.qty} - {item.marca}</h3>
                        <h4 onClick={() => removeItem(item.id)}>Borrar</h4>
                    </div>
                ))
            }

            <h5 onClick={() => clearItems()}>Vaciar Carrito</h5>
        </div>
    )
}




export default Cart
