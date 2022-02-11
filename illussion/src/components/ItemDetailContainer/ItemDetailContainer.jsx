import { useEffect, useState } from 'react';

import { ItemDetail } from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { getFirestore } from '../../firebase/firebase';
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({});
    const [ loading, setLoading ] = useState(true);
    const { itemId } = useParams();
    
    
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection('items')

        setTimeout(() => {
            itemCollection.doc(itemId).get().then((doc) => {
                setProduct({itemId: doc.id, ...doc.data()})
                })
                setLoading(false)
            }, 1500)
    }, [itemId]);

    return( loading ? <div className="loader">Loading...</div> : 
    <ItemDetail product= {product}/> )

}

export default ItemDetailContainer