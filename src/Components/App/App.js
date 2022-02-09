import "./App.css";
import Board from "../Board";
import { Container } from "@mui/material";

function App() {
  return (
    <Container
      maxWidth="none"
      sx={{ height: "100vh", backgroundColor: "#28293E" }}
    >
      <Board />
    </Container>
  );
}

export default App;
