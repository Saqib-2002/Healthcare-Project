import React from 'react';
import { FaUser, FaCalendarAlt, FaEnvelope, FaPhone, FaBuilding } from 'react-icons/fa';

function Appointment() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Book an Appointment</h2>
        <form className="space-y-6">
          {/* Name Field */}
          <div className="flex items-center border-b-2 border-blue-200 py-2">
            <FaUser className="text-blue-500 mr-3 text-xl" />
            <input
              type="text"
              placeholder="Your Name"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Date Field */}
          <div className="flex items-center border-b-2 border-blue-200 py-2">
            <FaCalendarAlt className="text-blue-500 mr-3 text-xl" />
            <input
              type="date"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Father's Name Field */}
          <div className="flex items-center border-b-2 border-blue-200 py-2">
            <FaUser className="text-blue-500 mr-3 text-xl" />
            <input
              type="text"
              placeholder="Father's Name"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center border-b-2 border-blue-200 py-2">
            <FaEnvelope className="text-blue-500 mr-3 text-xl" />
            <input
              type="email"
              placeholder="Your Email"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mobile Field */}
          <div className="flex items-center border-b-2 border-blue-200 py-2">
            <FaPhone className="text-blue-500 mr-3 text-xl" />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Department Field */}
          <div className="flex items-center border-b-2 border-blue-200 py-2">
            <FaBuilding className="text-blue-500 mr-3 text-xl" />
            <select className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select Department</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="orthopedics">Orthopedics</option>
              <option value="pediatrics">Pediatrics</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center mt-8">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Appointment;