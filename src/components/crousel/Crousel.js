import React from "react";
import Slider from "react-slick";
import "./crousel.css";
import { CxoCardData, cmoPlanCardData, planCardData } from "../../data.js";
import CxoCard from "../cards/CxoCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PlanCard from "../cards/PlanCard";
function Crousel() {
  var settings = {
    className: "crousel-slider",
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    initialSlide: 0,
    pauseOnHover: true,
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
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className="slider-plancard">
      <Slider {...settings}>
        {cmoPlanCardData.map((data) => (
          <div>
            <PlanCard data={data} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Crousel;
