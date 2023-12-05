import "./navbar.css";
import Cart from "../CartWidget/CartWidget";
import ImgLogo from "../../assets/logoSinFondo.png";
import { Link } from "react-router-dom";
// import ReactGA from 'react-ga';
import ReactGA4 from "react-ga4";
// Navbar

export function Navbar() {

  ReactGA4.initialize([
    {
      trackingId: "G-ZXFSZR32TF",
    },
    {
      trackingId: "G-ZXFSZR32TF",
    },
  ]);
  ReactGA4.send({ hitType: "pageview", page: "/my-path", title: "Custom Title" });

  const click_pageview = () => {
    ReactGA4.event({
      category: "your category",
      action: "click",
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
            <Link to="/productos" className="nav-link" onClick={() => click_pageview()}>
              Productos
            </Link>
          </li>
        </ul>
        <Cart />
      </div>
    </>
  );
}
