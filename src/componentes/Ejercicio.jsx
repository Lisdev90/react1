import React from "react";

export default function Ejercicio() {
  return (
    <div className="contenedor-pueblo">
      <img
        className="imagen-pueblo"
        src={require("../img/ainsa.jpg")}
        alt="imagen de ainsa"
      />
      <div className="contendor-texto-pueblo">
        <p className="nombre-pueblo">Pueblo Ainsa</p>
        <p className="ubicación-pueblo">Municipio en España</p>
        <p className="texto-pueblo">
          {" "}
          Aínsa-Sobrarbe (cooficialmente, en aragonés, L’Aínsa-Sobrarbe) es un
          municipio español situado en la comarca altoaragonesa de Sobrarbe, en
          la provincia de Huesca, comunidad autónoma de Aragón. Tiene su capital
          en la villa de Aínsa (aragonés, L'Aínsa3​4​). El municipio surgió tras
          la fusión de los antiguos municipios de Aínsa y de Alto Sobrarbe, en
          1976. Compone un extenso término con un área de 284,8 km² y una
          población de 2315 habitantes.
        </p>
      </div>
    </div>
  );
}
