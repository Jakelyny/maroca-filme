import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsClipboardData,
  BsCreditCard,
  BsAlarm,
  BsJournalText,
} from "react-icons/bs";

import MovieCard from "../components/MovieCard";

import "./Movie.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}&language=pt-BR`;

    getMovie(movieUrl);
  }, []);

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <p className="tagline">Título original: <span>{movie.original_title}</span>
          </p>
          <div className="info">
            <h3>
              <BsCreditCard /> Orçamento: <span>{formatCurrency(movie.budget)}</span>
            </h3>   
          </div>
          <div className="info">
            <h3>
              <BsClipboardData /> Receita: <span>{formatCurrency(movie.revenue)}</span>
            </h3>        
          </div>
          <div className="info">
            <h3>
              <BsAlarm /> Duração: <span>{movie.runtime} minutos</span>
            </h3>
          </div>
          <div className="info description">
            <h3>
              <BsJournalText /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;