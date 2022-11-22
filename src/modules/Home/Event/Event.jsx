import React from 'react'
import { Card } from 'react-bootstrap';
import  Carousel  from "react-multi-carousel";
import styles from './event.module.scss'
const Event = () => {
  const responsive = {
    superLargeDesktop:{
      breakpoint: {max: 4000, min: 3000},
      items:8
    },
    desktop:{
      breakpoint:{max: 3000, min: 1024},
      items:5
    },
    tablet:{
      breakpoint:{max: 1024, min:464},
      item: 2
    },
    mobile:{
      breakpoint:{max: 464, min:0}
    }
  }
  return (
    <div className={styles.event}>
      <h1 className={styles.event__title}>EVENT</h1>
      <Carousel
      responsive={responsive}
      draggable= {false}
      infinite= {true}
      keyBoardControl={true}
      customTransition="all .5s"
      >
       <Card className={styles.card}>
        <Card.Img
        src='https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/2/4/240x201_5_.jpg'
        />
        </Card> 
        <Card className={styles.card}>
        <Card.Img
        src='https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/b/i/birthday_popcorn_box_240x201.png'
        />
        </Card> 
        <Card className={styles.card}>
        <Card.Img
        src='https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/u/2/u22_2022_240x201.png'
        />
        </Card> 
        <Card className={styles.card}>
        <Card.Img
        src='https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/h/a/happywednesday240x201_1.jpg'
        />
        </Card> 
        <Card className={styles.card}>
        <Card.Img
        src='https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/c/u/culture-240_1.jpg'
        />
        </Card> 

      </Carousel>
    </div>
  )
}

export default Event