import React, { useState } from "react";
import "./header.css";
import Logo from '../img/Logo-Header.jpg';
function Header() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [genresActive, setGenresActive] = useState(false); // State para controle do dropdown de gêneros

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else {
      setActive("nav__menu");
    }

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else {
      setIcon("nav__toggler");
    }
  };

  const toggleGenresDropdown = () => {
    setGenresActive(!genresActive);
  };

  return (
    <nav className="nav">
       
        <img className="nav-img"  src={Logo} alt="Logo da ReelMagic" /> {/* Use a imagem como logo */}

      <ul className={active}>
        <li className="nav__item">
          <a href="#home" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#filmes" className="nav__link">
            Filmes
          </a>
        </li>
        <li className="nav__item">
          <a href="#series" className="nav__link">
            Series
          </a>
        </li>
        <li className="nav__item dropdown">
          <button role="button" onClick={toggleGenresDropdown} className="nav__link">
            Gêneros
          </button>
          {genresActive && (
            <ul className="dropdown-content">
              <li>
                <a href="#">Ação</a>
              </li>
              <li>
                <a href="#">Comedia</a>
              </li>
              <li>
                <a href="#">Drama</a>
              </li>
              <li>
                <a href="#">Terror</a>
              </li>
            </ul>
          )}
        </li>
        <li className="nav__item">
          <a href="#contatos" className="nav__link">
            Contatos
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="lineum"></div>
        <div className="linedois"></div>
        <div className="linetres"></div>
      </div>
    </nav>
  );
}

export default Header;