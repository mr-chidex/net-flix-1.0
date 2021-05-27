import React, { useEffect } from "react";
import MovieRow from "../components/MovieRow";

import {
  getTrending,
  getComedy,
  getAdventure,
  getAction,
  getAnimation,
  getHorror,
  getMusic,
  getRomance,
  getScienceFiction,
} from "../utils/api";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <main className="container">
        <MovieRow url={getTrending} type="Trending Movies" />
        <MovieRow url={getAdventure} type="Adventure Movies" />
        <MovieRow url={getAction} type="Action Movies" />
        <MovieRow url={getComedy} type="comedy Movies" />
        {/* <MovieRow url={getAnimation} type="Animation Movies" /> */}
        <MovieRow url={getHorror} type="Horror Movies" />
        {/* <MovieRow url={getMusic} type="Music Movies" /> */}
        {/* <MovieRow url={getRomance} type="Romance Movies" /> */}
        <MovieRow url={getScienceFiction} type="Science Fiction Movies" />
      </main>
      <div className="ruler"></div>
    </>
  );
};

export default Home;
