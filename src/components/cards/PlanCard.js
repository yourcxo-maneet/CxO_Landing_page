import { Box, Button, Divider, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "./card.css";
import icon from "../../assets/goOrganic.svg";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";

const PlanCard = ({ data }) => {
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
    <Box minWidth="210px" className="subcard-wrapper">
      <Box className="card-upper">
        <Box className="card-plan-upper-1">
          <Box className="card-upper-1_Planbox">
            <Typography sx={{ fontWeight: "bold" }} variant="body1">
              {data.title}
            </Typography>
          </Box>
        </Box>
        <Box className="card-upper-2">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: "500",
                color: "rgba(238, 169, 31, 1)",
              }}
            >
              $ {data.price}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography
        sx={{ fontWeight: "bold" }}
        variant="subtitle2"
        display="block"
      >
        Features
      </Typography>
      <Box className="">
        {data.features.map((item) => (
          <Box className="card-lower">
            <Box className="card-lower_left">
              <CheckIcon style={{ color: "green" }} />
            </Box>
            <Box className="card-lower_right">
              {" "}
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "11px" }}
                display="block"
              >
                {item}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Typography
        sx={{ marginTop: "2px" }}
        variant="caption"
        display="block"
        gutterBottom
      ></Typography>
    </Box>
  );
};

export default PlanCard;
