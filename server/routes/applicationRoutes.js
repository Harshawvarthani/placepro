import express from "express";
import { applyJob, getMyApplications } from "../controllers/applicationController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, applyJob);
router.get("/", authMiddleware, getMyApplications);

export default router;