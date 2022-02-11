import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";


const CartDetail = () => {
    const { product, setProduct } = useContext(cartContext);


    const itemTotal = (product) => {
        return product.productos.precio * product.quantity;
    };
    const sumaTotal = (product) => {
        var total = 0;
        for (let i = 0; i < product.length; i++) {
            total = total + product[i].productos.precio * product[i].quantity;
        }
        return total;
    }

    return (
        <>
            {product.map((product) => {
                return (
                <tr>
                    <td>{product.productos.marca}</td>
                    <td>{product.quantity}</td>
                    <td>{product.precio}</td>
                    <td>{itemTotal(product)}</td>
                    <td>
                        <button>Eliminar</button>
                    </td>
                </tr>
                )
            })}
            <td></td>
            <td></td>
            <td>{sumaTotal(product)}</td>
        </>
    )

}