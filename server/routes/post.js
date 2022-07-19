import express from "express";
const router = express.Router();

import { createPost, modifyPost, removePost } from "../controllers/postController.js";


router.get("/create", createPost)
router.get("/modify", modifyPost)
router.get("/remove", removePost)


export default router;