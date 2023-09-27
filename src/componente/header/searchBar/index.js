import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {FaStar, FaHeart, FaHeartBroken } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import "./search.css";

function Search() {
  const imagePath = 'https://image.tmdb.org/t/p/w500';
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const KEY = process.env.REACT_APP_KEY;
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=pt-BR&query=${searchTerm}`
      )
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
          setShowResults(true);
        });
    } else {
      setShowResults(false);
    }
  }, [searchTerm, KEY]);

  const handleSearch = (event) => {
    event.preventDefault();
  };

  const handleClear = () => {
    setSearchTerm("");
    setMovies([]);
    setShowResults(false);
  };

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteMovies(favorites);
  }, []);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [KEY]);

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
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="search-box bg-black rounded-pill p-2 d-flex align-items-center">
        <form onSubmit={handleSearch} className="Pesquisar d-flex align-items-center">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Pesquisar..."
            className="InputPes bg-black text-white border-0 rounded-pill"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <input type="submit" value="Pesquisar" style={{ backgroundColor: "#b53cf6" }} className="BtnPes border-0 rounded-pill ml-2 px-4" />
          {showResults && (
            <button onClick={handleClear} className="BtnLimpar bg-danger text-white border-0 rounded-circle ml-2">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          )}
        </form>
      </div>
      {showResults && ( 
    <div className="resultMovie">
    <div className="container-fluid black-bg">
      <h2 className="result">Resultados da sua Pesquisa:</h2>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
              <img
                src={`${imagePath}${movie.poster_path}`}
                alt={movie.title}
                className="card-img-top img-fluid"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <FaHeart
                    onClick={() => toggleFavorite(movie.id)}
                    className={`icon ${isMovieFavorite(movie.id) ? "favorited" : ""}`}
                  />
                  <p className="card-text">
                    <FaStar
                      className="star-icon"
                      style={{
                        color: "yellow",
                        marginBottom: "7px",
                        marginRight: "0.5rem",
                      }}
                    />
                    <span style={{ color: "yellow", fontSize: "15px" }}>
                      {movie.vote_average}
                    </span>
                  </p>
                </div>
              </div>
              <Link to={`/${movie.id}`}>
              <button className="btn btn-primary btn-block mt-2">Detalhes</button>
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
      )}
    </>
  );
}

export default Search;