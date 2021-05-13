import React, { useState, useEffect, useCallback } from "react";
import YouTube from "react-youtube";
import MovieTrailer from "movie-trailer";

import axios from "../axios";
import "../styles/header.scss";
import { imageBaseUrl } from "../utils/api";
import { getThriller } from "../utils/api";
import NavBAr from "./NavBar";

const Header = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [trailerId, setTrailerId] = useState("");

  const fetchaData = useCallback(async () => {
    try {
      const data = await axios.get(getThriller);

      const movies = data.data.results;
      const rand = Math.floor(Math.random() * movies.length);
      setMovie(movies[rand]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

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
      <header
        style={{
          backgroundImage: `url(${imageBaseUrl}${movie.backdrop_path})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <NavBAr />
        {!loading && (
          <div className="header-content">
            <h1>{movie.title}</h1>
            <div className="header-button">
              <button onClick={() => trailerHandler(movie)}>
                {trailerId ? "Stop Trailer" : "Play "}
              </button>
              {/* <button>My List</button> */}
            </div>

            <p className="description">
              {movie.overview && movie.overview.substring(0, 300)}...
            </p>
          </div>
        )}
      </header>
      {trailerId && <YouTube videoId={trailerId} opts={opts} />}
    </>
  );
};

export default Header;
