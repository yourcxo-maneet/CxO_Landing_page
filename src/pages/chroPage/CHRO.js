import { Box, Button, Grid, Typography } from "@mui/material";
import "../../pages/pages.css";
import NavBar from "../../components/navBar/NavBar";
import heroImage from "../../assets/Calendar.svg";
import SolidButton from "../../components/buttons/SolidButton";
import OutlinedButton from "../../components/buttons/OutlinedButton";
import SubCard from "../../components/cards/SubCard";
import PlanCard from "../../components/cards/PlanCard";
import socialMediaImg from "../../assets/social-media.svg";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import CxoCard from "../../components/cards/CxoCard";
import Footer from "../../components/footer/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {
  ChroCardData,
  cfoPlanCardData,
  cfoSubCardData,
  chroPlanCardData,
  chroSubCardData,
  cmoPlanCardData,
  cxoCardData,
  planCardData,
  subCardData,
} from "../../data";
import Crousel from "../../components/crousel/Crousel";
import Imagecarousel from "../../components/testCrousel/ImageCarousel";
import CarouselSlick from "../../components/carousel-slick/CarouselSlick";
import calendarImage from "../../assets/cfoCalendarPic.svg";
import { useEffect, useRef, useState } from "react";
import SubCardCarousel from "../../components/subcard-carousel/SubCardCarousel";
import { Helmet } from "react-helmet";

const CHRO = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const section2Ref = useRef(null);

  // Function to scroll to the section2 element
  const scrollToSection2 = () => {
    console.log("sddsfds");
    section2Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Function to update isMobile state
    function updateIsMobile() {
      setIsMobile(window.innerWidth < 768);
    }

    // Initial call to set isMobile state when component mounts
    updateIsMobile();

    // Add event listener to update isMobile state when window is resized
    window.addEventListener("resize", updateIsMobile);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Helmet>
        <title>Fractional CHRO Services | Your CxO Online</title>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Optimize your human resources strategies with our fractional CHRO services. Discover how Your CxO Online can enhance your HR management and foster employee development."
        />
      </Helmet>
      <NavBar />
      <Box>
        <Grid
          className="section1"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid className="section1-left" item xs={12} md={6}>
            <Box sx={{ maxWidth: "100%" }}>
              <Typography className="heading">
                Meet <span className="special-text">Your CHRO</span>
              </Typography>
              {/* <Typography className="heading">Today</Typography> */}
              <p className="sub-text">
                Elevate your{" "}
                <span className="bold-text">human resources strategies </span>{" "}
                nd maximize your workforce's potential with our{" "}
                <span className="bold-text">subscription services </span>{" "}
                designed to shape a dynamic, efficient, and engaged workplace.
              </p>
              <Box className="section1-buttons">
                <SolidButton
                  content={"Meet Your CHRO"}
                  //   clickScroll={scrollToSection2}
                  widget={
                    <iframe
                      width={isMobile ? "100%" : "500px"}
                      height="750px"
                      src="https://zoho-karan12.zohobookings.in/portal-embed#/customer/meetyourchro"
                      frameborder="0"
                      allowfullscreen=""
                    >
                      {" "}
                    </iframe>
                  }
                />
              </Box>
            </Box>
          </Grid>
          <Grid className="section1-right" item xs={12} md={6}>
            <Box className="image-avatar">
              {" "}
              <img src={calendarImage} alt="calendarImage" />
            </Box>
            <Box className="image-wrapper">
              <iframe
                width="100%"
                height="750px"
                src="https://zoho-karan12.zohobookings.in/portal-embed#/customer/meetyourchro"
                frameborder="0"
                allowfullscreen=""
              >
                {" "}
              </iframe>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="section2" ref={section2Ref}>
        <p className="heading">
          We deliver <span className="heading-special">Comprehensive</span> HR
          Solutions tailored to your needs <br />
        </p>
        <Box className="card-container">
          {isMobile ? (
            <SubCardCarousel data={chroSubCardData} />
          ) : (
            <Box className="card-row">
              {chroSubCardData.map((data) => {
                return <SubCard data={data} />;
              })}
            </Box>
          )}
        </Box>
      </Box>

      <Box className="section3">
        <Box className="section-3-top">
          <Box sx={{ flex: 3 }}>
            <Typography className="sub-heading">
              Do you want to start small ? No worries!
            </Typography>
            <Typography className="caption">
              Customize a plan that directly aligns with your objectives,
              <br />
              connect with us today.
            </Typography>
          </Box>
          <Box className="section3-subButton">
            <button className="subCard-button" onClick={scrollToTop}>
              Meet Your CHRO Today
            </button>
          </Box>
        </Box>
        <Crousel data={chroPlanCardData} Card={PlanCard} />
      </Box>
      <Box className="section5">
        <Box sx={{ margin: "0 auto", width: "80%" }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Meet Your CxO's
          </Typography>
          <Typography
            className="caption"
            sx={{ color: "#6a6965", textAlign: { xs: "center", md: "left" } }}
          >
            Meet Our Expert CxOs, seasoned professionals committed to driving
            your business growth and success. With a rich blend of industry
            knowledge and cutting-edge expertise, our team is dedicated to
            delivering tailored solutions for your unique business needs.
          </Typography>
          <Box></Box>
        </Box>
        <Box className="cxo-card">
          {isMobile ? null : (
            <Box sx={{ width: "90%", margin: "0 auto" }}>
              <CarouselSlick data={ChroCardData} />
            </Box>
          )}
          {/* <Box sx={{ width: "90%", margin: "0 auto" }}>
            <CarouselSlick />
          </Box> */}
        </Box>
        {isMobile ? <Imagecarousel data={ChroCardData} /> : null}
      </Box>
      <Box className="footer">
        <Footer />
      </Box>
      {/* <Box sx={{ width: "90%", margin: "0 auto", background: "#fefefe" }}>
    <CarouselSlick />
  </Box> */}
    </>
  );
};

export default CHRO;
