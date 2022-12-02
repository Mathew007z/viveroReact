import "./itemlistcontainer.css"
import Item from "../Item/Item";
import React, {useState,useEffect} from 'react';





const ItemListContainer = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
       fetch('/data/data.json')
        .then((res) => res.json())
        .then((obj) => setPosts(obj))
    }, []);





    return (
        <div className="listProd">
           {posts.map((prod)=>
            <Item data = {prod}
             key = {prod.id}
           
            />
           )}
        </div>
    ) 
}












export default ItemListContainer;

