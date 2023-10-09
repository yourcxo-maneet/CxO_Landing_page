import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import "./crousel.css";
import PlanCard from "../navBar/cards/PlanCard";
import CxoCard from "../navBar/cards/CxoCard";



function Crousel({ data, Card , isCxocard }) {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1, itemsToScroll: 1 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: `${isCxocard?1:4}` },
      ];
  return (
    <div className="App-carousel">
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {data.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Crousel;
