import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Alert from "./Alert";
import AlertDescription from "./AlertDescription";
import AlertTitle from "./AlertTitle";
import { X } from "lucide-react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
      setShowAlert(true);
      
      // Auto-hide alert after 5 seconds
      setTimeout(() => {
        setShowAlert(false);
        setStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setShowAlert(true);
      
      setTimeout(() => {
        setShowAlert(false);
        setStatus(null);
      }, 5000);
    }
  };

  return (
    <div className="container mx-auto p-6 relative">
      {/* Alert Popup */}
      {showAlert && (
        <div className="fixed top-4 right-4 w-96 z-50">
          <Alert className={`${
            status === "success" ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
          } relative`}>
            <div className="absolute right-2 top-2">
              <button
                onClick={() => setShowAlert(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={16} />
              </button>
            </div>
            <AlertTitle className={status === "success" ? "text-green-800" : "text-red-800"}>
              {status === "success" ? "Success!" : "Error!"}
            </AlertTitle>
            <AlertDescription className={status === "success" ? "text-green-700" : "text-red-700"}>
              {status === "success"
                ? "Your message has been sent successfully. We'll get back to you soon!"
                : "There was an error sending your message. Please try again later."}
            </AlertDescription>
          </Alert>
        </div>
      )}

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
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
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
    </div>
  );
};

export default Contact;