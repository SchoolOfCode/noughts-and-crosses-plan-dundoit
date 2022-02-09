import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Square from "../Square";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";

const gridArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
    let box = document.getElementById(square);
    box.style.color = "white";

    //check against bank of potential winning outcomes
    setTurn(!turn);
  }

  function handleResetClick() {
    // setGrid(gridArr);
    window.location.reload();
  }

  return (
    <Container maxWidth="xs">
      <Grid container sx={{ fontSize: "1rem" }}>
        {grid.map((item, index) => (
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              border: "1px solid white",
              justifyContent: "center",
              padding: "1em",
              color: "#28293E",
              cursor: "pointer",
              userSelect: "none",
            }}
            key={index}
            id={index}
          >
            <Square
              handleClick={() => handleClick(index)}
              // text={turn ? "X" : "O"}
              text={item}
            />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          width: "100%",
          // backgroundColor: "white",
          display: "flex",
          // alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="subtitle1" color="#fff">
          {turn ? "Player 1's move" : "Player 2's move"}
        </Typography>
        <Button
          variant="contained"
          onClick={handleResetClick}
          sx={{
            display: "flex",
            backgroundColor: "#EF6D58",
            alignSelf: "end",
          }}
        >
          Reset
        </Button>
      </Box>
    </Container>
  );
}

export default Board;
