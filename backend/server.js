import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectdb from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import appointmentRoutes from './routes/appointmentRoutes.js';
import cors from 'cors';  // Import cors

// Load environment variables
dotenv.config();

// Database connection
connectdb();

// Initialize express
const app = express();

// Enable CORS
app.use(cors());

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/v1/user', userRoutes);  // User routes
app.use('/api/v1', appointmentRoutes);  // Appointment routes

// Port configuration
const port = process.env.PORT || 5000;

// Start server
app.listen(port, () => {
  try {
    console.log(
      `Server is running in ${process.env.NODE_ENV || 'development'} mode on port ${port}`.yellow.bold
    );
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
});
