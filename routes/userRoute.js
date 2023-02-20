import express from "express";
import {
  signin,
  signup,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.patch("/:id", updateUser);
router.post("/signin", signin);
router.post("/signup", signup);
router.delete("/:id", deleteUser);

export default router;
