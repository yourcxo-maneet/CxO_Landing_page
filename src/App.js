import { Box, Button, Grid, Typography } from "@mui/material";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import heroImage from "./assets/heroImage.svg";
import SolidButton from "./components/navBar/buttons/SolidButton";
import OutlinedButton from "./components/navBar/buttons/OutlinedButton";
import SubCard from "./components/navBar/cards/SubCard";
import PlanCard from "./components/navBar/cards/PlanCard";
import socialMediaImg from "./assets/social-media.svg";
import PrimaryButton from "./components/navBar/buttons/PrimaryButton";
import CxoCard from "./components/navBar/cards/CxoCard";
import Footer from "./components/footer/Footer";
import { cxoCardData, planCardData, subCardData } from "./data";
import Crousel from "./components/crousel/Crousel";
import Imagecarousel from "./components/testCrousel/ImageCarousel";
import CarouselSlick from "./components/carousel-slick/CarouselSlick";
import { useEffect, useState } from "react";
function App() {
  const item = [1, 2, 3, 4, 5, 6, 7, 87];
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <>
      <NavBar />
      <Box>
        <Grid
          className="section1"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid className="section1-left" item xs={12} md={6}>
            <Box sx={{ maxWidth: "100%", paddingLeft: "1rem" }}>
              <Typography className="heading">Are you looking for </Typography>
              <Typography className="heading">
                <span className="special-text">Funding ?</span>{" "}
              </Typography>
              <p className="sub-text">
                Explore our range of subscription plans, designed to meet every
                need and apply for Your CMO’s Ad fund
              </p>
            </Box>
            <Box className="section1-buttons">
              <SolidButton content={"Apply for Ad Fund"} />
              <OutlinedButton content={"Meet Your CMO"} />
            </Box>
          </Grid>
          <Grid className="section1-right" item xs={12} md={6}>
            <Box className="image-wrapper">
              <img src={heroImage} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="section2">
        <p className="heading">
          Your CMO’s Exclusive <br />
          Subscriptions
        </p>
        <Grid
          maxWidth={"80%"}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {subCardData.map((data) => {
            return (
              <Grid item md={4} sm={12}>
                <SubCard data={data} />
              </Grid>
            );
          })}
          <Typography
            sx={{ marginTop: "2rem", width: "100%", textAlign: "right" }}
            variant="caption"
            display="block"
            gutterBottom
          >
            *Funding applicable to Go Scale & Go Pro Subscriptions only
          </Typography>
          <Typography className="sub-heading">
            Not ready to dive into a full subscription? No worries!
          </Typography>
          <Typography className="caption">
            Mix and match to create a custom plan that suits your needs and
            <br />
            budget. Get in touch today to supercharge your marketing efforts!
          </Typography>
        </Grid>
      </Box>
      <Box className="section3">
        {/* <Grid
          maxWidth={"80%"}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ margin: "0 auto !important" }}
        >
          <Grid item md={3} sm={12}>
            {" "}
            <PlanCard />
          </Grid>
          <Grid item sm={12} md={3}>
            {" "}
            <PlanCard />
          </Grid>
          <Grid item sm={12} md={3}>
            {" "}
            <PlanCard />
          </Grid>
          <Grid item sm={12} md={3}>
            {" "}
            <PlanCard />
          </Grid>
        </Grid> */}
        <Crousel data={planCardData} Card={PlanCard} />
      </Box>
      <Box className="section4">
        <Grid
          maxWidth={"80%"}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center" // Center horizontally
          alignItems="center" // Center vertically
        >
          <Grid className="section4-left" item md={6} sm={12}>
            {" "}
            <Typography gutterBottom className="section4-left-heading">
              Seize this incredible <br />
              chance to launch your
              <br /> paid media ads today.
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              className="section4-left-subheading"
            >
              Let us handle your marketing and
              <br /> finance your ads for you!
            </Typography>
            <PrimaryButton content={"Apply for Ad Fund"} />
          </Grid>
          <Grid className="section4-right" item sm={12} md={6}>
            {" "}
            <img src={socialMediaImg} />
          </Grid>
        </Grid>
      </Box>
      <Box className="section5">
        <Box sx={{ margin: "0 auto", width: "80%" }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Meet Our CxO's
          </Typography>
          <Box></Box>
        </Box>
        <Box className="cxo-card">
          {isMobile ? null : (
            <Box sx={{ width: "90%", margin: "0 auto" }}>
              <CarouselSlick />
            </Box>
          )}
        </Box>
      </Box>
      {isMobile ? <Imagecarousel /> : null}

      <Box className="footer">
        <Footer />
      </Box>
      {/* <Box sx={{ width: "90%", margin: "0 auto", background: "#fefefe" }}>
        <CarouselSlick />
      </Box> */}
    </>
  );
}

export default App;
