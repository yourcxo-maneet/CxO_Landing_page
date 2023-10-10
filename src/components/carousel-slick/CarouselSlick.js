import React from "react";
import Slider from "react-slick";
import "./slickCarousel.css";
import { cxoCardData } from "../../data";
import CxoCard from "../navBar/cards/CxoCard";

function CarouselSlick() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {cxoCardData.map((data) => (
          <div>
            <CxoCard data={data} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselSlick;
