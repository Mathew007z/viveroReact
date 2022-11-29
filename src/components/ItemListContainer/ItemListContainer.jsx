import "./itemlistcontainer.css"
import Item from "../Item/Item";
import {productos} from "./productos";











const ItemListContainer = () => {

    // Container de mis productos con logica de negocio


        const promesa = new Promise ((resolve) => {
            resolve(productos)
        })
        promesa.then((res)=>{
        console.log(res)
        })


    return (
        <div className="listProd">
           {productos.map((prod)=>
            <Item
            key={prod.id}
            nombre={prod.nombre}
            precio={prod.precio}
            imagen={prod.imagen}
            />
           )}
        </div>
    ) 
}










export default ItemListContainer;

