import "./cartwidget.css"
import ImgCart from "../../assets/bag.svg"
import {Link} from 'react-router-dom'



function Cart () {


return (
        <div className="divImg">
            <Link to="/cart"><img src={ImgCart} alt="cart" className="cart"/></Link>
            <p className="paragraphImg">2</p>
        </div>
)


}

export default Cart