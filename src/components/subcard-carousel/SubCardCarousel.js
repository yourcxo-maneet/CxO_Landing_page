// import React from "react";
// import "./subCardCarousel.css";
// import Slider from "react-slick";
// import { CxoCardData, cmoPlanCardData, planCardData } from "../../data.js";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import SubCard from "../cards/SubCard";
// import Carousel from "react-elastic-carousel";

// const SubCardCarousel = ({ data }) => {
//   const breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     { width: 550, itemsToShow: 1, itemsToScroll: 1 },
//     { width: 768, itemsToShow: 4 },
//     { width: 1200, itemsToShow: 4, itemsToScroll: 4 },
//   ];
//   return (
//     <div className="App-carousel">
//       <div className="carousel-wrapper">
//         <Carousel breakPoints={breakPoints}>
//           {data.map((item, index) => (
//             <SubCard key={index} data={item} />
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// };
// export default SubCardCarousel;
import React from "react";
import Slider from "react-slick";
import { CxoCardData, cmoSubCardData, cxoCardData } from "../../data";
import CxoCard from "../cards/CxoCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SubCard from "../cards/SubCard";
import "./subCardCarousel.css";
function SubCardCarousel({ data }) {
  var settings = {
    className: "subcard-slider",
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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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
        {data.map((data) => (
          <SubCard data={data} />
        ))}
      </Slider>
    </div>
  );
}

export default SubCardCarousel;
