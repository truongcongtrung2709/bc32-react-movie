import { useState, useEffect } from "react";
import movieAPI from "../../../services/movieAPI";
import styles from "./banner.module.scss";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    // IIFE function
    (async () => {
      const data = await movieAPI.getBanners();
      setBanners(data);
    })();
  }, []);

  return (
    <Carousel className= {`w-100 ${styles.banner}`}>
      {banners.map((item)=>(
    <Carousel.Item key={item.maBanner}>
      <img
        className={` d-block w-100  ${styles.banner__item}`}
        src={item.hinhAnh}
        alt={`banner${item.maBanner}`}
        height="700px"
      />
    </Carousel.Item> 
    ))}
  </Carousel>
  );
};

export default Banner;
