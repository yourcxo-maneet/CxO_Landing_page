import { Box, Button, Divider, Typography } from "@mui/material";
import "./card.css";
import icon from "../../../assets/goOrganic.svg";
import CheckIcon from "@mui/icons-material/Check";

const PlanCard = ({ data }) => {
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
      <Typography variant="subtitle2" display="block">
        features
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
