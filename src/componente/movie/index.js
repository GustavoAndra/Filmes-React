import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./movie.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Movie = () => {
  const { id } = useParams();
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const [movie, setMovie] = useState({});
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [trailerKey, setTrailerKey] = useState("");
  const KEY = process.env.REACT_APP_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((err) => console.error(err));
  }, [KEY, id]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${KEY}&language=pt-BR&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setRelatedMovies(data.results);
      })
      .catch((err) => console.error(err));
  }, [KEY, id]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        const trailer = data.results.find((video) => video.type === "Trailer");
        if (trailer) {
          setTrailerKey(trailer.key);
        }
      })
      .catch((err) => console.error(err));
  }, [KEY, id]);

  if (!movie) {
    return <div>Carregando...</div>;
  }

  return (
    <section id="botao">
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-lg-4">
            <img
              className="img-fluid"
              src={`${imagePath}${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className="col-lg-6">
            <h1>{movie.title}</h1>
            <h2 id="lancamento">Data de lançamento: {movie.release_date}</h2>
            <div className="descricao">
              <h4 fon>Descrição:</h4>
              <p className="movie-desc">{movie.overview}</p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h4>Gênero:</h4>
                <p>
                  {movie.genres?.map((genre, index) => (
                    <span key={genre.id}>
                      {genre.name}
                      {index !== movie.genres.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              </div>
              <div className="col-md-6">
                <h4>Duração:</h4>
                <p>{movie.runtime} minutos</p>
              </div>
            </div>
            <Link to="/">
              <button className="btn btn-primary">Voltar</button>
            </Link>
            <h2 id="titulo-Relacionados">Talvez você goste:</h2>
            <Slider
              dots={false}
              infinite={true}
              slidesToShow={4}
              slidesToScroll={1}
              className="related-movies-carousel"
            >
              {relatedMovies.map((relatedMovie) => (
                <div key={relatedMovie.id} className="related-movie">
                  <Link to={`/${relatedMovie.id}`}>
                    <img
                      src={`${imagePath}${relatedMovie.poster_path}`}
                      alt={relatedMovie.title}
                      className="img-fluid"
                    />
                    <p className="related-movie-title">{relatedMovie.title}</p>
                  </Link>
                </div>
              ))}
            </Slider>
            {trailerKey && (
              <div>
                <h2>Trailer:</h2>
                <div className="trailer">
                 <div className="embed-responsive embed-responsive-4by9">
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${trailerKey}`}
                    title="Trailer"
                    frameBorder="0"
                    allowFullScreen
                    className="embed-responsive-item"
                  ></iframe>
                </div> {/*Fim do container*/}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Movie;