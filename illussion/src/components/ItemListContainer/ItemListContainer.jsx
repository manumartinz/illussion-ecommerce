// llamada a la api o promesa
// manejo de estados
// traer un itemlist 
// il va a mapear item y devolverlo como lista

import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import MockItems from '../../mock/MockItems';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    // acá va la promesa !

    const [items, setItems] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const { catId } = useParams();
    
    useEffect(() => {
        setLoading(true);
        const itemPromise = new Promise((res) => {
            setTimeout(() => {

                const myData =  catId  ? MockItems.filter(item => item.category === catId)
                : MockItems

    
                res(myData);

            }, 1000);
        });
        itemPromise.then((res) => {
            setItems(res)
        })
        .finally(() => setLoading(false));
    }, [catId]);



    return (
        loading ? <h2>Cargando...</h2> :
        <>
            <ItemList items={items}/>
        </> 
    )
}

export default ItemListContainer