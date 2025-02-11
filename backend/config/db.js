
import mongoose from 'mongoose';
import colors from 'colors';

// MongoDB connection function
const connectdb = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.DB_URL);

    console.log('MongoDB connected'.green.bold); // Log success
  } catch (error) {
    // Log error if connection fails
    console.log(`MongoDB connection error: ${error}`.red.bold);
  }
}

export default connectdb;
