import "./item.css"
import {Link} from 'react-router-dom'
import Loading from '../Loading/Loading'







const Item = ( { data } ) =>{


    

    return (
            <>
                {
                    Object.keys(data).length === 0 ? 
                    <div><Loading/></div> :
                    <div className="contain-card">
                        <p className="paraGP">{data.nombre}</p>
                        <img src={data.imagen} alt={data.id} className="imgCard"/>
                        <p className="paraGP">${data.precio}</p>
                        <div className="buttonCont">
                        <Link to={`/item/${data.id}`} className="buttonHand3">Ver Detalle</Link>
                        </div>
                    </div>
                }

            </>
                  
        
    ) 
}


export default Item;



