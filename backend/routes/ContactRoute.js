import express from "express";
import { submitContactForm } from "../Controllers/contactController.js";

const router = express.Router();

// Route: Submit contact form
router.post("/", submitContactForm);

export default router;
