import "./item.css"
import Avatar from "../Avatar/Avatar"
import ItemList from "../ItemList/ItemList"
import React, {useState, useEffect} from 'react'






const Item = ({id, nombre, precio, imagen}) =>{

    const [contador, setContador] = useState(0);

    // button increased
    const buttonAumento = () => {
        setContador(contador+1)
    }
    // Button decrement
    const buttonDecrement = () => {
        setContador(contador-1);
    }

    useEffect(()=> {
        console.log('El componente se ejecuto')
    },[contador])
    
    

    return (
        <ItemList>
        <Avatar/>
        <p className="paraGP">{nombre}</p>
        <p className="paraGP">${precio}</p>
        <img src={imagen} alt={id} className="imgCard"/>
        <div className="buttonContainer">
        <button onClick={buttonDecrement} className="buttonHand">Quitar</button>
        <button onClick={buttonAumento} className="buttonHand">Agregar</button>
        </div>
        {/* <p className="contador">Agregar Al carrito <br></br>{contador}</p> */}
        </ItemList>
    ) 
}


export default Item;