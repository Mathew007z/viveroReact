import './itemid.css'
import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react'


const ItemId = () => {
    
    const { id } = useParams();
    const [prod , setProd] = useState({})

    useEffect(() => {
        fetch(`/data/data.json/${id}`)
        .then((res) => res.json())
        .then(setProd)
       
    },[id])

   


    

  return (
    <>
        <span>{id}</span>
        <div>Item{prod.nombre}</div>
        <div>Item{prod.precio}</div>
        <div>Item{prod.imagen}</div>
    </>
  )
}




export default ItemId;