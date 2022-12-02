 import navLogo from "../navBar/logoSinFondo.png"
 import banner2 from "../Home/ahorro.svg"
 
 import "./home.css"



function Home () {

    return (
        <>
            <div className="container">
                <h1 className="h1-container">La Naturaleza en la puerta de tu Casa ! </h1>
                <strong className=" h1-container paraText">30% Off</strong>
                <img src={navLogo} alt={navLogo} className="logoGreen"/>
            </div>
            <div  className="section"> 
                <div className="box2">
                <h2 className="title2">Conoce las mejores Ofertas para vos!</h2>
                    <img src={banner2} alt={banner2}/>
                </div>
                <div className="frase">
                    <h2 className="title1">Increibles promociones en el mes de Diciembre</h2>
                </div>
                

            </div>
            
            </>
    )

}

export default Home;