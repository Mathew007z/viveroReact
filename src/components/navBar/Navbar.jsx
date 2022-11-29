import "./navbar.css";
import Cart from "../CartWidget/CartWidget"
import ImgLogo from "../navBar/logoSinFondo.png"
// import {Link} from "react-router-dom"


// Navbar




 export function Navbar () { 

  // Renderizando navbar

  return <> <div className="navbar">
    
      <img src={ImgLogo} alt="hoja" className="imgPlanta"/>
      <ul className="navbar-ul">
          <li>
            <a href="/" className="nav-link">Inicio</a>
          </li>
      </ul>
      <ul className="navbar-ul">
          <li>
            <a href="/" className="nav-link">Nosotros</a>
          </li>
      </ul>
      <ul className="navbar-ul">
          <li>
            <a href="/" className="nav-link">Productos</a>
          </li>
      </ul>
      <Cart/>
  </div>
  </>
}
