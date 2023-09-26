import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFlag, FaStar } from 'react-icons/fa';
import "./search.css";

function Search() {
  const imagePath = 'https://image.tmdb.org/t/p/w500';
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const KEY = process.env.REACT_APP_KEY;

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

  return (
    <>
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
          <input type="submit" value="Pesquisar" className="BtnPes bg-primary text-white border-0 rounded-pill ml-2 px-4" />
          {showResults && (
            <button onClick={handleClear} className="BtnLimpar bg-danger text-white border-0 rounded-circle ml-2">
              X
            </button>
          )}
        </form>
      </div>
      {showResults && (
        <div className="resultMovie ">
          <h2 className="result">Resultados da sua Pesquisa:</h2>
          <div className="row">
            {movies.map((movie) => (
              <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <Link to={`/${movie.id}`}>
                  <div className="card">
                    <img
                      src={`${imagePath}${movie.poster_path}`}
                      alt={movie.title}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <p className="card-text">
                          <FaFlag className="icon" /> Salvar
                        </p>
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
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Search;