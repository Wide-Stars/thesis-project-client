import express from "express";
const router = express.Router();

import { createUser, modifyUser, removeUser } from "../controllers/userController.js";

router.get("/create", createUser)
router.get("/modify", modifyUser)
router.get("/remove", removeUser)


export default router;