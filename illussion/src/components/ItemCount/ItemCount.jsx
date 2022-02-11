
import React, { useContext, useState } from 'react';
import './ItemCount.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext';

const ItemCount = ({ item, max, initial }) => {
    const [counter, setCounter] = useState(initial);

    const {addItem} = useContext(CartContext)

    const agregarCarrito = (counter) => {
        console.log('estoy en agregarCarrito ')
        setCounter (counter);
        addItem({item, quantity:counter}); 
    };

    const sumaQty = () => {
        counter < max ? setCounter(counter + 1) : console.log('sumaQty',counter)
    }
    
    const restaQty = () => {
        counter > 1 ? setCounter(counter - 1) : console.log('Minimo alcanzado.')
    }

    return (
        <>
            <div className='ItemCount'>
                <button className='button-4' onClick={restaQty}>-</button>
                <h3>{counter}</h3>
                <button className='button-4' onClick={sumaQty}>+</button>
            </div>
            
            <div className='botones'>
                <button className="button-64" onClick={() => agregarCarrito(counter)}><span class="text">Añadir al Carrito</span></button>
                <Link className='Link button-4' to='/cart'>Finalizar Compra</Link>
            </div>
        </>
    )

}

export {ItemCount}
