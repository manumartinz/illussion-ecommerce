

import { CartCount } from '../CartCount/CartCount';
import { Link } from  "react-router-dom";
import './CartWidget.css'

function CartWidget() {    
    return(
        
        <div className="cart-btn">
            <h4><CartCount/></h4>
            <Link to="/cart"><span className="material-icons">shopping_cart</span></Link>
        </div>
        
    )
}

export default CartWidget
