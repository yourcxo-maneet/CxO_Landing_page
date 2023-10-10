import { Button } from "@mui/material";
import React from "react";
import "./buttons.css";

const PrimaryButton = ({ content, url }) => {
  const handleButtonClick = () => {
    // Redirect to the specified URL
    window.location.href = url;
  };
  return (
    <Button className="primaryButton" onClick={handleButtonClick}>
      {content}
    </Button>
  );
};

export default PrimaryButton;
