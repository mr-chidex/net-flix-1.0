import React, { useEffect, useState, useCallback } from "react";
import YouTube from "react-youtube";
import MovieTrailer from "movie-trailer";

import axios from "../axios";
import { imageBaseUrl } from "../utils/api";
import "../styles/movieRow.scss";

const MovieRow = ({ url, type }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [trailerId, setTrailerId] = useState("");

  const defaultImage = 11;

  const fetchaData = useCallback(async () => {
    try {
      const data = await axios.get(url);
      setMovies(data.data.results);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }, [url, setLoading]);

  useEffect(() => {
    fetchaData();
  }, [fetchaData]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const trailerHandler = async (movie) => {
    try {
      if (trailerId) {
        setTrailerId("");
      } else {
        const url = await MovieTrailer(movie.title);
        const trailerUrl = url ? url.split("=")[1] : "";
        setTrailerId(trailerUrl);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {error && <div style={{ padding: "1rem" }}>Error Network</div>}

      {!loading && (
        <>
          <h1 className="movie-type">{type}</h1>
          <section className="movie-row">
            {movies.map((movie) => (
              <div key={movie.id} className="movie-container">
                <div
                  className="image-container"
                  onClick={() => trailerHandler(movie)}
                >
                  <img
                    src={`${imageBaseUrl}${movie.backdrop_path}`}
                    alt={movie.title}
                  />
                </div>
                <span className="movie-title">{movie.title}</span>
              </div>
            ))}
          </section>
          {trailerId && <YouTube videoId={trailerId} opts={opts} />}
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
