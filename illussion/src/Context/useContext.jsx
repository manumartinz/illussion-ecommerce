
import React, { createContext, useState } from 'react'

export const CartContext = createContext([])

export const CartProvider = ({ defaultValue=[],children }) => {
    const [items, setItems] = useState(defaultValue);
    const isInCart = (id) => {
        const found = items.find(item => item.id === id);
        return found; 
    }

    const addItem = (item, quantity) => {
        isInCart(item.id)
            ?
            setItems(items.map((prod) => {
                if(prod.id === item.id) {
                    prod.qty += quantity;
                }
                return prod
            }))
            :
            setItems([...items, { id:item.id, marca: item.marca, precio: item.precio, desc: item.desc, imgUrl: item.ImgUrl, quantity: quantity }]);
    }
    
    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }
    const clearItems = () => {
        setItems([])
    }

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, clearItems}}>
            {children}
        </CartContext.Provider>
    )

    }