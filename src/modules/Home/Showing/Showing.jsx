import { useState, useEffect } from "react";
import movieAPI from "../../../services/movieAPI";
import  Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./showing.module.scss"
import MovieCard from "./MovieCard";
const Showing = () => {

  const [movies, setMovies] = useState([]);
  


 
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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
    <div className={styles.movieList}>
       <h1 className={styles.movieList__title}>MOVIE SELECTION</h1>
      <Carousel  responsive={responsive}
      draggable={false}
      infinite={true}
      keyBoardControl={true}
      customTransition="all .5s"
      >
      {movies.map((movie) => (
       <MovieCard movie={movie} key={movie.maPhim}/>
      ))} 
      {/*  */}
</Carousel>

      
    </div>
  );
};

export default Showing;
 