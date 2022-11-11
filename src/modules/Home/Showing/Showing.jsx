import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import movieAPI from "../../../services/movieAPI";

const Showing = () => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await movieAPI.getMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      {movies.map((item) => (
        <div key={item.maPhim}>
          <span>{item.tenPhim}</span>
          <button onClick={() => navigate(`/movie/${item.maPhim}`)}>
            Chi tiết
          </button>
        </div>
      ))}
    </div>
  );
};

export default Showing;
