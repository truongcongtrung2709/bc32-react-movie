import { useState, useEffect } from "react";
import movieAPI from "../../../services/movieAPI";

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
    <div>
      {banners.map((item) => (
        <img
          key={item.maBanner}
          src={item.hinhAnh}
          alt={`banner-${item.maBanner}`}
          width={"100px"}
        />
      ))}
    </div>
  );
};

export default Banner;
