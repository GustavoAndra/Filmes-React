import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./movie.css";

const Movie = () => {
  // Obtém o parâmetro da URL usando useParams para saber qual filme exibir
  const { id } = useParams();

  // URL base para as imagens dos filmes
  const imagePath = "https://image.tmdb.org/t/p/w500";

  // Estado para armazenar as informações do filme
  const [movie, setMovie] = useState([]);

  // Chave da API, obtida de variável de ambiente
  const KEY = process.env.REACT_APP_KEY;

  // UseEffect para buscar as informações do filme quando o componente for montado
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        // Encontra o filme correspondente pelo ID
        const res = data.results;
        let filme = res.find((key) => {
          return key.id == id;
        });

        // Define as informações do filme no estado
        setMovie(filme);
      });
  }, []);

  return (
    <section id="botao">
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-4">
            {/* Exibe a imagem do filme */}
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
              {/* Exibe a descrição do filme */}
              <p className="movie-desc">{movie.overview}</p>
            </div>
            {/* Link para retornar à página inicial */}
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