 import navLogo from "../navBar/logoSinFondo.png"
 
 import "./greetings.css"



function Greetings () {

    return (
        <>
            <div className="container">
                <h1 className="h1-container">La Naturaleza en la puerta de tu Casa ! </h1>
                <strong className=" h1-container paraText">30% Off</strong>
                <img src={navLogo} alt={navLogo} className="logoGreen"/>
            </div>
            
            </>
    )

}

export default Greetings