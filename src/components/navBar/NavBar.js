import * as React from "react";
import Box from "@mui/material/Box";
import "./navBar.css";
import logo from "../../assets/LogoRevised.svg";
import PrimaryButton from "../buttons/PrimaryButton";

const NavBar = () => {
  return (
    <Box className="navbar-wrapper">
      <Box>
        <img src={logo} />
      </Box>
      <Box>
        {/* <PrimaryButton
          content={"visit website"}
          url={"https://www.yourcxo.online/"}
        /> */}
      </Box>
    </Box>
  );
};

export default NavBar;
