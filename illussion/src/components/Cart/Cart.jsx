
import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Total } from '../Total/Total'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, removeItem, clear } = useContext(CartContext);

        return(
            <div>
                <div>
                    { cart.length > 0 ? 
                    <div>
                    {
                        cart.map((product) => {

                            return(
                                <div key={product.id}>
                                    <h1>{`- ${product.marca} - $${product.precio} - x${parseInt(product.quantity)}`}</h1>
                                    <button onClick={()=>removeItem(product)}>Remove Item</button>
                                </div>
                            )
                        })
                    }
                    </div>
                        :
                    <>
                        <h1>El Carrito está vacío!</h1>
                        <Link to={'/'}>Ir al menú.</Link>
                    </>
                    }
                    
                    <Total/>
                    <div>
                        <button onClick={clear}> Vaciar Carrito</button>
                    </div>
                </div>
            </div>
        )
    }


export default Cart
