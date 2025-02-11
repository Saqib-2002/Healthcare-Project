import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import dotenv from 'dotenv';

import connectdb from './config/db.js'


import userRoutes from './routes/userRoutes.js';  // Import the router

// Initialize dotenv to load environment variables
dotenv.config();

const port = process.env.PORT || 5000;  // Default to port 5000 if not defined in .env

connectdb();  

// Create Express app
const app = express();

// Middleware
app.use(morgan('dev'));  // Use morgan for logging HTTP requests
app.use(express.json());  // Parse incoming JSON requests

// Use routes
 app.use('/api/v1/user', userRoutes);  // Use the user routes for login and registration

// Start the server
app.listen(port, () => {
  console.log(`Server is running in ${process.env.NODE_ENV || 'development'} mode on port ${port}`.yellow.bold);  // Log environment mode
});
