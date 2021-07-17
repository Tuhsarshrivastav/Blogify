import Post from "./Post";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllPosts } from "../services/api";
const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllPosts();
      setPosts(data);
    };
    fetchData();
  }, []);
  return posts.map((post) => (
    <Grid item lg={3} sm={4} sx={12}>
      <Link to="/details" style={{ textDecoration: "none", color: "inherit" }}>
        <Post post={post} />
      </Link>
    </Grid>
  ));
};

export default Posts;
