import express from 'express';
import { loginController, registerController } from '../Controllers/userCtrl.js';

const router = express.Router();

// Login route
router.post('/login', loginController);

// Register route
router.post('/register', registerController);

export default router; // ✅ Export the router, not the controllers
