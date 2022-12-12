import "./itemlistcontainer.css"
import React, {useState,useEffect} from 'react';
import ItemList from '..//ItemList/ItemList'
import HotSale from '../../assets/hot-sale.png'





const ItemListContainer = () => {

    const [data, setData] = useState([])

    useEffect(() => {
       fetch('/data/data.json')
        .then((res) => res.json())
        .then((obj) => setData(obj))
    }, []);





    return (
        <>
        <div className="listProd">
            <div>
                <img src={HotSale} alt={HotSale} className="img-hot-sale"/>     
                <img src={HotSale}  alt={HotSale} className="img-hot-sale"/>  
                <img src={HotSale}  alt={HotSale} className="img-hot-sale"/>  
            </div>
         
         <ItemList data={data} />
        </div>
        </>
        
       
    ) 
}












export default ItemListContainer;

