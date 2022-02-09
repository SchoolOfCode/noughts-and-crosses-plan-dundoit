import { Typography } from "@mui/material";
import React from "react";
// import CropSquareIcon from "@mui/icons-material/CropSquare";

function Square({ handleClick, text }) {
  return (
    <Typography variant="h1" align="center" onClick={handleClick}>
      {text}
    </Typography>
  );
}

export default Square;
