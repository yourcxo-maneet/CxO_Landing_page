import { Box, Button, Grid, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "../../pages/pages.css";
import NavBar from "../../components/navBar/NavBar";
import heroImage from "../../assets/Calendar.svg";
import Banner from "../../assets/banner.svg";
import SolidButton from "../../components/buttons/SolidButton";
import OutlinedButton from "../../components/buttons/OutlinedButton";
import SubCard from "../../components/cards/SubCard";
import PlanCard from "../../components/cards/PlanCard";
import socialMediaImg from "../../assets/social-media.svg";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import CxoCard from "../../components/cards/CxoCard";
import Footer from "../../components/footer/Footer";
import {
  cmoPlanCardData,
  cmoSubCardData,
  cxoCardData,
  planCardData,
  subCardData,
} from "../../data";
import Crousel from "../../components/crousel/Crousel";
import Imagecarousel from "../../components/testCrousel/ImageCarousel";
import CarouselSlick from "../../components/carousel-slick/CarouselSlick";
import { useEffect, useState } from "react";

const CMO = () => {
  const item = [1, 2, 3, 4, 5, 6, 7, 87];
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

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
                Meet <span className="special-text">Your CMO</span>
              </Typography>
              {/* <Typography className="heading">Today</Typography> */}
              <p className="sub-text">
                Unlock the <span className="bold-text">full potential</span> of
                your <span className="bold-text"> marketing strategy </span>with
                <span className="bold-text"> our subscription services</span>,
                tailored to elevate your brand's reach and impact. Leverage Your
                CMO ad funding to elevate your brand
              </p>
            </Box>
            <Box className="section1-buttons">
              <SolidButton
                content={"Meet Your CMO For Ad Funding"}
                widget={
                  <iframe
                    frameborder="0"
                    style={{
                      height: "760px",
                      width: isMobile ? "100%" : "500px",
                      border: "none",
                    }}
                    src="https://forms.zohopublic.in/yourcxoonline/form/AdFundApplication/formperma/NA8G68NnhgfIRQZ4GHM7gf4p3d3s1BmxBB7gN4z7qqE"
                  ></iframe>
                }
              />
            </Box>
          </Grid>
          <Grid className="section1-right" item xs={12} md={6}>
            <Box className="image-wrapper">
              <iframe
                width="100%"
                height="555px"
                src="https://zoho-karan12.zohobookings.in/portal-embed#/customer/meetyourcmo"
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
          We Deliver Cutting-Edge{" "}
          <span className="heading-special text-bold">Digital Marketing</span>{" "}
          Solutions Tailored To Your Needs
        </p>
        <Grid
          maxWidth={"80%"}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {cmoSubCardData.map((data) => {
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
              fontWeight: "700",
              fontSize: { xs: "0.6rem", md: "0.8rem" },
              marginTop: { xs: "1rem", md: "1rem" },
            }}
            variant="caption"
            display="block"
            gutterBottom
          >
            *Funding applicable to Go Scale & Go Pro Subscriptions only
          </Typography>
          <Box className="subCard-button-wrapper">
            <button className="subCard-button" onClick={scrollToTop}>
              Meet Your CMO Today
            </button>
            <button
              className="subCard-buttonOutlined"
              onClick={handleClickOpen}
            >
              Apply For Your CMO Ad Funding
            </button>
          </Box>

          {/* 
          <Typography className="sub-heading">
            Not ready to dive into a full subscription? No worries!
          </Typography>
          <Typography className="caption">
            Customize a plan that perfectly aligns with your unique requirements
            and budget. Connect with us today to turbocharge your marketing
            endeavors.
          </Typography> */}
        </Grid>
      </Box>
      <Box className="section6">
        <Typography className="heading">
          Get Your Next 10 Clients for Free
        </Typography>
        <Typography className="sub-text">
          Get Approved for $300-$15,000 Advertising Budget Fast
        </Typography>
        <button className="subCard-button" onClick={handleClickOpen}>
          Apply for Ad Funding
        </button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title"></DialogTitle>
          <DialogContent>
            <DialogContentText>
              <iframe
                frameborder="0"
                style={{ height: "760px", width: "500px", border: "none" }}
                src="https://forms.zohopublic.in/yourcxoonline/form/AdFundApplication/formperma/NA8G68NnhgfIRQZ4GHM7gf4p3d3s1BmxBB7gN4z7qqE"
              ></iframe>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Box className="section3">
        <Box className="section-3-top">
          <Box sx={{ flex: 3 }}>
            <Typography className="sub-heading">
              Do you want to start small ? No worries!
            </Typography>
            <Typography className="caption">
              Customize a plan that directly aligns with your objectives,
              connect with us today.
            </Typography>
          </Box>
          <Box>
            <button className="subCard-button" onClick={scrollToTop}>
              Meet Your CMO Today
            </button>
          </Box>
        </Box>
        <Crousel data={cmoPlanCardData} Card={PlanCard} />
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
              <CarouselSlick />
            </Box>
          )}
          {/* <Box sx={{ width: "90%", margin: "0 auto" }}>
            <CarouselSlick />
          </Box> */}
        </Box>
        {isMobile ? <Imagecarousel /> : null}
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

export default CMO;