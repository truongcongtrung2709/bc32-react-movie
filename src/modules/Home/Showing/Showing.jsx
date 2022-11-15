import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import movieAPI from "../../../services/movieAPI";
import  Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./showing.module.scss"
import { Card,Button } from "react-bootstrap";
const Showing = () => {
  const navigate = useNavigate();

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
    <div>
       <h1 className={styles.movie__tittle}>MOVIE SELECTION</h1>
      <Carousel  responsive={responsive}
      draggable={false}
      infinite={true}
      keyBoardControl={true}
      customTransition="all .5"
      >
      {movies.map((item) => (
        <Card className={styles.card} key={item.maPhim} >
          <Card.Img src={item.hinhAnh} alt={item.maPhim} width="100px" height="500px" />
        
          <Card.ImgOverlay className={styles.overlay}>
          
          <Button variant="danger">
          <i className="fa-solid fa-play"></i>
          </Button>
            <Card.Title className={styles.item__title}>{item.tenPhim}</Card.Title>
            <Button variant="danger" onClick={() => navigate(`/movie/${item.maPhim}`)}>
            Chi tiết
          </Button>
          <Button variant="danger" >
          <i className="fa-solid fa-ticket"></i> Mua Vé
          </Button>
          </Card.ImgOverlay>
        </Card>
      ))} 
</Carousel>;

    </div>
  );
};

export default Showing;
