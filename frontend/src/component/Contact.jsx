import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [showModal, setShowModal] = useState(false); // Modal state

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Reset form
        setShowModal(true); // Show success modal
      } else {
        setStatus("error");
        setShowModal(true); // Show error modal
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setShowModal(true);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Contact Form */}
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
              placeholder="John Doe" 
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
              placeholder="email@example.com" 
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
              rows="4" 
              placeholder="Write your message here..." 
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>

          {status === "loading" && <p className="text-blue-600 mt-2">Sending...</p>}
        </form>

        {/* Right Section - Contact Details */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-blue-600 text-2xl" />
            <p className="text-gray-700">123 Health Street, New York, NY 10001</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-green-600 text-2xl" />
            <p className="text-gray-700">+1 234 567 890</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-red-600 text-2xl" />
            <p className="text-gray-700">contact@healthcare.com</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-4">
            <a href="#" className="text-blue-600 text-2xl hover:text-blue-800"><FaFacebook /></a>
            <a href="#" className="text-blue-400 text-2xl hover:text-blue-600"><FaTwitter /></a>
            <a href="#" className="text-pink-600 text-2xl hover:text-pink-800"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* MODAL FOR SUCCESS/ERROR MESSAGE */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
            <h3 className={`text-lg font-bold ${status === "success" ? "text-green-600" : "text-red-600"}`}>
              {status === "success" ? "Message Sent Successfully!" : "Error Sending Message"}
            </h3>
            <p className="text-gray-700 mt-2">
              {status === "success"
                ? "We have received your message and will get back to you soon."
                : "There was an issue sending your message. Please try again later."}
            </p>
            <button 
              onClick={() => setShowModal(false)} 
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
