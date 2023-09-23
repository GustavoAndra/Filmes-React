import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Movie } from './style';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

function Home() {
  const imagePath = 'https://image.tmdb.org/t/p/w500';
  const KEY = process.env.REACT_APP_KEY;
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      });
  }, [KEY]);

  // Divide a lista de filmes em partes para criar carrosséis separados
  const chunkSize = 10;
  const movieChunks = [];
  for (let i = 0; i < movies.length; i += chunkSize) {
    movieChunks.push(movies.slice(i, i + chunkSize));
  }

  return (
    <Container>
      <h1>Movies</h1>
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
                  slidesToShow={matches ? 1 : 5} // Altere o número de slides visíveis com base no tamanho da tela
                >
                  {chunk.map((movie) => (
                    <Link to={`/${movie.id}`} key={movie.id} style={{ textDecoration: 'none' }}>
                      <Movie>
                        <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
                        <span>{movie.title}</span>
                        <p>Avaliação: {movie.vote_average}</p>
                        {/* O restante do conteúdo do card */}
                      </Movie>
                    </Link>
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