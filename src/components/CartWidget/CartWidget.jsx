import "./cartwidget.css"
import ImgCart from "../navBar/bag.svg"



function Cart () {


return (
        <div className="divImg">
            <img src={ImgCart} alt="cart" className="cart" />
            <p className="paragraphImg">0</p>
        </div>
)


}


export default Cart