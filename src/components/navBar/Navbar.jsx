import "./navbar.css";
import Cart from "../CartWidget/CartWidget";
import ImgLogo from "../../assets/logoSinFondo.png";
import { Link } from "react-router-dom";
import ReactGA from 'react-ga';
// Navbar

export function Navbar() {
  // Rendering navbar
  const sendDataGoogleAnalytics = () => {
    ReactGA.event({category:'boton click', label:'request image'});
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
              Nosotros
            </Link>
          </li>
        </ul>
        <ul className="navbar-ul">
          <li>
            <Link to="/productos" className="nav-link" onClick={() => sendDataGoogleAnalytics()}>
              Productos
            </Link>
          </li>
        </ul>
        <Cart />
      </div>
    </>
  );
}
