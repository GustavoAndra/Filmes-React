import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaStar, FaTrash  } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import "./search.css";

function Search() {
  const imagePath = 'https://image.tmdb.org/t/p/w500';
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const KEY = process.env.REACT_APP_KEY;
  const [, setShowSuccessMessage] = useState(false);
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
    <>
      <ToastContainer />
      <div className="search-box"></div>
      <form onSubmit={handleSearch} className="Pesquisar">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Pesquisar..."
          className="InputPes"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <input type="submit" value="Pesquisar" className="BtnPes" />
        {showResults && (
          <button onClick={handleClear} className="BtnLimpar">
            <FaTrash /> {/* Ícone de lixo para limpar */}
          </button>
        )}
      </form>
      {showResults && (
        <div className="resultMovie ">
          <h2 className="result">Resultados da sua Pesquisa:</h2>
          <div className="Container-fluid">
            <div className="row">
              {movies.map((movie) => (
                <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="card">
                    <img
                      src={`${imagePath}${movie.poster_path}`}
                      alt={movie.title}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <p>
                          <FaHeart
                            onClick={() => toggleFavorite(movie.id)}
                            className={`icon ${isMovieFavorite(movie.id) ? "favorited" : ""}`}
                          />
                        </p>
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
                      <button id='#botao'>Detalhes</button>
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