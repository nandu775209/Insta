import express from "express";
import multer from "multer";
import cloudinary from "../config/cloudinary.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", protect, upload.single("image"), async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path);
  res.json({ imageUrl: result.secure_url });
});

export default router;
