// controllers/appointmentController.js
import Appointment from "../models/appointmentModel.js";

// export const bookAppointment = async (req, res) => {
//   try {
//     const { name, date, fatherName, email, mobile, department } = req.body;

//     if (!name || !date || !fatherName || !email || !mobile || !department) {
//       return res.status(400).json({ success: false, message: "All fields are required" });
//     }

//     const newAppointment = new Appointment({ name, date, fatherName, email, mobile, department });
//     await newAppointment.save();

//     res.status(201).json({ success: true, message: "Appointment booked successfully!" });
//   } catch (error) {
//     console.error("Error booking appointment:", error);
//     res.status(500).json({ success: false, message: "Server error, please try again" });
//   }
// };

export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json({ success: true, appointments });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ success: false, message: "Failed to fetch appointments" });
  }
};
// controllers/appointmentController.js
export const bookAppointment = async (req, res) => {
  try {
    const { name, date, fatherName, email, mobile, department } = req.body;

    if (!name || !date || !fatherName || !email || !mobile || !department) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const newAppointment = new Appointment({
      name,
      date,
      fatherName,
      email,
      mobile,
      department
    });

    await newAppointment.save();
    console.log('Appointment saved:', newAppointment); // Add this for debugging

    res.status(201).json({
      success: true,
      message: "Appointment booked successfully!"
    });
  } catch (error) {
    console.error("Error booking appointment:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Server error, please try again"
    });
  }
};