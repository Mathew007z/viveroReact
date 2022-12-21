import "./itemlistcontainer.css";
import React, { useState, useEffect } from "react";
import ItemList from "..//ItemList/ItemList";
import HotSale from "../../assets/hot-sale.png";
import Loading from '../Loading/Loading'
import { getFirestore , collection , getDocs, query, where} from 'firebase/firestore'
import { Link ,useParams } from 'react-router-dom';


// traer firestore 
// crear un puntero al lado del lado que queremos traer 
// con una promise, traemos ese dato.




const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const  [loading, setLoading]  = useState(true);
  const { categoriaId } = useParams()





  useEffect(() => {
    
      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'productos');
      if(categoriaId){
        const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
        getDocs(queryFilter)
          .then(res => setData(res.docs.map(prod => ({id:prod.id, ...prod.data()}))))
      }else{
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .finally(()=> setLoading(false))
      }
    
  }, [categoriaId]);




  return (
    <>
      { loading ? <Loading/>
        :
        
        <div className="listProd">
        <div>
          <div className="buttons-category"> 
              <Link to={'/categoria/mayor'}><button className="buttonCategory">Mayor Precio</button></Link>
              <Link to={'/categoria/menor'}><button className="buttonCategory">Menor Precio</button></Link>
              <Link to={'/productos'}><button className="buttonCategory">Atrás</button></Link>
          </div>
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
//     .then((obj) => setData(obj)) ;
// }, []);
