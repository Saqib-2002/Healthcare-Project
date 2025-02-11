// routes/appointmentRoutes.js
import express from "express";
import { bookAppointment, getAppointments } from "../Controllers/appointmentController.js";


const router = express.Router();

router.post("/appointments/book", bookAppointment);

// GET route for fetching all appointments (if needed)
router.get("/appointments/all", getAppointments);

export default router;