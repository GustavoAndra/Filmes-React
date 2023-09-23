import React, { useState } from "react";
import "./style.css";

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
      <h1 href="#" className="nav__brand">
        ReelMagic
      </h1>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Filmes
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
          <a href="#" className="nav__link">
            TV Shows
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
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