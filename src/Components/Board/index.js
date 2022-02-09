import { Container, Grid } from "@mui/material";
import React from "react";
import Square from "../Square";
import { useState } from "react";

const gridArr = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

function Board() {
  const [grid, setGrid] = useState(gridArr);
  const [turn, setTurn] = useState(true);

  function handleClick(square) {
    console.log("Square", square);
    if (turn) {
      setGrid([...grid.slice(0, square), "X", ...grid.slice(square + 1)]);
    } else {
      setGrid([...grid.slice(0, square), "O", ...grid.slice(square + 1)]);
    }

    setTurn(!turn);
  }

  return (
    <Container maxWidth="md">
      <Grid container>
        {grid.map((item, index) => (
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
            <Square
              handleClick={() => handleClick(index)}
              // text={turn ? "X" : "O"}
              text={item}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Board;
