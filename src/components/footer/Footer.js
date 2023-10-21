import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/cxoLogoFooter.svg";
import footerlogo from "../../assets/footerlogo.svg";
import LinkedinLogo from "../../assets/linkedin.svg";
import FacebookLogo from "../../assets/facebook.svg";
import Upwork from "../../assets/upwork.svg";
import Insta from "../../assets/instagram.svg";
import HeadsetIcon from "@mui/icons-material/Headset";
import LanguageIcon from "@mui/icons-material/Language";
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
            <Typography>+1 (437) 799-9039</Typography>
          </Box>
          <Box className="footer-upper-left-details">
            <EmailIcon />
            <Typography>helpdesk@yourcxo.online</Typography>
          </Box>
          <Box className="footer-upper-left-details">
            <LocationOnIcon />
            <Typography>
              Canada (Toronto), India (Noida), Middle East (Dubai)
            </Typography>
          </Box>
          <Box className="footer-upper-left-details">
            <LanguageIcon />
            <a href="https://www.yourcxo.online/" style={{ color: "#ffffff" }}>
              <Typography>www.yourcxo.online</Typography>
            </a>
          </Box>
        </Box>

        <Box className="footer-upper-right">
          <Typography gutterBottom>Engage with us </Typography>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Box>
              <a href="https://www.facebook.com/yourcxoonline">
                <img src={FacebookLogo} />
              </a>
            </Box>
            <Box>
              <a href="https://www.upwork.com/agencies/1309068026062622720/">
                <img src={Upwork} />
              </a>
            </Box>
            <Box>
              <a
                href="https://www.instagram.com/yourcxoonline/"
                target="_blank"
              >
                <img src={Insta} />
              </a>
            </Box>
            <Box>
              <a
                href="https://www.linkedin.com/company/yourcxoonline/mycompany/"
                target="_blank"
              >
                <img src={LinkedinLogo} />
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box></Box>
      <hr></hr>
      <Typography>
        © 2023 Your CxO Online Solutions Inc. All Rights Reserved.
      </Typography>
      <Box></Box>
    </Box>
  );
};

export default Footer;
