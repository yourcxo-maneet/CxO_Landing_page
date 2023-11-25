import { Box, Typography } from "@mui/material";
import React from "react";
import "../../pages/pages.css";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const CookiePolicy = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`../cookies-policy`);
  };
  return (
    <>
      <NavBar />
      <Box sx={{ padding: "10px", backgroundColor: "#fffaf0" }}>
        <Typography variant="h2" gutterBottom sx={{ textAlign: "center" }}>
          Our Cookies Policy
        </Typography>
        <Typography variant="body1" gutterBottom marginTop={2}>
          <span className="bold-text">1. Introduction</span> <br />
          Welcome to Your CxO Online. This Cookies Policy explains what cookies
          are, how we use them, and your choices regarding cookies when you use
          our website.
        </Typography>
        <Typography variant="body1" gutterBottom marginTop={2}>
          <span className="bold-text">2. What Are Cookies?</span> <br />
          Cookies are small pieces of text sent by your web browser by a website
          you visit. A cookie file is stored in your web browser and allows the
          site or a third party to recognize you and make your next visit easier
          and more useful to you.
        </Typography>
        <Typography variant="body1" gutterBottom marginTop={2}>
          <span className="bold-text">3. How We Use Cookies</span>
          <br />
          We use cookies for the following purposes:
          <br />
          Essential Cookies: These cookies are necessary for the website to
          function properly. They enable core functionality such as security,
          network management, and accessibility. Analytics Cookies: We use
          analytics cookies to understand how visitors interact with our
          website, analyze data, and improve our services. Preference Cookies:
          These cookies enable our website to remember information that changes
          the way the site behaves or looks, such as your preferred language.
        </Typography>
        <Typography variant="body1" gutterBottom marginTop={2}>
          <span className="bold-text">4. Your Choices Regarding Cookies</span>
          <br />
          You can choose to set your browser to refuse all cookies or to
          indicate when a cookie is being sent. However, if you do not accept
          cookies, you may not be able to use some portions of our website.
        </Typography>
        <Typography variant="body1" gutterBottom marginTop={2}>
          <span className="bold-text">5. Third-Party Cookies</span> <br />
          In addition to our cookies, we may also use various third-party
          cookies to report usage statistics, deliver advertisements on and
          through the website, and so on.
        </Typography>
        <Typography variant="body1" gutterBottom marginTop={2}>
          <span className="bold-text">6. More Information</span> <br /> For more
          information about cookies, visit www.allaboutcookies.org.
        </Typography>
        <Typography variant="body1" gutterBottom marginTop={2}>
          <span className="bold-text">7. Changes to This Cookies Policy</span>
          <br />
          We may update our Cookies Policy from time to time. We will notify you
          of any changes by posting the new Cookies Policy on this page.
        </Typography>
        <Typography variant="body1" gutterBottom marginTop={2}>
          <span className="bold-text">8. Contact Us</span> <br /> If you have
          any questions or concerns about this Privacy Policy, please contact us
          at helpdesk@yourcxo.online
        </Typography>

        <p></p>
      </Box>
      <Box className="footer">
        <Footer />
      </Box>
    </>
  );
};

export default CookiePolicy;
