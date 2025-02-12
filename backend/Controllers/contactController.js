import Contact from "../models/contactModel.js";

// @desc    Create a new contact message (allows duplicate entries)
// @route   POST /api/contact
// @access  Public
export const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Create a new contact entry without checking for duplicates
    const contact = new Contact({ name, email, message });
    await contact.save();

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
