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
    <div>
      <Box className="subcard-wrapper">
        <Box className="card-upper">
          <Box className="card-plan-upper-1">
            <Box className="card-upper-1_Planbox">
              <Typography
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "10px",
                  fontSize: { xs: "0.8rem", md: "0.9rem", lg: "0.9rem" },
                }}
                variant="body1"
              >
                {data.title}
              </Typography>
            </Box>
          </Box>
          <Box className="card-upper-2">
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: { md: "22px", lg: "26px", xs: "30px", sm: "28px" },
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
                <Typography variant="" sx={{ fontSize: "13px" }}>
                  {item}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default PlanCard;
