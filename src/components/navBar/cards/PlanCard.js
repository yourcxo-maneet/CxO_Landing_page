import { Box, Button, Divider, Typography } from "@mui/material";
import "./card.css";
import icon from "../../../assets/goOrganic.svg";
import CheckIcon from "@mui/icons-material/Check";

const PlanCard = () => {
  return (
    <Box maxWidth="210px" className="subcard-wrapper">
      <Box className="card-upper">
        <Box className="card-plan-upper-1">
          <Box className="card-upper-1_Planbox">
            <Typography sx={{ fontWeight: "bold" }} variant="body1">
              Woocommerce Website
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
              $ 1000
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography variant="subtitle2" display="block">
        features
      </Typography>
      <Box className="">
        <Box className="card-lower">
          <Box className="card-lower_left">
            <CheckIcon style={{ color: "green" }} />
          </Box>
          <Box className="card-lower_right">Basic GTM Strategy</Box>
        </Box>
        <Box className="card-lower">
          <Box className="card-lower_left">
            <CheckIcon style={{ color: "green" }} />
          </Box>
          <Box className="card-lower_right">
            Digital Marketing Campaign Plan{" "}
          </Box>
        </Box>
      </Box>
      <Button className="sub-button">Buy Now</Button>
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
