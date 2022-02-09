import { Container, Grid } from "@mui/material";
import React from "react";
import Square from "../Square";

const gridArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Board() {
  return (
    <Container maxWidth="md">
      <Grid container>
        {gridArr.map((item) => (
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              border: "1px solid black",
              justifyContent: "center",
            }}
          >
            <Square />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Board;
