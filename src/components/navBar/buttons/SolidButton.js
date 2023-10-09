import "./buttons.css";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import { useState } from "react";

const SolidButton = ({ content }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  return (
    <>
      <button
        className="solidbutton"
        aria-describedby={id}
        type="button"
        onClick={handleClick}
      >
        {content}
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
          <iframe
            frameborder="0"
            style={{ height: "500px", width: "99%", border: "none" }}
            src="https://forms.zohopublic.in/yourcxoonline/form/AdFundApplication/formperma/NA8G68NnhgfIRQZ4GHM7gf4p3d3s1BmxBB7gN4z7qqE"
          ></iframe>
        </Box>
      </Popper>
    </>
  );
};

export default SolidButton;
