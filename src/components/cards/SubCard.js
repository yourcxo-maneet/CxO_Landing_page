import "./card.css";
import { Box, Button, Divider, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
const SubCard = ({ data }) => {
  return (
    <Box className="card-wrapper">
      <Box className="card-upper">
        <Box className="card-upper-1">
          <img src={data.image} alt="" />
          <Box className="card-upper-1_box">
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: {
                  xs: "1.7rem", // Font size on mobile view
                },
              }}
              variant="h4"
            >
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
                color: "rgba(238, 169, 31, 1)",
              }}
            >
              <strong>$ {data.price}</strong>
            </Typography>
            <p style={{ fontSize: "18px", margin: "-5px 0" }}>per platform</p>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box className="card-lower_wrapper">
        {data.addOn ? (
          <p style={{ textAlign: "center", fontWeight: "700" }}>{data.addOn}</p>
        ) : null}

        {data.services.map((item) => (
          <Box className="card-lower">
            <Box className="card-lower_left">
              <CheckIcon style={{ color: "green" }} />
            </Box>
            <Box className="card-lower_right">{item}</Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ marginTop: "auto", alignSelf: "center" }}>
        {data.perPrice ? (
          <p className="add-on">
            Additional Platform @{" "}
            <span className="add-on-bold">${data.perPrice} </span>
          </p>
        ) : null}
      </Box>
    </Box>
  );
};

export default SubCard;
