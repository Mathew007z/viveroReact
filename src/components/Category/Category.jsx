import  './category.css'
import Categories from '.././Categories/Categories'
import {useState}  from 'react'
import {Link} from 'react-router-dom'




    const Category = () => {

        const [data, setData] = useState(Categories)
        const filterResult = (catItem) => {
        const result = Categories.filter((curDate) => {
            return curDate.category === catItem;
        })
        setData(result)

    }
    



        return (

            <>
            

            <div className='container-cards'>
                <div className='button-container'>
                    <button className='buttonHandler' onClick={() => filterResult('Menor')}>Menor precio</button>
                    <button className='buttonHandler' onClick={() => filterResult('Mayor')}>Mayor precio</button>
                </div>   
          
                <div className='cards-category'>
                    {data.map((values) => {
                    const {id, nombre , precio, imagen} = values;
                    return(
                        <>
                            <div className='div2' key={id}>
                            <h2 className='title-card'>{nombre}</h2>
                            <img src={imagen} alt={imagen} className='img'/>
                            <p className='paragraph-price'>${precio}</p>
                            <div className="buttonContainer">
                            <Link to={`/item/${data.id}`} className="buttonHand">Ver Detalle</Link>
                            </div>
                            </div>
                        
                         </>
                    )
                })}
                </div>
            </div>
            </>


           
        )
}


export default Category;