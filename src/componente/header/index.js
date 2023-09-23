import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

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
        <h1 className="navbar-brand">ReelMagic</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Pesquisar filmes" aria-label="Pesquisar" />
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Pesquisar</button>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categorias
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Ação</a>
                <a className="dropdown-item" href="#">Comédia</a>
                <a className="dropdown-item" href="#">Drama</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;