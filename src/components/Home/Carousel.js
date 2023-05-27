import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import slide1 from "../../assets/slider-banner.jpg";
import slide2 from "../../assets/slider-banner2.jpg";
import slide3 from "../../assets/slider-banner3.jpg";

const MainCarousel = () => {
  const slider = [
    {
      id:1,  
      img: slide1,
      cap: "Unique location to build your project",
    },
    {
      id:2,  
      img: slide2,
      cap: "Unique location to build your project",
    },
    {
      id:3,  
      img: slide3,
      cap: "Unique location to build your project",
    },
  ];
  return (
    <Carousel className="banner-slider" infiniteLoop autoPlay interval={1500}>
      {slider.map((item) => {
        return (
          <div className="banner-cap">
            <img src={item.img} key={item.id}/>
            <p>{item.cap}</p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default MainCarousel;
