import "./navbar.css";
import Cart from "../CartWidget/CartWidget"
import ImgLogo from "../navBar/logoSinFondo.png"
import {Link} from "react-router-dom"


// Navbar




 export function Navbar () { 

  // Renderizando navbar

  return <> <div className="navbar">
    
      <Link to="/"><img src={ImgLogo} alt="hoja" className="imgPlanta"/></Link>
      <ul className="navbar-ul">
          <li>
            <Link to="/" className="nav-link">Inicio</Link>
          </li>
      </ul>
      <ul className="navbar-ul">
          <li>
            <Link to="/nosotros" className="nav-link">Nosotros</Link>
          </li>
      </ul>
      <ul className="navbar-ul">
          <li>
            <Link to="/ItemListContainer" className="nav-link">Productos</Link>
          </li>
      </ul>
      <Cart/>
  </div>
  </>
}
