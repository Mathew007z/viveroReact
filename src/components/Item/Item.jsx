import "./item.css"
import {Link} from 'react-router-dom'






const Item = ({ data }) =>{


    

    return (
            <div>
                {
                    Object.keys(data).length === 0 ? 
                    <div>Loading</div> :
                    <div className="contain-card">
                        <p className="paraGP">{data.nombre}</p>
                        <p className="paraGP">{data.precio}</p>
                        <img src={data.imagen} alt={data.id} className="imgCard"/>
                        <div className="buttonCont">
                        <Link to={`/item/${data.id}`} className="buttonHand3">Ver Detalle</Link>
                        </div>
                    </div>
                }

            </div>
                  
        
    ) 
}


export default Item;



