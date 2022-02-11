
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/firebase';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const { catId } = useParams();
    
    useEffect(() => {

        setLoading(true)

        const db = getFirestore();
        const itemCollection = db.collection('items')

        setTimeout(() => {
            itemCollection.get().then(value => {
                let datos = value.docs.map(e => {
                    return{...e.data(), id: e.id}
                })

                let myData = catId ? datos.filter((item) => item.category === catId) : datos;
            
                if(catId === 'all') {
                    myData = datos
                }
                setItems(myData)
                setLoading(false)
            
            })}, 1500)
        }, [catId])
        
    return (
        loading ? <div className="loader">Loading...</div> : 
        <ItemList items={items}/>
    )
}
export default ItemListContainer