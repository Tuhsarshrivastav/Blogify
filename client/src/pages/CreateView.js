import {
  Box,
  makeStyles,
  TextareaAutosize,
  Button,
  FormControl,
  InputBase,
} from "@material-ui/core";
import { AddCircle as Add } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { createPost, uploadFile } from "../services/api";
import { useHistory } from "react-router-dom";
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
  title: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  textfield: {
    flex: 1,
    margin: "0 30px",
    fontSize: 25,
  },
  textarea: {
    width: "100%",
    border: "none",
    marginTop: 50,
    fontSize: 18,
    "&:focus-visible": {
      outline: "none",
    },
  },
}));
const initialValues = {
  title: "",
  description: "",
  picture: "",
  username: "Tushar",
  categories: "all",
  createdDate: new Date(),
};
const CreateView = () => {
  const history = useHistory();
  const classes = useStyle();
  const [post, setPost] = useState(initialValues);
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");

  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const image = await uploadFile(data);
        post.picture = image.data;
        setImage(image.data);
      }
    };
    getImage();
  }, [file]);
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const savePost = async () => {
    await createPost(post);
    history.push("/");
  };
  return (
    <Box className={classes.container}>
      <img src={url} alt="post" className={classes.image} />
      <FormControl className={classes.title}>
        <label htmlFor="fileInput">
          <Add className={classes.addIcon} fontSize="large" color="action" />
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none", cursor: "pointer" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <InputBase
          onChange={(e) => handleChange(e)}
          name="title"
          placeholder="Title"
          className={classes.textfield}
        />
        <Button onClick={() => savePost()} variant="contained" color="primary">
          Publish
        </Button>
      </FormControl>

      <TextareaAutosize
        rowsMin={5}
        placeholder="Tell your story..."
        className={classes.textarea}
        name="description"
        onChange={(e) => handleChange(e)}
      />
    </Box>
  );
};

export default CreateView;
