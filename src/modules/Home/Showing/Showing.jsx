import { useState, useEffect } from "react";
import movieAPI from "../../../services/movieAPI";
import  Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./showing.module.scss"
import MovieCard from "./MovieCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Showing = () => {

  const [movies, setMovies] = useState([]);
  


 
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initalSlide: 0,
    accessibility: true,
    focusOnSelect: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
      <Slider {...settings}
      >
      {movies.map((movie) => (
       <MovieCard movie={movie} key={movie.maPhim}/>
      ))} 
      {/*  */}
</Slider>

      
    </div>
  );
};

export default Showing;
 