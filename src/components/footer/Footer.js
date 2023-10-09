import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/cxoLogoFooter.svg";
import InstagramLogo from "../../assets/InstagramLogo.svg";
import LinkedinLogo from "../../assets/LinkedinLogo.svg";
import FacebookLogo from "../../assets/FacebookLogo.svg";
import PinterestLogo from "../../assets/PinterestLogo.svg";
import HeadsetIcon from "@mui/icons-material/Headset";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import "./footer.css";

const Footer = () => {
  return (
    <Box className="footer-wrapper">
      <Box className="footer-upper">
        <Box className="footer-upper-left">
          <Box sx={{ marginBottom: "1rem" }}>
            <img src={logo} width={"250px"} height={"107px"} />
          </Box>
          <Box className="footer-upper-left-details">
            <HeadsetIcon />
            <Typography>+1-640-600-0040</Typography>
          </Box>
          <Box className="footer-upper-left-details">
            <EmailIcon />
            <Typography>helpdesk@yourcxo.online</Typography>
          </Box>
          <Box className="footer-upper-left-details">
            <LocationOnIcon />
            <Typography>
              India (Noida), Canada (Toronto), UAE (Dubai)
            </Typography>
          </Box>
        </Box>

        <Box className="footer-upper-right">
          <Typography gutterBottom>connect</Typography>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Box>
              <img src={FacebookLogo} />
            </Box>
            <Box>
              <img src={PinterestLogo} />
            </Box>
            <Box>
              <img src={InstagramLogo} />
            </Box>
            <Box>
              <img src={LinkedinLogo} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box></Box>
      <hr></hr>
      <Typography>
        © 2021 Your CxO Online Solutions. All Rights Reserved.
      </Typography>
      <Box></Box>
    </Box>
  );
};

export default Footer;
