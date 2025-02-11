import userModel from "../Model/userModels.js"; // Import user model
import bcrypt from "bcryptjs";  // Import bcrypt for password hashing

// Register Controller
const registerController = async (req, res) => {
  try {
    // Check if user already exists
    const existingUser = await userModel.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new user
    const newUser = new userModel({ ...req.body, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ success: false, message: `Registration failed: ${error.message}` });
  }
};

// Login Controller (To be implemented)
const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if user exists
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      // Compare hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ success: false, message: "Invalid credentials" });
      }
  
      // Generate JWT Token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
  
      res.status(200).json({
        success: true,
        message: "Login successful",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      console.error("Login Error:", error);
      res.status(500).json({ success: false, message: "Login failed" });
    }
  };
  

export { loginController, registerController }; // ✅ Correct export
