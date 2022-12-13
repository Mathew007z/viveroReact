import imgAbout from "../../assets/about.svg";
import "./nosotros.css";

const Nosotros = () => {

  
  return (
    <>
      <div className="about-container">
        <div className="about-us">
          <h1 className="about-title">Quienes somos ?</h1>
          <p className="about-paragraph">
            Somos una empresa que brinda un servicio de hace mas de 20 anos con
            las mejores calificaciones de nuestros clientes.<br></br>
            Enviamos productos a todos el pais, y contamos con mas de 6
            sucursales al rededor de nuestro Pais.
          </p>
        </div>
        <div className="about-img-box">
          <img src={imgAbout} alt={imgAbout} className="about-img" />
        </div>
      </div>
    </>
  );
};

export default Nosotros;
