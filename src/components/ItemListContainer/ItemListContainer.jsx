import "./itemlistcontainer.css"
import React, {useState,useEffect} from 'react';
import ItemList from '..//ItemList/ItemList'





const ItemListContainer = () => {

    const [data, setData] = useState([])

    useEffect(() => {
       fetch('/data/data.json')
        .then((res) => res.json())
        .then((obj) => setData(obj))
    }, []);





    return (
        <div className="listProd">
         <ItemList data={data} />
        </div>
       
    ) 
}












export default ItemListContainer;

