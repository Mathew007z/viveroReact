import "./itemlistcontainer.css";
import React, { useState, useEffect } from "react";
import ItemList from "..//ItemList/ItemList";
import HotSale from "../../assets/hot-sale.png";
import Loading from '../Loading/Loading'


const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const  [loading, setLoading]  = useState(true);






  useEffect(() => {
    setTimeout(()=>{
      fetch("/data/data.json")
      .then((res) => res.json())
      .then((obj) => setData(obj))
      .finally(()=> setLoading(false))
    },2000)
  }, []);


  




  return (
    <>
      { loading ? <Loading/>
        :
        <div className="listProd">
        <div>
          <img src={HotSale} alt={HotSale} className="img-hot-sale" />
          <img src={HotSale} alt={HotSale} className="img-hot-sale" />
          <img src={HotSale} alt={HotSale} className="img-hot-sale" />
        </div>
        <ItemList data={data} />
      </div>

        }

    
    </>
  );
};

export default ItemListContainer;





// useEffect(() => {
//   fetch("/data/data.json")
//     .then((res) => res.json())
//     .then((obj) => setData(obj));
// }, []);
