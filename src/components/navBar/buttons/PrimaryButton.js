import { Button } from "@mui/material";
import React from "react";
import "./buttons.css";

const PrimaryButton = ({ content }) => {
  return <Button className="primaryButton">{content}</Button>;
};

export default PrimaryButton;
