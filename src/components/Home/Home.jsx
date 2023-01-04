
 import Reno from "../../assets/reno.png"
 import {Link} from "react-router-dom"

 


 
 import "./home.css"



function Home () {

    return (
        <>
            <div className="container">
                <div className="box1">
                    <h2 className="vivero">Vivero!</h2>
                    <strong className="descuento">30% Off</strong>
                </div> 
            </div>
            <div  className="section"> 
                <div className="frase">
                    <img src={Reno} alt={Reno}  className="reno"/> 
                    <h2 className="title1">Increibles promociones en el mes de Diciembre</h2>
                    <Link to="/productos"><button className="buttonOff">Ofertas!</button></Link>
                </div>
            </div>
        </>
    )
}

export default Home;