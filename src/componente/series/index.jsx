import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './series.css'; 
import { useTheme } from '../Theme/ThemeContext';
import Harry from '../img/Harry-Série.jpg';
import Harry2 from '../img/Harry-Série-3.jpg';
import Harry3 from '../img/Harry-Série-4.jpg';
import Harry5 from '../img/Harry-Série-5.jpg';
import Harry6 from '../img/Harry-Série-6.jpg';

const SeriesComponent = () => {
  const isSmallScreen = window.innerWidth < 768; // Define um ponto de corte para telas pequenas
  const { darkMode} = useTheme();

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: isSmallScreen ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="series" className={darkMode ? 'dark-mode' : ''}>
    <h1 id="serie">Queridinhos do Momento</h1>
    <Slider {...carouselSettings}>
      {/* Primeiro Slide */}
      <div className={`col-${isSmallScreen ? 'sm' : 'sm'}-6`}>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img className="card-img" src={Harry} alt="Imagem do Filme Aventura Espacial" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Aventura Espacial</h5>
                <p className="card-text">
                  Embarque em uma jornada emocionante até os confins do universo com "Aventura Espacial". Acompanhe a tripulação corajosa enquanto eles enfrentam perigos intergalácticos e descobrem os segredos do cosmos.
                </p>
                <p className="card-text">
                  <small className="text-muted">Atualizado há 3 minutos atrás</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* Segundo Slide */}
      <div className={`col-${isSmallScreen ? 'sm' : 'sm'}-6`}>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img className="card-img" src={Harry3} alt="Imagem do Filme Mistério nas Profundezas" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Mistério nas Profundezas</h5>
                <p className="card-text">
                  Prepare-se para uma experiência intensa e repleta de suspense com "Mistério nas Profundezas". Uma trama envolvente e reviravoltas inesperadas o manterão grudado na tela até o fim.
                </p>
                <p className="card-text">
                  <small className="text-muted">Atualizado há 3 minutos atrás</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* Terceiro Slide */}
      <div className={`col-${isSmallScreen ? 'sm' : 'sm'}-6`}>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img className="card-img" src={Harry5} alt="Imagem do Filme Romance à Beira-Mar" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Romance à Beira-Mar</h5>
                <p className="card-text">
                  Deixe-se envolver pela paixão e emoção de "Romance à Beira-Mar". Uma história de amor inesquecível que o levará às belas praias e aos corações apaixonados de seus protagonistas.
                </p>
                <p className="card-text">
                  <small className="text-muted">Atualizado há 3 minutos atrás</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* Quarto Slide */}
      <div className={`col-${isSmallScreen ? 'sm' : 'sm'}-6`}>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img className="card-img" src={Harry2} alt="Imagem do Filme Ação Implacável" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Ação Implacável</h5>
                <p className="card-text">
                  Prepare-se para a adrenalina com "Ação Implacável". Uma sequência de cenas de ação explosivas e confrontos épicos farão seu coração bater mais rápido.
                </p>
                <p className="card-text">
                  <small className="text-muted">Atualizado há 3 minutos atrás</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* Quinto Slide */}
      <div className={`col-${isSmallScreen ? 'md' : 'sm'}-6`}>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img className="card-img" src={Harry6} alt="Imagem do Filme Mistério Sombrio" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">Mistério Sombrio</h2>
                <p className="card-text">
                  Entre em um mundo de enigmas e suspense com "Mistério Sombrio". Uma narrativa intrigante e personagens misteriosos irão mantê-lo cativado do começo ao fim.
                </p>
                <p className="card-text">
                  <small className="text-muted">Atualizado há 3 minutos atrás</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  </section>
  );
};

export default SeriesComponent;