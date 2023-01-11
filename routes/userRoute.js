import express from "express";
import {
  signin,
  signup,
  getUsers,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.patch("/:id", updateUser);
router.post("/signin", signin);
router.post("/signup", signup);

export default router;
