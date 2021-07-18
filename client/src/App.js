import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Box } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";
import CreateView from "./pages/CreateView";
import UpdateView from "./pages/UpdateView";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Box style={{ marginTop: "64px" }}>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={DetailsPage} />
          <Route exact path="/create" component={CreateView} />
          <Route exact path="/update/:id" component={UpdateView} />
        </Box>
      </Switch>
    </>
  );
}

export default App;
