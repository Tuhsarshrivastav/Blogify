import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

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
        <Typography>Home</Typography>
        <Typography>About</Typography>
        <Typography>Contect</Typography>
        <Typography>Login</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
