import express from "express";
import { signin, signup, getUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/signin", signin);
router.post("/signup", signup);

export default router;
