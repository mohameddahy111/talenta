import express from "express";
import {auth} from "../middleware/auth.js";
import {uploading} from "../middleware/uploading.js";
import { addProject } from "./projects.controllrt.js";
const router = express.Router();
router.post(
  "/",
  auth,
  uploading().fields([
    {name: "logo", maxCount: 1},
    {name: "web_min_img", maxCount: 1},
    {name: "web_images", maxCount: 10},
    {name: "mobile_min", maxCount: 1},
    {name: "mobile_iamges", maxCount: 10}
  ]),
    addProject
);
export default router;
