import express from "express";

import { getData } from "../controllers/complaints.controller.js";

const router = express.Router();

// router.post("/", addComplaint);
router.get("/", getData);

export default router;
