import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./series.css";
import Harry from "../img/Harry-Série.jpg";
import Harry1 from "../img/Harry-Série-2.jpg";
import Harry2 from "../img/Harry-Série-3.jpg";
import Harry3 from "../img/Harry-Série-4.jpg";
import Harry5 from "../img/Harry-Série-5.jpg";
import Harry6 from "../img/Harry-Série-6.jpg"; 

const SeriesComponent = () => {
  const isSmallScreen = window.innerWidth < 768; // Define um ponto de corte para telas pequenas

  return (
    <section id='series'>
      <h1 id='serie'>
        Queridinhos do Momento
      </h1>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={6000}
        showStatus={false}
        showArrows={true}
        infiniteLoop={true}
        selectedItem={0}
      >
        <div className="container-fluid">
          <div className="row">
            <div className={`col-${isSmallScreen ? 'sm' : 'sm'}-6`}>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img className="card-img" src={Harry} alt="Sempre evoluindo" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-muted">Atualizado a 3 minutos atrás</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`col-${isSmallScreen ? 'md' : 'sm'}-6`}>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img className="card-img" src={Harry1} alt="Sempre evoluindo" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-muted">Atualizado a 3 minutos atrás</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={Harry2} className="card-img" alt="Sempre evoluindo" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-muted">Atualizado a 3 minutos atrás</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={Harry3}className="card-img" alt="Sempre evoluindo" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-muted">Atualizado a 3 minutos atrás</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={Harry5} className="card-img" alt="Sempre evoluindo" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-muted">Atualizado a 3 minutos atrás</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={Harry6}className="card-img" alt="Sempre evoluindo" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-muted">Atualizado a 3 minutos atrás</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default SeriesComponent;