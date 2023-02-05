import React from "react";
import { ListItem } from "../../components";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h2 className="recMoviesTitle">Recommended Movies for you: </h2>
      <div className="recMovies">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        
      </div>
      <h2 className="recTvSeriesTitle">Recommended TV Series For you </h2>
      <div className="recTvSeries">
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />     

      </div>
    </div>
  );
}

export default Home;
