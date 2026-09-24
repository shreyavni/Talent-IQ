import express from "express";
import { executeCode } from "../controllers/executeController.js";

const router = express.Router();

router.post("/", executeCode);

export default router;
