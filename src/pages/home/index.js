import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Movie, Btn } from './style';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { FaFlag, FaStar } from 'react-icons/fa'; // Importe os ícones


function Home() {
  const imagePath = 'https://image.tmdb.org/t/p/w500';
  const KEY = process.env.REACT_APP_KEY;
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 7000,
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
      <h1>Seja bem-vindo ao ReelMagic</h1>
      <p>
        Explore uma ampla variedade de filmes que atendem a todos os gostos e gêneros. De ação a comédia, de drama a aventura, temos algo para todos.
      </p>
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
                    <Movie>
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