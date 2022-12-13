import  './cart.css'
import { useCartContext } from '../../Context/CartContext';
import carritoVacio from '../../assets/carrito-vacio.png'



    const Cart = () => {
        const { cart, removeProduct,totalPrice,clearCart,eliminarPorUnidad } = useCartContext();


            return (
                <>
                <div className='cart2'>
                    {
                        cart.length === 0 ? 
                        <div className='padre-h2-vacio'>
                          <img src={carritoVacio} alt={carritoVacio} className="img-carrito-vacio"/>
                          <h2 className='oops'>Ops! Tu carrito Está Vacio</h2>
                        </div> :
                        <div className='cart-map'>
                            {
                        cart.map((prod , indice) => 
                        <div className='detail-cont' key={indice}>
                            <div className='cardCarrito'>
                                <div className='descriptionArticle'>
                                            <h3 className='name-cart'>{prod.nombre}</h3>
                                            <img src={prod.imagen} alt={prod.imagen} className='card-img'/>
                                        <p className='precio-cart'>Precio: {prod.precio} x Unidad</p>
                                        <p className='precio-cart'>Cantidad : {prod.cantidad}</p>
                                        <div className='buttonDecrease'>
                                            <button className='decrease' disabled={prod.cantidad <= 0} onClick={() => eliminarPorUnidad(prod.id)}> - </button>
                                            <button onClick={() => removeProduct(prod.id)} className="button-cart">Eliminar Todo</button>
                                        </div>
                                </div>      
                            </div>
                        </div> 
                    )}</div>
                   
                  
                    }
                </div>
                 <div className='cont-vacio'>
                 <p className='precio-cart-24'>Total: ${totalPrice()}</p>
                 <button onClick={clearCart} className='button-cart button-cart-24'>Vaciar Carrito</button>
                </div>
                </>
            )
            }




            export default Cart;