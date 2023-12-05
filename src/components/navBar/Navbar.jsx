import "./navbar.css";
import Cart from "../CartWidget/CartWidget";
import ImgLogo from "../../assets/logoSinFondo.png";
import { Link } from "react-router-dom";
// import ReactGA from 'react-ga';
import ReactGA4 from "react-ga4";
// Navbar

export function Navbar() {

  const TrackGoogleAnalyticsEvent = (
    category,
    event_name,
    label,
    data
) => {
    console.log("GA event:", category, ":", event_name, ":", label);

    let event_params = {
        category,
        label,
        ...data
    };
    // Send GA4 Event
    ReactGA4.event(event_name, event_params);
};
 

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
            <Link to="/productos" className="nav-link" onClick={() => TrackGoogleAnalyticsEvent()}>
              Productos
            </Link>
          </li>
        </ul>
        <Cart />
      </div>
    </>
  );
}
