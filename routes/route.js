import express from "express";
import {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";
import { uploadImage, getImage } from "../controllers/ImageController.js";
const router = express.Router();
import upload from "../utils/upload.js";

router.post("/create", createPost);
router.get("/posts", getAllPosts);
router.get("/post/:id", getPost);
router.post("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);
router.post("/file/upload", upload.single("file"), uploadImage);
router.get("/file/:filename", getImage);
export default router;
