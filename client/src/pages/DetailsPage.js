import { Box, makeStyles, Typography, Grid } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getPost, deleteBlog } from "../services/api";
const useStyle = makeStyles((theme) => ({
  container: {
    margin: "50px 100px",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
  },
  icons: {
    float: "right",
  },
  icon: {
    margin: 5,
    padding: 5,
    border: "1px solid #878787",
    borderRadius: 10,
  },
  heading: {
    fontSize: 38,
    fontWeight: 600,
    textAlign: "center",
    margin: "50px 0 10px 0",
  },
  author: {
    color: "#878787",
    display: "flex",
    margin: "20px 0",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));
const DetailsPage = ({ match, history }) => {
  const classes = useStyle();
  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  const [post, setPost] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      let data = await getPost(match.params.id);
      setPost(data);
    };
    fetchData();
  }, [match]);

  const deletePost = async () => {
    await deleteBlog(post._id);
    history.push("/");
  };
  return (
    <Box className={classes.container}>
      <img className={classes.image} src={post.picture || url} alt="cover" />
      <Box className={classes.icons}>
        <Link to={`/update/${post._id}`}>
          <Edit className={classes.icon} color="primary" />
        </Link>
        <Delete
          onClick={() => deletePost()}
          className={classes.icon}
          color="error"
        />
      </Box>
      <Typography className={classes.heading}>{post.title}</Typography>
      <Box className={classes.author}>
        <Link className={classes.link} to={`/?username${post.username}`}>
          <Typography>
            Author: {post.username}
            <span style={{ fontWeight: "600" }}>Tushar</span>
          </Typography>
        </Link>
        <Typography style={{ marginLeft: "auto" }}>
          {new Date(post.createdDate).toDateString()}
        </Typography>
      </Box>
      <Typography>{post.description}</Typography>
    </Box>
  );
};

export default DetailsPage;
