import React, { useState, useEffect, useCallback } from "react";

import axios from "../axios";
import "../styles/header.scss";
import { imageBaseUrl } from "../utils/api";
import { getThriller } from "../utils/api";
import NavBAr from "./NavBar";

const Header = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

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

  console.log(movie.backdrop_path);

  return (
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
            <button>Play</button>
            <button>My List</button>
          </div>

          <p className="description">{movie.overview}</p>
        </div>
      )}
    </header>
  );
};

export default Header;
