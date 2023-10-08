import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaHeartBroken, FaStar } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import Header from '../header';
import 'react-toastify/dist/ReactToastify.css';
import "./favorito.css";

const Favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  const imagePath = 'https://image.tmdb.org/t/p/w500';
  const KEY = process.env.REACT_APP_KEY;

  // Função para buscar detalhes dos filmes favoritos na API
  const fetchFavoriteMovieDetails = (favorites) => {
    const promises = favorites.map((movieId) => {
      const endpoint = `movie/${movieId}?api_key=${KEY}&language=pt-BR`;

      return fetch(`https://api.themoviedb.org/3/${endpoint}`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => {
          console.error("Erro ao buscar detalhes do filme:", error);
          return null;
        });
    });

    Promise.all(promises).then((favoriteMoviesData) => {
      // Filtrar os filmes que não retornaram null
      const filteredFavoriteMovies = favoriteMoviesData.filter(
        (movie) => movie !== null
      );
      setMovieDetails(filteredFavoriteMovies);
    });
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteMovies(favorites);

    // Chame a função para buscar detalhes dos filmes favoritos
    fetchFavoriteMovieDetails(favorites);
  }, []);

  // Função para verificar se um filme é favorito
  const isMovieFavorite = (movieId) => {
    return favoriteMovies.includes(movieId);
  };

  // Função para alternar a marcação de um filme como favorito ou desfavorito
  const toggleFavorite = (movieId) => {
    if (isMovieFavorite(movieId)) {
      const updatedFavorites = favoriteMovies.filter((favId) => favId !== movieId);
      setFavoriteMovies(updatedFavorites);
      // Atualize o localStorage com os filmes favoritos atualizados
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      notify('Filme desfavoritado com sucesso.');
    } else {
      const updatedFavorites = [...favoriteMovies, movieId];
      setFavoriteMovies(updatedFavorites);
      // Atualize o localStorage com os filmes favoritos atualizados
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      notify('Filme favoritado com sucesso. Verifique em "Minha Lista".');
    }
  };

  // Função para exibir notificações usando react-toastify
  const notify = (message) => {
    toast.info(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000, // Fechar a notificação após 2 segundos
      className: 'custom-toast-error', // Adicione a classe CSS personalizada aqui
    });
  };

  return (
    <div>
      <Header />
      <h1 id='titulo-favorito'>MY LIST :)</h1>
      <ToastContainer />
      {favoriteMovies.length === 0 ? (
        <p>Nenhum filme favorito encontrado.</p>
      ) : (
        <div className="row">
          {movieDetails.map((movie) => {
            if (movie) {
              return (
                <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="card">
                    <img
                      src={`${imagePath}${movie.poster_path}`}
                      alt={movie.title}
                      className="card-img-top img-fluid"
                    />
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        {isMovieFavorite(movie.id) ? (
                          <FaHeartBroken
                            onClick={() => toggleFavorite(movie.id)}
                            className="icon desfavorited"
                          />
                        ) : (
                          <FaHeart className="icon favorited" />
                        )}
                        <p className="card-text">
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
                      <Link to={`/${movie.id}`}>
                        <button className="btn btn-primary btn-block mt-2">Detalhes</button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null; // Se o filme não for encontrado, não renderize nada
            }
          })}
        </div>
      )}
    </div>
  );
};

export default Favorites;