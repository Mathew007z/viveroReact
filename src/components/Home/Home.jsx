
 import Banner2 from "../../assets/ahorro.svg"
 import {Link} from "react-router-dom"
 import plant from '../../assets/planthand.png'
 
 import "./home.css"



function Home () {

    return (
        <>
            <div className="container">
                <div className="box1">
                     <h1 className="h1-container">La Naturaleza en la puerta de tu Casa ! </h1>
                    <strong className=" h1-container paraText">30% Off</strong>
                </div>
                <div className="box01">
                    <img src={plant} alt={plant} className="plant" />
                </div>
            </div>

            <div  className="section"> 
                <div className="box2">
                <h2 className="title2">Conoce las mejores Ofertas para vos!</h2>
                    <img src={Banner2} alt={Banner2}/>
                </div>
                <div className="frase">
                    <h2 className="title1">Increibles promociones en el mes de Diciembre</h2>
                    <Link to="/productos"><button className="buttonOff">Ofertas!</button></Link>
                </div>
            </div>
            
            </>
    )

}

export default Home;