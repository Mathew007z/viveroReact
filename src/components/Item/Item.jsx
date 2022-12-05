import "./item.css"
import ItemList from "../ItemList/ItemList"
import {Link} from 'react-router-dom'






const Item = ({data}) =>{


    

    return (
        <ItemList>
                <div className="contain-card">
                    <p className="paraGP">{data.nombre}</p>
                    <p className="paraGP">${data.precio}</p>
                    <img src={data.imagen} alt={data.id} className="imgCard"/>
                    <div className="buttonContainer">
                        <Link to={`/item/${data.id}`} className="buttonHand">Ver Detalle</Link>
                    </div>
                </div>   
        </ItemList>
    ) 
}

export default Item;