import { useState, useEffect } from "react";
import movieAPI from "../../../services/movieAPI";
import styles from "./banner.module.scss";

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
    <div className="background" style={{backgroundImage:`url("https://t4.ftcdn.net/jpg/04/51/76/13/360_F_451761307_8lo4yWKiWgiO5LCF4m8Y3Bns7aLCT9MR.jpg")`, backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover"}}>
    <div className={styles.banners__container}>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
  {banners.map((item, index)=>(
    <div className={index===0 ? "carousel-item active": "carousel-item"} key={item.maBanner}>
      <img className="d-block w-100" src={item.hinhAnh} alt={`banner-${item.maBanner}`}/>
    </div>
    ))}
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>


        
        </div>
        </div>
  );
};

export default Banner;
