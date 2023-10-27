import React from "react";
import Slider from "react-slick";
import "./Imagecarousel.css";
import { CxoCardData, cxoCardData } from "../../data";
import CxoCard from "../cards/CxoCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function ImageCarousel() {
  var settings = {
    className: "cxoCard-slider",
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: (
      <ArrowBackIcon
        className="slick-arrow"
        sx={{
          color: "#000000",
          backgroundColor: "#F6F6F6",
          width: "48px",
          height: "48px",
          borderRadius: "100px",
          padding: "0.2rem",
          ":hover": {
            color: "#000000",
            backgroundColor: "#F6F6F6",
          },
        }}
      />
    ),
    nextArrow: (
      <ArrowForwardIcon
        className="slick-arrow"
        sx={{
          color: "#000000",
          backgroundColor: "#F6F6F6",
          width: "48px",
          height: "48px",
          borderRadius: "100px",
          padding: "0.2rem",
          ":hover": {
            color: "#000000",
            backgroundColor: "#F6F6F6",
          },
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
        {CxoCardData.map((data) => (
          <div>
            <CxoCard data={data} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageCarousel;
