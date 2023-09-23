import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Movie, Btn, ScrollToTop, ScrollToTopButton } from './style';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { FaFlag, FaStar } from 'react-icons/fa';

function Home() {
  const imagePath = 'https://image.tmdb.org/t/p/w500';
  const KEY = process.env.REACT_APP_KEY;
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      });
  }, [KEY]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const chunkSize = 8;
  const movieChunks = [];
  for (let i = 0; i < movies.length; i += chunkSize) {
    movieChunks.push(movies.slice(i, i + chunkSize));
  }

  return (
    <Container>
      <h1>Seja bem-vindo ao ReelMagic</h1>
      <p>
        Explore uma ampla variedade de filmes que atendem a todos os gostos e gêneros. De ação a comédia, de drama a aventura, temos algo para todos.
      </p>
      <ScrollToTop isVisible={showScrollToTop}>
        <ScrollToTopButton href="#">&uarr;</ScrollToTopButton>
      </ScrollToTop>
      {loading ? (
        <p>Carregando filmes...</p>
      ) : (
        <>
          {movieChunks.map((chunk, index) => (
            <MediaQuery key={index} maxWidth={768}>
              {(matches) => (
                <Slider
                  key={index}
                  {...carouselSettings}
                  slidesToShow={matches ? 1 : 3}
                >
                  {chunk.map((movie) => (
                    <Movie key={movie.id}>
                      <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
                      <div className="movie-info">
                        <span>{movie.title}</span>
                        <div className="icons">
                          <p>
                            <FaFlag className="icon" /> Salvar
                          </p>
                          <p className="star-rating">
                            <FaStar className="star-icon" /> Avaliação: <span className="yellow-text">{movie.vote_average}</span>
                          </p>
                        </div>
                      </div>
                      <Link to={`/${movie.id}`}>
                        <Btn>Detalhes</Btn>
                      </Link>
                    </Movie>
                  ))}
                </Slider>
              )}
            </MediaQuery>
          ))}
        </>
      )}
    </Container>
  );
}

export default Home;