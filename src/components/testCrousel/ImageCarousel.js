import React, { useEffect } from "react";
import Mycard from "./Mycard.js";
import "./Imagecarousel.css";
import { Avatar, Box, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { cxoCardData } from "../../data.js";
import CxoCard from "../cards/CxoCard.js";
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
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "2rem",
          }}
        >
          <Button onClick={btnpressprev}>
            <Avatar sx={{ backgroundColor: "#F5F5F6" }}>
              <ArrowBackIcon sx={{ color: "#000000" }} />
            </Avatar>
          </Button>
          <Button onClick={btnpressnext}>
            <Avatar sx={{ backgroundColor: "#F5F5F6" }}>
              <ArrowForwardIcon sx={{ color: "#000000" }} />
            </Avatar>
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
