import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";
import "./crousel.css";
import PlanCard from "../cards/PlanCard";
import CxoCard from "../cards/CxoCard";

function Crousel({ data, Card, isCxocard }) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
  ];

  const carouselRef = useRef(null);
  console.log(carouselRef);
  const handleNextEnd = ({ index }) => {
    console.log(index);
    if (index + 1 === data.length) {
      // If the last item is reached, reset to the first item after a delay
      if (carouselRef.current && carouselRef.current.goTo) {
        carouselRef.current.goTo(0);
      }
    }
  };

  return (
    <div className="App-carousel">
      <div className="carousel-wrapper">
        <Carousel
          ref={carouselRef}
          breakPoints={breakPoints}
          enableAutoPlay={true}
          autoPlaySpeed={3000}
          onNextEnd={handleNextEnd}
        >
          {data.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Crousel;
