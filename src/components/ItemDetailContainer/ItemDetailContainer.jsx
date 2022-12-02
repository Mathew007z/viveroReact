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
    const { id } = useParams();

    useEffect(() => {
        fetch(`/data/data.json/${id}`)
        .then((res) => res.json())
        .then(setProd(prod))
        console.log(prod)
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