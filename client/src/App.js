import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { makeStyles, Box, Typography } from "@material-ui/core";

function App() {
  return (
    <d>
      <Navbar />
      <Box style={{ marginTop: "64px" }}>
        <Home />
      </Box>
    </d>
  );
}

export default App;
