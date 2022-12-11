import "./itemdetail.css"
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext }  from '../../Context/CartContext'
import { useState } from 'react'



function ItemDetail ( { prod } ) { 

   const [goToCart, setGoToCart] = useState(false);
   const { addProduct } = useCartContext();



   const onAdd = (contador)  => {
      setGoToCart(true);
        addProduct(prod , contador);
      
    }
    console.log(prod)

   return(
      <>
   <div className="detail-container">
      <div className="detail-item-cont">
         <h3 className="title-detail">{prod.nombre}</h3>
         <img className="imgF" src={prod.imagen} alt={prod.id}/>
         <p className="detail-price">${prod.precio}</p>
         {
            goToCart
            ? <button><Link to='/cart'>Ir al carrito</Link></button>
            : <ItemCount prod={prod} cantidad={prod.cantidad} onAdd={onAdd}/>     
         }

         
      </div>
      </div>
      <div className='button-back'>
         <Link to="/productos"><button className='button-back-prod'> Atrás</button></Link>
      </div>
      </>
  

   )
   

   
}

export default ItemDetail;