import { Box, Button, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import "./card.css";

const CxoCard = ({ data }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box className="cxoCard-wrapper">
      <Box
        className="cxoCard-image"
        style={{
          backgroundImage: `url(${data.image})`,
        }}
      ></Box>
      <Box className="cxoCard-content">
        <Typography className="cxoCard-content-heading" variant="h4">
          Your {data.title}
        </Typography>
        <Typography
          className="cxoCard-content-subheading"
          variant="body1"
          gutterBottom
        >
          {data.description}
        </Typography>
        <Button variant="outlined" className="button" onClick={handleClickOpen}>
          Meet Your {data.title}
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title"></DialogTitle>
          <DialogContent>
            <DialogContentText>{data.widget}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default CxoCard;
