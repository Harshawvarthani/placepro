import express from "express";
import {
  getAllStudents,
  getAllApplications,
  updateStatus,
  deleteApplication,
} from "../controllers/adminController.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

router.get("/students", adminMiddleware, getAllStudents);
router.get("/applications", adminMiddleware, getAllApplications);
router.put("/applications/:id", adminMiddleware, updateStatus);
router.delete("/applications/:id", adminMiddleware, deleteApplication);

export default router;