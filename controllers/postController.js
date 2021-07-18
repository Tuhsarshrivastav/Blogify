import Post from "../models/post.js";
export const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body);
    post.save();
    res
      .status(200)
      .json({ status: true, message: "Successfully Blog created" });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "error while createBlog request" });
  }
};
export const getAllPosts = async (req, res) => {
  let username = req.query.username;
  let category = req.query.category;
  let posts;
  try {
    if (username) posts = await Post.find({ username: username });
    else if (category) posts = await Post.find({ categories: category });
    else posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "error while fetching blog request" });
  }
};
export const getPost = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "error while fetching a  singal blog request",
    });
  }
};
export const updatePost = async (req, res) => {
  try {
    let post = await Post.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "error while updating  a  singal blog request",
    });
  }
};
export const deletePost = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    await post.delete();
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "error while updating  a  singal blog request",
    });
  }
};

