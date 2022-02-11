import React from 'react'
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'

const Total = () => {

    const { total } = useContext(CartContext)

    return (
        <h1>
            {`Total $${total}`}
        </h1>
    )
}

export {Total};