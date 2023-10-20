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
import {
  cfoPlanCardData,
  cfoSubCardData,
  cmoPlanCardData,
  cxoCardData,
  planCardData,
  subCardData,
} from "../../data";
import Crousel from "../../components/crousel/Crousel";
import Imagecarousel from "../../components/testCrousel/ImageCarousel";
import CarouselSlick from "../../components/carousel-slick/CarouselSlick";
import { useEffect, useState } from "react";

const CFO = () => {
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
              <Typography className="heading">
                Meet <span className="special-text">Your CFO</span> Today
              </Typography>
              {/* <Typography className="heading">Today</Typography> */}
              <p className="sub-text">
                Navigate the complex financial landscape with confidence, backed
                by our CFO subscription services designed to drive fiscal
                growth.
              </p>
            </Box>
            <Box className="section1-buttons">
              <SolidButton
                content={"Meet Your CFO"}
                widget={
                  <iframe
                    width="100%"
                    height="750px"
                    src="https://zoho-karan12.zohobookings.in/portal-embed#/customer/meetyourcto"
                    frameborder="0"
                    allowfullscreen=""
                  >
                    {" "}
                  </iframe>
                }
              />
            </Box>
          </Grid>
          <Grid className="section1-right" item xs={12} md={6}>
            <Box className="image-wrapper">
              <iframe
                width="100%"
                height="693px"
                src="https://zoho-karan12.zohobookings.in/portal-embed#/customer/meetyourcfo"
                frameborder="0"
                allowfullscreen=""
              >
                {" "}
              </iframe>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="section2">
        <p className="heading">
          We deliver <span className="heading-special">Top-notch</span> digital{" "}
          <br />
          solutions tailored to your needs
        </p>
        <Grid
          maxWidth={"80%"}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {cfoSubCardData.map((data) => {
            return (
              <Grid item md={4} sm={12}>
                <SubCard data={data} />
              </Grid>
            );
          })}
          <Typography
            sx={{
              marginTop: "2rem",
              width: "100%",
              textAlign: "right",
              fontSize: { xs: "0.6rem", md: "0.8rem" },
              marginTop: { xs: "0px", md: "2.5rem" },
            }}
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
            Customize a plan that perfectly aligns with your unique requirements
            and budget. Connect with us today to turbocharge your marketing
            endeavors.
          </Typography>
        </Grid>
      </Box>
      <Box className="section3">
        <Crousel data={cfoPlanCardData} Card={PlanCard} />
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
};

export default CFO;
