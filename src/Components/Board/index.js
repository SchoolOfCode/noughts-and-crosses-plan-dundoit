import { Container, Grid } from "@mui/material";
import React from "react";
import Square from "../Square";

const gridArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Board() {
  function handleClick(square) {
    console.log("Square", square);
  }
  return (
    <Container maxWidth="md">
      <Grid container>
        {gridArr.map((item, index) => (
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              border: "1px solid black",
              justifyContent: "center",
            }}
            key={index}
            id={item}
          >
            <Square handleClick={() => handleClick(item)} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Board;
