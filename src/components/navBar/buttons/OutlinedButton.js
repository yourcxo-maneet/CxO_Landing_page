import { Box, Popper } from "@mui/material";
import "./buttons.css";
import { useState } from "react";
const OutlinedButton = ({ content }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  return (
    <>
      <button
        className="outlinedButton"
        aria-describedby={id}
        type="button"
        onClick={handleClick}
      >
        {content}
      </button>

      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
          <iframe
            width="100%"
            height="350px"
            src="https://zoho-karan12.zohobookings.in/portal-embed#/customer/115705000000517028"
            frameborder="0"
            allowfullscreen=""
          >
            {" "}
          </iframe>
        </Box>
      </Popper>
    </>
  );
};

export default OutlinedButton;
