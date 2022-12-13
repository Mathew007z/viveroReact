import "./error.css";
import IconError from "../../assets/error-404-icon.png";

const Error = () => {
   
  return (
    <div className="error404">
      <img src={IconError} alt={IconError} className="icon-error" />
    </div>
  );
};

export default Error;
