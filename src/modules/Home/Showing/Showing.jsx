import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import movieAPI from "../../../services/movieAPI";
import  Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./showing.module.scss"
import { Card,Button } from "react-bootstrap";
import Modal from "react-modal";
import ReactPlayer from 'react-player'
const Showing = () => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      
    },
    overlay:{
      background: "rgba(0,0,0,0.8",
    }
  };
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

  const openModal = ()=>{
    setIsModalOpen(true);
  }
  const closeModal = ()=>{
    setIsModalOpen(false);
  }
  return (
    <div className={styles.movieList}>
       <h1 className={styles.movie__tittle}>MOVIE SELECTION</h1>
      <Carousel  responsive={responsive}
      draggable={false}
      infinite={true}
      keyBoardControl={true}
      customTransition="all .5s"
      >
      {movies.map((item) => (
        <Card className={styles.card} key={item.maPhim} >
          <Card.Img src={item.hinhAnh} alt={item.maPhim} width="100px" height="500px" />
        
          <Card.ImgOverlay className={styles.overlay}>
          
          <Button variant="danger" onClick={openModal}>
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
</Carousel>
<Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={customStyles}
          controls="true"
          >  
              <ReactPlayer url="https://www.youtube.com/watch?v=3bA6tX6zpEY&ab_channel=DigitalDreams" />
          </Modal>
    </div>
  );
};

export default Showing;
