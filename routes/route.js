import express from "express";
import {createPost,getAllPosts} from '../controllers/postController.js'
const router = express.Router();

router.post("/create",createPost);
router.get('/posts',getAllPosts)

export default router;
