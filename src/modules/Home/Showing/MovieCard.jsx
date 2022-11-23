import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card,Button } from "react-bootstrap";
import styles from "./showing.module.scss"
import Modal from "react-bootstrap/Modal";
import ReactPlayer from 'react-player/youtube'
const MovieCard = ({movie}) => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <Card className={styles.movieList__card} >
          <Card.Img src={movie.hinhAnh} alt={movie.maPhim} width="100px" height="500px" />
        
          <Card.ImgOverlay className={styles.overlay}>
          
          <Button className={`${styles.movie__trailer}`} variant="danger" onClick={()=> {setIsModalOpen(true)}}>
          <i className= "fa-solid fa-play"></i>
          </Button>
          <Modal
          
            centered
            show={isModalOpen}
            onHide={() => setIsModalOpen(false)}
            size="lg"
            aria-labelledby="example-modal-sizes-title-lg">
            <ReactPlayer width="100%" height="500px" url={movie.trailer} controls/>
            {console.log(movie.trailer)}
          </Modal>
            <Card.Title className={styles.movie__title}>{movie.tenPhim}</Card.Title>
            <Button className={styles.movie__detail} variant="danger" onClick={() => navigate(`/movie/${movie.maPhim}`)}>
            Chi tiết
          </Button>
          <Button className={styles.movie__ticket} variant="danger" >
          <i className="fa-solid fa-ticket"></i> Mua Vé
          </Button>
          </Card.ImgOverlay>
          
        </Card>
  )
}

export default MovieCard