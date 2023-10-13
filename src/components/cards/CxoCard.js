import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./card.css";

const CxoCard = ({ data }) => {
  return (
    
    <Box className="cxoCard-wrapper">
      <Box
        className="cxoCard-image"
        style={{
          backgroundImage: `url(${data.image})`, 
        }}
      ></Box>
      <Box className="cxoCard-content">
        <Typography className="cxoCard-content-heading" variant="h4">
          Your {data.title}
        </Typography>
        <Typography
        className="cxoCard-content-subheading"
          variant="body1"
          gutterBottom
        >
          Let us handle your
   marketing and finance your 
          ads for you!
        </Typography>
        <Button variant="outlined" className="button">
          Meet Your {data.title}
        </Button>
      </Box>
    </Box>
  );
};

export default CxoCard;
