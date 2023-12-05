import "./navbar.css";
import Cart from "../CartWidget/CartWidget";
import ImgLogo from "../../assets/logoSinFondo.png";
import { Link } from "react-router-dom";
// import ReactGA from 'react-ga';
import ReactGA4 from "react-ga4";
// Navbar

export function Navbar() {

  const onClick = () => {
    ReactGA4.event({
      category: "your category",
      action: "click",
      lebel:'lebel prueba',
      value:'xxxx'
    });
  }

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={ImgLogo} alt="hoja" className="imgPlanta" />
        </Link>
        <ul className="navbar-ul">
          <li>
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </li>
        </ul>
        <ul className="navbar-ul">
          <li>
            <Link to="/nosotros" className="nav-link">
              Ejemplo
            </Link>
          </li>
        </ul>
        <ul className="navbar-ul">
          <li>
            <Link to="/productos" className="nav-link" onClick={onClick}>
              Productos
            </Link>
          </li>
        </ul>
        <Cart />
      </div>
    </>
  );
}
