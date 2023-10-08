import React, { useState } from "react";
import SearchBar from "./searchBar/index"; // Importe o componente SearchBar
import "./header.css";

function Header() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else {
      setActive("nav__menu");
    }

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else {
      setIcon("nav__toggler");
    }
  };

  const closeMenu = () => {
    setActive("nav__menu");
    setIcon("nav__toggler");
  };

  return (
    <nav className="nav">
     <h1 className="Magic">ReelMagic</h1>
     
      <ul className={active}>
        <li className="nav__item">
          <a href="/" className="nav__link" onClick={closeMenu}>
            Home
          </a>
        </li>
          <li className="nav__item">
          <a href="/favoritos" className="nav__link" onClick={closeMenu}>
            Minha Lista
          </a>
        </li>
        <li className="nav__item">
          <a href="#filmes" className="nav__link" onClick={closeMenu}>
            Filmes
          </a>
        </li>
        <li className="nav__item">
          <a href="#planos" className="nav__link" onClick={closeMenu}>
            Planos
          </a>
        </li>
        <li className="nav__item">
          <a href="#contatos" className="nav__link" onClick={closeMenu}>
            Contatos
          </a>
        </li>
       
      </ul> <SearchBar/> 
      <div onClick={navToggle} className={icon}>
        <div className="lineum"></div>
        <div className="linedois"></div>
        <div className="linetres"></div>
      </div>
    </nav>
  );
}

export default Header;