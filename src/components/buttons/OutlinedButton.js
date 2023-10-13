import "./buttons.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
const OutlinedButton = ({ content }) => {
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
    <>
      <button
        className="outlinedButton"
        type="button"
        onClick={handleClickOpen}
      >
        {content}
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
              width="100%"
              height="400px"
              src="https://zoho-karan12.zohobookings.in/portal-embed#/customer/115705000000517028"
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default OutlinedButton;

{
  /* <iframe
  width="100%"
  height="350px"
  src="https://zoho-karan12.zohobookings.in/portal-embed#/customer/115705000000517028"
  frameborder="0"
  allowfullscreen=""
></iframe>; */
}
