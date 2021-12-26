import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail'
import MockItems from '../../mock/MockItems';



export const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({});
    const [ loading, setLoading ] = useState(true);
    const { itemId } = useParams();
    
    console.log(itemId)
    
    useEffect(() => {
        setLoading(true);
        const itemPromise = new Promise((res) => {
            setTimeout(() => {
                
                const myData = MockItems.find((item) => item.id = itemId);
                console.log(MockItems)
                
                console.log(myData);

                res(myData);

            }, 1000);
        });
        itemPromise.then((res) => {
            setProduct(res)
        })
        .finally(() => setLoading(false));
    }, [itemId]);

    return loading ? (
        <h2>Cargando...</h2>
    ): <ItemDetail {...product}/>
}

export default ItemDetailContainer
