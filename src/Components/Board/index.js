import { Container, Grid } from "@mui/material";
import React from "react";
import Square from "../Square";
import { useState, useEffect } from "react";

const gridArr = [`1`, `2`, `3`, "4", "5", "6", "7", "8", "9"];

function Board() {
  const [grid, setGrid] = useState(gridArr);
  const [turn, setTurn] = useState(true);
  const [turnCount, setTurnCount] = useState(0);

  useEffect(() => {
    if (grid[0] === grid[1] && grid[0] === grid[2]) {
      alert("someone won while turn was set to " + turn);
    } else if (grid[3] === grid[4] && grid[3] === grid[5]) {
      alert("someone won while turn was set to " + turn);
    } else if (grid[6] === grid[7] && grid[6] === grid[8]) {
      alert("someone won while turn was set to " + turn);
    } else if (grid[0] === grid[3] && grid[0] === grid[6]) {
      alert("someone won while turn was set to " + turn);
    } else if (grid[1] === grid[4] && grid[1] === grid[7]) {
      alert("someone won while turn was set to " + turn);
    } else if (grid[2] === grid[5] && grid[2] === grid[8]) {
      alert("someone won while turn was set to " + turn);
    } else if (grid[6] === grid[4] && grid[6] === grid[2]) {
      alert("someone won while turn was set to " + turn);
    } else if (grid[0] === grid[4] && grid[0] === grid[8]) {
      alert("someone won while turn was set to " + turn);
    } else if (grid.includes()) {
      alert("DRAW");
    }
    if (turnCount === 9) {
      alert("Its a draw, please restart the game ");
    }
    setTurnCount(turnCount + 1);
  }, [grid]);

  function handleClick(square) {
    console.log("Square", square);
    if (turn) {
      setGrid([...grid.slice(0, square), "X", ...grid.slice(square + 1)]);
    } else {
      setGrid([...grid.slice(0, square), "O", ...grid.slice(square + 1)]);
    }
    console.log(grid);

    //check against bank of potential winning outcomes
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
