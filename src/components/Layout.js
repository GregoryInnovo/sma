import React, { useContext } from "react";
import { AppContext } from "@context/AppContext";

export default function Layout({ children }) {
  const { medallaUno, medallaDos, medallaTres, medallaCuatro } =
    useContext(AppContext);

  const [medalla1] = medallaUno;
  const [medalla2] = medallaDos;
  const [medalla3] = medallaTres;
  const [medalla4] = medallaCuatro;
  return (
    <div className="layout">
        <img
          src="https://i.imgur.com/h9ei7v7.png"
          alt="Logo"
          width="auto"
          height="100"
          className="logoPosition"
        />
      <div className="medals">
        <img
          src="https://pngimg.com/uploads/medal/medal_PNG14495.png"
          alt="imagen de la opcion 1"
          width="50"
          height="70"
          className={medalla1 === 2 ? "obtain" : "notObtain"}
        />
        <img
          src="https://pngimg.com/uploads/medal/medal_PNG14495.png"
          alt="imagen de la opcion 1"
          width="50"
          height="70"
          className={medalla2 === 2 ? "obtain" : "notObtain"}
        />
        <img
          src="https://pngimg.com/uploads/medal/medal_PNG14495.png"
          alt="imagen de la opcion 1"
          width="50"
          height="70"
          className={medalla3 === 2 ? "obtain" : "notObtain"}
        />
        <img
          src="https://pngimg.com/uploads/medal/medal_PNG14495.png"
          alt="imagen de la opcion 1"
          width="50"
          height="70"
          className={medalla4 === 2 ? "obtain" : "notObtain"}
        />
      </div>
      {children}
    </div>
  );
}
