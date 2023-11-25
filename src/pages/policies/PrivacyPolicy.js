import React from "react";
import "../../pages/pages.css";
import { Box, Typography } from "@mui/material";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`../privacy-policy`);
  };
  return (
    <>
      <NavBar />
      <Box sx={{ padding: "10px", backgroundColor: "#fffaf0" }}>
        <Typography variant="h2" gutterBottom sx={{ textAlign: "center" }}>
          Our Privacy Policy
        </Typography>
        <Typography variant="body1" gutterBottom marginTop={2}>
          <span className="bold-text">1. Introduction</span> <br />
          Welcome to Your CxO Online. We are committed to protecting your
          privacy and complying with applicable data protection and privacy
          laws. This Privacy Policy explains how we collect, use, disclose, and
          safeguard your personal information when you use our website,
          services, or interact with us.
        </Typography>
        <Typography variant="body1" gutterBottom marginTop={2}>
          <span className="bold-text">2. Information We Collect</span> <br />
          Personal Information: We may collect personal information, such as
          your name, email address, phone number, and other information you
          provide when you interact with our website, subscribe to our services,
          or communicate with us. Non-Personal Information: We may also collect
          non-personal information, such as browser type, language preference,
          referring site, and the date and time of each visitor request.
        </Typography>
        <Typography variant="body1" gutterBottom marginTop={2}>
          <span className="bold-text">3. How We Use Your Information</span>
          <br />
          Provide and Maintain Services: We use your personal information to
          provide, maintain, and improve our services, respond to your
          inquiries, and deliver relevant content. Communications: We may use
          your contact information to send you information about our services,
          updates, and promotional materials. You can opt-out of receiving
          marketing communications at any time.
          <br />
          Analytics: We use non-personal information for statistical analysis,
          trends, and website improvement. This information is anonymized and
          aggregated.
        </Typography>
        <Typography variant="body1" gutterBottom marginTop={2}>
          <span className="bold-text">4. How We Share Your Information</span>
          <br />
          Third-Party Service Providers: We may share your personal information
          with third-party service providers to assist us in providing and
          maintaining our services. Legal Compliance: We may disclose personal
          information if required to do so by law or in the good-faith belief
          that such action is necessary.
        </Typography>
        <Typography variant="body1" gutterBottom marginTop={2}>
          <span className="bold-text">5. Your Choices</span> <br />
          Opt-Out: You can opt-out of receiving marketing communications by
          following the instructions provided in each email. Access and Update:
          You may access and update your personal information by contacting us
          at helpdesk@yourcxo.online
        </Typography>
        <Typography variant="body1" gutterBottom marginTop={2}>
          <span className="bold-text">6. Security</span> <br /> We employ
          reasonable security measures to protect your information. However, no
          method of transmission over the internet or electronic storage is 100%
          secure.
        </Typography>
        <Typography variant="body1" gutterBottom marginTop={2}>
          <span className="bold-text">7. Changes to This Privacy Policy</span>
          <br />
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </Typography>
        <Typography variant="body1" gutterBottom marginTop={2}>
          <span className="bold-text">8. Contact Us</span> <br />
          If you have any questions or concerns about this Privacy Policy,
          please contact us at helpdesk@yourcxo.online
        </Typography>

        <p></p>
      </Box>
      <Box className="footer">
        <Footer />
      </Box>
    </>
  );
};

export default PrivacyPolicy;
