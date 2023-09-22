import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; // Certifique-se de importar seu arquivo CSS personalizado

const Header = () => {
  const [navEngolindo, setNavEngolindo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Verifique a posição da rolagem e adicione ou remova a classe conforme necessário
      if (window.scrollY > 100) {
        setNavEngolindo(true);
      } else {
        setNavEngolindo(false);
      }
    };

    // Adicione um ouvinte de evento para lidar com a rolagem da página
    window.addEventListener('scroll', handleScroll);

    // Limpe o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${navEngolindo ? 'nav-engolindo' : ''}`}>
      <div className="container-fluid">
        <h1>ReelMagic</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="favorite">Favoritos</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;