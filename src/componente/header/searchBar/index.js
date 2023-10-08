import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaHeart, FaHeartBroken } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para o termo de pesquisa
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const KEY = process.env.REACT_APP_KEY;

  // Função para buscar detalhes dos filmes favoritos na API
  const fetchMovieDetails = useCallback((favorites) => {
    // Se searchTerm estiver vazio, exiba os filmes favoritos
    const endpoint = searchTerm
      ? `search/movie?api_key=${KEY}&language=pt-BR&query=${searchTerm}`
      : `discover/movie?api_key=${KEY}&language=pt-BR&sort_by=popularity.desc`;

    fetch(`https://api.themoviedb.org/3/${endpoint}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          setMovieDetails(data.results);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar detalhes do filme:", error);
      });
  }, [searchTerm, KEY]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteMovies(favorites);
    fetchMovieDetails(favorites);
  }, [fetchMovieDetails]);

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
      notify("Filme desfavoritado com sucesso.");
    } else {
      const updatedFavorites = [...favoriteMovies, movieId];
      setFavoriteMovies(updatedFavorites);
      // Atualize o localStorage com os filmes favoritos atualizados
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      notify("Filme favoritado com sucesso. Verifique em 'Minha Lista'.");
    }
  };

  // Função para exibir notificações
  const notify = (message) => {
    toast.info(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
      className: "custom-toast-error",
    });
  };

  // Configurações do carrossel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const handleSearch = () => {
    // Realize a pesquisa aqui
    fetchMovieDetails([]);
    // Limpe o campo de pesquisa definindo o estado searchTerm para uma string vazia
    setSearchTerm("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Pesquisar filmes"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Pesquisar</button>
      </div>
      <ToastContainer />
      <Slider {...carouselSettings}>
        {movieDetails.map((movie) => {
          if (movie) {
            return (
              <div key={movie.id}>
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
                        <span style={{ color: "yellow", fontSize: "15px" }}>
                          {movie.vote_average}
                        </span>
                      </p>
                    </div>
                    <Link to={`/${movie.id}`}>
                      <button className="btn btn-primary btn-block mt-2">
                        Detalhes
                      </button>
                    </Link>
                    <button
                      onClick={() => toggleFavorite(movie.id)}
                      className="btn btn-danger btn-block mt-2"
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </Slider>
    </div>
  );
};

export default Search;