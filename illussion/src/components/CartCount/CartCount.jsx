import React from "react";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";

const CartCount = () => {
    const { cart } = useContext(CartContext)
    let count = 0
    cart.map(item => {
        return(count += item.quantity) 
    })

    return(
        <p>{count}</p>
    )
}

export { CartCount } 