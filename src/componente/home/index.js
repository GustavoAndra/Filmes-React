import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Movie, Btn, ScrollToTop, ScrollToTopButton } from './home';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { FaHeart, FaStar } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';

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
    arrows: false,
  };
  const [, setShowSuccessMessage] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

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

  const carouselTitles = [
    "Favoritos da semana",
    "Lançamentos Em Destaque",
    "Assista Agora",
  ];

  const isMovieFavorite = (movieId) => {
    return favoriteMovies.includes(movieId);
  };

  const toggleFavorite = (movieId) => {
    if (isMovieFavorite(movieId)) {
      const updatedFavorites = favoriteMovies.filter((favId) => favId !== movieId);
      setFavoriteMovies(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setShowSuccessMessage(true);
      notify('Filme desfavoritado com sucesso.');
    } else {
      const updatedFavorites = [...favoriteMovies, movieId];
      setFavoriteMovies(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setShowSuccessMessage(true);
      notify('Filme favoritado com sucesso. Verifique em "Minha Lista".');
    }
  };

  const notify = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  };

  return (
    <Container>
    <ToastContainer />
    <section id='filmes'>
      <h1>Seja bem-vindo ao ReelMagic</h1>
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
                <div key={index}>
                  <h2>{carouselTitles[index]}</h2>
                  <Slider
                    key={index}
                    {...carouselSettings}
                    slidesToShow={matches ? 1 : 4}
                  >
                    {chunk.map((movie) => (
                      <Movie key={movie.id}>
                        <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
                        <div className="movie-info">
                          <div className="icons">
                           <p><FaHeart
                              onClick={() => toggleFavorite(movie.id)}
                              className={`icon ${isMovieFavorite(movie.id) ? "favorited" : ""}`}
                            />FAVORITE</p>
                            <p style={{ textAlign: 'center' }}>
                              <FaStar
                                className="star-icon"
                                style={{
                                  color: "yellow",
                                  marginBottom: "7px",
                                  marginRight: "0.5rem",
                                  cursor: "pointer",
                                  transition: "color 0.3s ease",
                                }}
                              />
                              <span style={{ color: "yellow", fontSize: '15px' }}>{movie.vote_average}</span>
                            </p>
                          </div>
                        </div>
                        <Link to={`/${movie.id}`}>
                          <Btn id='#botao'>Detalhes</Btn>
                        </Link>
                      </Movie>
                    ))}
                  </Slider>
                </div>
              )}
            </MediaQuery>
          ))}
        </>
      )}
    </section>
  </Container>
  );
}

export default Home;