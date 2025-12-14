import express from "express";
import { createPost, likePost, getFeed } from "../controllers/postController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/", protect, createPost);
router.post("/:id/like", protect, likePost);
router.get("/feed", protect, getFeed);

export default router;
