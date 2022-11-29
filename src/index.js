// Importar la biblioteca de react
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
import { BrowserRouter } from "react-router-dom";


// Seleccionando root
const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
  <>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  </>
);







