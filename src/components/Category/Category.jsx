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
                            <div key={id} >
                                <div className='div2' >
                                <h2 className='title-card'>{nombre}</h2>
                                <img src={imagen} alt={imagen} className='imgCategory'/>
                                <p className='paragraph-price'>${precio}</p>
                                <div className="button--23">
                                <Link to={`/item/${id}`} className="buttonHand-24">Ver Detalle</Link>
                                </div>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </>


           
        )
}

export default Category;