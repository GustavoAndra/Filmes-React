import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer id="contatos">
      <div className="container-fluid">
        <div className="row">
          <div className="footer-col">
            <h4>Parceiros</h4>
            <ul>
              <li><a href="#">Amazon</a></li>
              <li><a href="#">Apple Inc</a></li>
              <li><a href="#">Walt Disney Company</a></li>
              <li><a href="#">Programa de afiliados</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>obter ajuda</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">informações</a></li>
              <li><a href="#">Pesquisas</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Assine nossa Newsletter</h4>
            <ul>
              <li><a href="#">Fortnite</a></li>
              <li><a href="#">League of Legends</a></li>
              <li><a href="#">Minecraft</a></li>
              <li><a href="#">Among Us</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Redes sociais</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/gustavoandradii/"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;