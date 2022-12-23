import { toast } from "react-hot-toast"; 
import  './cart.css'
import { useCartContext } from '../../Context/CartContext';
import carritoVacio from '../../assets/carrito-vacio.png'
import { addDoc, getFirestore, collection  } from 'firebase/firestore';
import ContactForm from '../ContactForm/ContactForm'



    const Cart = ({id}) => {
        const { cart, removeProduct,totalPrice,clearCart,eliminarPorUnidad } = useCartContext();

        // POST HACIA FIRESTORE
        // HARDCODEANDO USUARIO
        const compra = {
            user: {
                name:'user',
                email:'user@example.com',
                phone:'123123',
                address: 'calle falsa 123'
            },
            items:cart.map(prod => ({id : prod.id, nombre: prod.nombre, precio: prod.precio, cantidad: prod.cantidad})),
            total: totalPrice(),
        }


        const finishClick = () => {

            if(cart.length <= 0) {
                toast.error("Selecciona algun producto!")
            }else{
                toast.success('La Compra se realizó Correctamente', {
                    style: {
                      border: '1px solid #713200',
                      padding: '16px',
                      color: '#713200',
                    },
                    iconTheme: {
                      primary: '#713200',
                      secondary: '#FFFAEE',
                    },
                  });
                const db = getFirestore();
                const userCollection = collection(db, 'compra')
                addDoc(userCollection, compra)
                .then(({ id }) => console.log(id))
                clearCart();
            }
            
        }





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
                                            <button className='decrease' disabled={prod.cantidad <= 0 && removeProduct(prod.id)} onClick={() => eliminarPorUnidad(prod.id)}> - </button>
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
                <ContactForm/>
                 <button onClick={clearCart} className='button-cart button-cart-24 button-cart button-cart-24-n1'>Vaciar Carrito</button>
                 <button  className='button-cart button-cart-24' onClick={finishClick}>Terminar Compra</button>
                </div>
                </>
            )
            }




            export default Cart;