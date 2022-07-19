import express from "express";
const router = express.Router();

import { createUser, modifyUser, removeUser, loginUser, verifyToken } from "../controllers/userController.js";

router.post("/create", createUser)
router.put("/modify", modifyUser)
router.delete("/remove/:id", verifyToken, removeUser)
router.get("/login", loginUser)



export default router;