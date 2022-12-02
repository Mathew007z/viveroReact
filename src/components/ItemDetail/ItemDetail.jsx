
import "./itemdetail.css"



function ItemDetail ({prod}) { 
   return(

    <div className="detail-container">
    <h3>{prod.nombre}</h3>
    <p>{prod.precio}</p>
    <img src={prod.imagen} alt={prod.id}/>
    <p>{prod.localidad}</p>
    <p>{prod.sexo}</p>
    </div>

   )
   

   
}

export default ItemDetail;