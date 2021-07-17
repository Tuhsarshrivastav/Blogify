import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  component: {
    background: "#FFFFFF",
    color: "black",
  },
  container: {
    justifyContent: "center",
    "&  >*": {
      padding: 20,
      color: "black",
      textDecoration: "none",
      cursor: "pointer",
    },
  },
});
const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.component}>
      <Toolbar className={classes.container}>
        <Link to="/">
          <Typography>Home</Typography>
        </Link>
        <Typography>About</Typography>
        <Typography>Contect</Typography>
        <Typography>Login</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
