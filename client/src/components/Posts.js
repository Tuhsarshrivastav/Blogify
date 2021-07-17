import Post from "./Post";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const Posts = () => {
  let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return posts.map((post) => (
    <Grid item lg={3} sm={4} sx={12}>
      <Link to="/details" style={{ textDecoration: "none", color: "inherit" }}>
        <Post />
      </Link>
    </Grid>
  ));
};

export default Posts;
