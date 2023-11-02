import React from "react";
import Slider from "react-slick";
import "./slickCarousel.css";
import { CxoCardData } from "../../data.js";
import CxoCard from "../cards/CxoCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function CarouselSlick({ data }) {
  var settings = {
    className: "cxoCard-slider",
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
        {data.map((data) => (
          <div>
            <CxoCard data={data} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselSlick;
