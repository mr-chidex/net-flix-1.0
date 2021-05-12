import React, { useEffect, useState, useCallback } from "react";
import axios from "../axios";
import { imageBaseUrl } from "../utils/api";
import "../styles/movieRow.scss";

const MovieRow = ({ url, type }) => {
  const [movies, setMovies] = useState([]);

  const fetchaData = useCallback(async () => {
    try {
      const data = await axios.get(url);
      setMovies(data.data.results);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  useEffect(() => {
    fetchaData();
  }, [fetchaData]);

  return (
    <>
      <h1 className="movie-type">{type}</h1>
      <section className="movie-row">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-container">
            <div className="image-container">
              <img
                src={`${imageBaseUrl}${movie.backdrop_path}`}
                alt={movie.title}
              />
            </div>
            <span className="movie-title">{movie.title}</span>
          </div>
        ))}
      </section>
    </>
  );
};

export default MovieRow;
