import Post from "./Post";
import { Grid } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllPosts } from "../services/api";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllPosts(search);
      setPosts(data);
    };
    fetchData();
  }, [search]);
  return posts?.map((post) => (
    <Grid item lg={3} sm={4} sx={12}>
      <Link
        to={`/details/${post._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Post post={post} />
      </Link>
    </Grid>
  ));
};

export default Posts;
