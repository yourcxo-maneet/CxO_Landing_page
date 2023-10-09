import React, { useEffect } from "react";
import Mycard from "./Mycard.js";
import "./Imagecarousel.css";
import { Avatar, Box, Button } from "@mui/material";
import { cxoCardData } from "../../data.js";
import CxoCard from "../navBar/cards/CxoCard.js";
const Imagecarousel = () => {
  let box;

  useEffect(() => {
    box = document.querySelector(".product-container");
    console.log(box);
  }, []);

  const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };

  const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };
  return (
    <>
      <div className="product-carousel">
        <Box sx={{width:"100%",display:"flex",justifyContent:"flex-end",marginRight:"2rem"}}>
          <Button onClick={btnpressprev}>
            <Avatar>&lt;</Avatar>
          </Button>
          <Button onClick={btnpressnext}>
            <Avatar>&gt;</Avatar>
          </Button>
        </Box>

        <div className="product-container">
          {cxoCardData.map((data) => (
            <>
              <CxoCard data={data} />
              <CxoCard data={data} />
              <CxoCard data={data} />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Imagecarousel;
