import React, { useEffect, useState, useCallback } from "react";
import axios from "../axios";
import { imageBaseUrl } from "../utils/api";
import "../styles/movieRow.scss";

const MovieRow = ({ url, type }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const defaultImage = 11;

  const fetchaData = useCallback(async () => {
    try {
      const data = await axios.get(url);
      setMovies(data.data.results);
      setLoading(false);
      console.log(data);
    } catch (error) {
      setError(true);
    }
  }, [url, setLoading]);

  useEffect(() => {
    fetchaData();
  }, [fetchaData]);

  return (
    <>
      {error && <div style={{ padding: "1rem" }}>Error Network</div>}

      {!loading && (
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
      )}

      {loading && (
        <div className="default-image">
          {[...Array(defaultImage)].map((image, ind) => (
            <div key={ind} className="default-card"></div>
          ))}
        </div>
      )}
    </>
  );
};

export default MovieRow;
