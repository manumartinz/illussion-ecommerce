
import React from 'react';
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../firebase/firebase';
import { ItemDetail } from '../../components/ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const bd = getFirestore()
        const itemCollection = bd.collection('items')

        setTimeout(() => {
            itemCollection.get().then(value => {
                let datos = value.docs.map(e => {
                    return {...e.data(), id: e.id}
                })

                const unProd = datos.find((e) => e.id === itemId);
                setProduct(unProd)
                setLoading(false);
            })
        }, 1500)
    }, [itemId])

    return( loading ? <div className="loader">Loading...</div> : 
    <ItemDetail product={product}/> )

}

export default ItemDetailContainer