import "./itemlistcontainer.css"
import Item from "../Item/Item";
import React, {useState,useEffect} from 'react';




 




const ItemListContainer = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
       const data = fetch('./data.json')
        data.then((res) => res.json())
        .then((obj) => setPosts(obj))
    }, []);





    return (
        <div className="listProd">
           {posts.map((prod)=>
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

