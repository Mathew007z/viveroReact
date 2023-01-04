import { useState, useEffect } from "react";
import "./itemdetailcontainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore , doc , getDoc} from 'firebase/firestore'


// traer firestore 

// crear un puntero al lado del lado que queremos traer 

// con una promise, traemos ese dato.








const ItemDetailContainer = () => {
  const [prod, setProd] = useState([]);
  // useParams return a string
  const { id } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'productos', id);
    getDoc(queryDoc)
    .then(res => setProd({id:res.id, ...res.data()}))
   
  }, [id]);

  return (
    <>
      <div className="div">
        <ItemDetail prod={prod} />
      </div>
    </>
  );
};
export default ItemDetailContainer;














// const item = [
//     {
//        id:1,
//        nombre:"Santiago",
//        localidad:"Argentina",
//        sexo:"Masculino" ,
//        imagen:"../assets/florDeLoto.png"
//     }
// ]

// Promesa Mockeada;

// const ItemDetailContainer = () => {

//     const [prod , setProd] = useState([])

//     useEffect(() => {
//         const promesa = new Promise((resolve) => {
//             setTimeout(() => resolve (item),2000);

//         })
//         promesa.then(res => setProd(res))

//     },[prod])

//   return (
//     <div className='div'>
//         {prod.map((prod)=>(
//             <ItemDetail prod={prod} key={prod.id}/>
//         ))}
//     </div>
//   )

// }

// export default ItemDetailContainer;
