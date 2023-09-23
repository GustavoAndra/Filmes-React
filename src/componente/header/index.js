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
      </div>
    </nav>
  );
};
export default Header;