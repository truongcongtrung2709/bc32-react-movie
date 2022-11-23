import React from 'react'
import { Card } from 'react-bootstrap';
import styles from './event.module.scss'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Event = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initalSlide: 0,
    accessibility: true,
    focusOnSelect: false,
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
  return (
    
    <div className={styles.event}>
      <h1 className={styles.event__title}>EVENT</h1>
      <Slider {...settings} 
      className={styles.event__list}
      >
       <div className={styles.card}>
        <img
        src='https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240x201_5_.jpg'
        alt=''
        />
        </div> 
        <div className={styles.card}>
        <img
        src='https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/b/i/birthday_popcorn_box_240x201.png'
        alt=''
        />
        </div> 
        <div className={styles.card}>
        <img
        src='https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/u/2/u22_2022_240x201.png'
        alt=''
        />
        </div> 
        <div className={styles.card}>
        <img
        src='https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/h/a/happywednesday240x201_1.jpg'
        alt=''
        />
        </div> 
        <div className={styles.card}>
        <img
        src='https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/u/culture-240_1.jpg'
        alt=''
        />
        </div> 

      </Slider>
    </div>
  )
}

export default Event