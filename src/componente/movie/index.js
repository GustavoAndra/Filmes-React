import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./movie.css";

const Movie = () => {
  const { id } = useParams();
  const imagePath = "https://image.tmdb.org/t/p/w500";

  const [movie, setMovie] = useState([]);
  const KEY = process.env.REACT_APP_KEY;
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const res = data.results;
        let filme = res.find((key) => {
        
          return key.id == id;
        });
        setMovie(filme);
      });
  }, []);

  return (
    <section id="botao">
       <div className="container mt-4">
      <div className="row">
        <div className="col-lg-4">
          <img
            className="img-fluid"
            src={`${imagePath}${movie.poster_path}`}
            alt="{movie.title}"
          />
        </div>
        <div className="col-lg-6">
          <h1>{movie.title}</h1>
          <h2 id="lancamento">Data de lançamento: {movie.release_date}</h2>
          <div className="descricao">
            <h4>Descrição: </h4>
            <p className="movie-desc">{movie.overview}</p>
          </div>
          <Link to="/">
            <button className="btn">Voltar</button>
          </Link>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Movie;