import express from "express";
import {
  getPosts,
  getPostBySearch,
  createPost,
  updatePost,
  likePost,
  deletePost,
} from "../controllers/postsController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/search", getPostBySearch);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.patch("/:id/likePost", auth, likePost);
router.delete("/:id", auth, deletePost);

export default router;
