import express from "express";
import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  loginUser,
  updateUser,
} from "../controllers/UserControllers.js";

const router = express.Router();

router.route("/").post(addUser);
router.route("/:role").get(getUsers);
router.route("/login").post(loginUser);
router.route("/one/:id").get(getUser).patch(updateUser).delete(deleteUser);

export default router;
