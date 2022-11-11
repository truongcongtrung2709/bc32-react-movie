import React from "react";
import { useParams } from "react-router-dom";

import Overview from "./Overview/Overview"
import Showtimes from './Showtimes'

const Movie = () => {
  const { movieId } = useParams();

  return <div>
    <Overview movieId={movieId}/>
    <Showtimes movieId={movieId}/>
  </div>;
};

export default Movie;
