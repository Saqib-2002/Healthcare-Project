import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
  },
  message: {
    type: String,
    required: [true, "Please enter your message"],
  },
});

// ✅ Correct model declaration and export
const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
