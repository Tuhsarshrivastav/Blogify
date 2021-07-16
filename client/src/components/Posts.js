import Post from "./Post";
import { Grid, Box } from "@material-ui/core";
const Posts = () => {
  let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return posts.map((post) => (
    <Grid item lg={3} sm={4} sx={12}>
      <Post />
    </Grid>
  ));
};

export default Posts;
