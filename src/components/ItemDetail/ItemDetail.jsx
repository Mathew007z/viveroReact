import {useState} from 'react'
import "./itemdetail.css"
import { Link } from 'react-router-dom';






function ItemDetail ({prod}) { 

   const [contador , setContador] = useState(0)

   const buttonAument = () => {
      setContador(contador +1)

   }
   const buttonDecrement = () => {
      setContador(contador - 1)
   }






   return(
      <>
   <div className="detail-container">
      <div className="detail-item-cont">
         <h3 className="title-detail">{prod.nombre}</h3>
         <img className="imgF" src={prod.imagen} alt={prod.id}/>
         <p className="detail-price">${prod.precio}</p>
         <button onClick={buttonDecrement} className='buttonHand2'> - </button>
         <button onClick={buttonAument} className='buttonHand2'> + </button>
         <p className='contador2'>Cantidad:{contador}</p>
      </div>
      </div>
      <div className='button-back'>
         <Link to="/productos"><button className='button-back-prod'> Atrás</button></Link>
      </div>
      </>
  

   )
   

   
}

export default ItemDetail;