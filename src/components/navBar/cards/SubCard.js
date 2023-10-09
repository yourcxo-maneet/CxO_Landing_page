import { Box, Button, Divider, Typography } from "@mui/material";
import "./card.css";
import CheckIcon from "@mui/icons-material/Check";
const SubCard = ({ data }) => {
  return (
    <Box className="card-wrapper">
      <Box className="card-upper">
        <Box className="card-upper-1">
          <img src={data.img} alt="" />
          <Box className="card-upper-1_box">
            <Typography sx={{ fontWeight: "bold" }} variant="h4">
              {data.heading}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontSize: "1rem" }}>
              min {data.min} months
            </Typography>
          </Box>
        </Box>
        <Box className="card-upper-2">
          <img src="/images/sub_1.png" alt="" />
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: "44px",
                fontWeight: "bolder",
                color: "rgba(238, 169, 31, 1)",
              }}
            >
              $ {data.price}
            </Typography>
            <p style={{ fontSize: "18px", margin: "-5px 0" }}>per platform</p>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box className="card-lower_wrapper">
        {data.services.map((item) => (
          <Box className="card-lower">
            <Box className="card-lower_left">
              <CheckIcon style={{ color: "green" }} />
            </Box>
            <Box className="card-lower_right">{item}</Box>
          </Box>
        ))}
        <Typography sx={{ margin: "0.5rem 2rem" }}>
          <strong>+${data.perPrice}</strong> per platform
        </Typography>
      </Box>
      <Button className="sub-button">Meet Your CMO</Button>
    </Box>
  );
};

export default SubCard;
