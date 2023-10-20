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
import heroImage from "../../assets/heroImage.svg";
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
  cxoCardData,
  planCardData,
  subCardData,
} from "../../data";
import Crousel from "../../components/crousel/Crousel";
import Imagecarousel from "../../components/testCrousel/ImageCarousel";
import CarouselSlick from "../../components/carousel-slick/CarouselSlick";
import { useEffect, useState } from "react";
function TTVfinal() {
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
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
                Are you looking for{" "}
                <span className="special-text"> Ad Funding ?</span>{" "}
              </Typography>

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
                content={"Get Your Ads Funded"}
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
          Your CMO’s Exclusive <br />
          Bespoke Subscriptions
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
          <Box
            sx={{
              marginTop: { md: "3rem", xs: "0px" },
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          ></Box>
          <Typography
            sx={{
              marginTop: "2rem",
              width: "100%",
              textAlign: { md: "right", xs: "center" },
              fontSize: { xs: "0.6rem", md: "0.8rem" },
              marginTop: { xs: "1rem", md: "24px" },
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
        </Grid>
      </Box>

      <Box className="section3">
        <Box className="section-3-top">
          <Box sx={{ flex: 3 }}>
            <Typography className="sub-heading">
              Do you want to start small ? No worries!
            </Typography>
            <Typography className="caption">
              Customize a plan that perfectly aligns with your unique
              requirements and budget. Connect with us today to turbocharge your
              marketing endeavors.
            </Typography>
          </Box>
          <Box>
            <button className="subCard-button" onClick={scrollToTop}>
              Meet Your CMO Today
            </button>
          </Box>
        </Box>
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
        <Crousel data={cmoPlanCardData} Card={PlanCard} />
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
            <Typography gutterBottom className="section4-left-subheading">
              Let us handle your marketing and
              <br /> finance your ads for you!
            </Typography>
            <button className="subCard-button" onClick={handleClickOpen}>
              Apply for Your CMO Ad Funding
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
                  {" "}
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
        </Box>
        <Box className="cxo-card">
          {isMobile ? null : (
            <Box sx={{ width: "90%", margin: "0 auto" }}>
              <CarouselSlick />
            </Box>
          )}
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
}

export default TTVfinal;
