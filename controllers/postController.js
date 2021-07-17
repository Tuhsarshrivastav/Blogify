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
