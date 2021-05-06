import React, { useState } from "react";
const Header = () => {
  const [sesion, setSesion] = useState(false);
  const onClickSesion = () => {
    setSesion(true);
  };

  return (
    <header className="header">
      <img src="/images/images.svg" alt="logo" />
      <nav>
        <ul>
          <li className="lista-nav">
            <a href="#!" onClick={() => onClickSesion()}>
              Iniciar Sesion
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
