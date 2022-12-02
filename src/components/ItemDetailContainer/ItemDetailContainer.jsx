import { useState, useEffect } from 'react'
import './itemdetailcontainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'



// const item = [
//     {
//        id:1,
//        nombre:"Santiago",
//        localidad:"Argentina",
//        sexo:"Masculino" ,
//        imagen:"../assets/florDeLoto.png"
//     }
// ]



const ItemDetailContainer = () => {
    
  
    const [prod , setProd] = useState([])
    // useParams devuelve un string
    const { id } = useParams();

    useEffect(() => {
        // Devuelve un number
        fetch('../data/data.json')
        .then((res) => res.json())
        .then((data)=>setProd(data.find((item)=> item.id === parseInt(id))))
    },[id])


  return (
    <>
       <div className='div'>
             <ItemDetail prod={prod}/>
     </div>
    </>
  )
}
export default ItemDetailContainer













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