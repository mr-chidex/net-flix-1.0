import React from "react";
import MovieRow from "../components/MovieRow";

import {
  getTopRated,
  getComedy,
  getAdventure,
  getAction,
  getAnimation,
  getDocumentaries,
} from "../utils/api";

const Home = () => {
  return (
    <main>
      <MovieRow url={getTopRated} type="Top Rated Movies" />
      <MovieRow url={getComedy} type="comedy Movies" />
      <MovieRow url={getAdventure} type="Adventure Movies" />
      <MovieRow url={getAction} type="Action Movies" />
      <MovieRow url={getAnimation} type="Animation Movies" />
      <MovieRow url={getDocumentaries} type="Documentaries" />
    </main>
  );
};

export default Home;
