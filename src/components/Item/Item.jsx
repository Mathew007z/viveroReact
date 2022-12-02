import "./item.css"
import ItemList from "../ItemList/ItemList"
import {Link} from 'react-router-dom'






const Item = ({data}) =>{


    

    return (
        <ItemList>
        <p className="paraGP">{data.nombre}</p>
        <p className="paraGP">${data.precio}</p>
        <img src={data.imagen} alt={data.id} className="imgCard"/>
        <div className="buttonContainer">
        <Link to={`/item/${data.id}`} className="buttonHand">Ver Detalle</Link>
        </div>
        {/* <p className="contador">Agregar Al carrito <br></br>{contador}</p> */}
        </ItemList>
    ) 
}


export default Item;