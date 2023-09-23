import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './series.css'; 
import Harry from '../img/Harry-Série.jpg';
import Harry2 from '../img/Harry-Série-3.jpg';
import Harry3 from '../img/Harry-Série-4.jpg';
import Harry5 from '../img/Harry-Série-5.jpg';
import Harry6 from '../img/Harry-Série-6.jpg';

const SeriesComponent = () => {
  const isSmallScreen = window.innerWidth < 768; // Define um ponto de corte para telas pequenas

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
    <section id="series">
      <h1 id="serie">Queridinhos do Momento</h1>
      <Slider {...carouselSettings}>
        {/* Primeiro Slide */}
        <div className={`col-${isSmallScreen ? 'sm' : 'sm'}-6`}>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img className="card-img" src={Harry} alt="Sempre evoluindo" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Atualizado a 3 minutos atrás</small>
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
                <img className="card-img" src={Harry3} alt="Sempre evoluindo" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Atualizado a 3 minutos atrás</small>
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
                <img className="card-img" src={Harry5} alt="Sempre evoluindo" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Atualizado a 3 minutos atrás</small>
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
                <img className="card-img" src={Harry2} alt="Sempre evoluindo" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Atualizado a 3 minutos atrás</small>
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
                <img className="card-img" src={Harry6} alt="Sempre evoluindo" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Atualizado a 3 minutos atrás</small>
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