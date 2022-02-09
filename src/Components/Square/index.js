import { Typography } from "@mui/material";
import React from "react";
// import CropSquareIcon from "@mui/icons-material/CropSquare";

function Square({ handleClick }) {
  return (
    <Typography variant="h1" align="center" onClick={handleClick}>
      X
    </Typography>
  );
}

export default Square;
