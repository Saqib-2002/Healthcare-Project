import React from 'react';
import image from '../images/rounded_rectangle_12.png';

const About = () => {
  return (
    <div className="about-brand bg-white py-16 px-6"> {/* Increased top padding */}
      {/* About Us Section */}
      <div className="about-us flex flex-col md:flex-row items-center justify-between gap-6 mt-12">
        {/* Left Column - About Text */}
        <div className="first-col w-full md:w-1/3 text-center md:text-left">
          <p className="text-teal-500 font-semibold text-sm">ABOUT US</p>
          <h2 className="text-3xl font-bold leading-snug mt-1">
            Clinic That <br /> Prioritizes Your <br /> Satisfaction
          </h2>
        </div>

        {/* Middle Column - Image */}
        <div className="middle-col w-full md:w-1/3 flex justify-center">
          <img 
            className="w-60 h-60 md:w-72 md:h-72 rounded-lg shadow-lg object-cover" 
            src={image} 
            alt="Clinic" 
          />
        </div>

        {/* Right Column - Experience Box */}
        <div className="last-col w-full md:w-1/3 bg-green-100 p-6 rounded-lg shadow-md text-center md:text-left">
          <p className="text-4xl font-bold text-green-600">17+</p>
          <p className="text-lg font-semibold">Years Experience</p>
          <p className="text-gray-700 font-medium">Customer Satisfaction number on</p>
          <p className="text-gray-500 mt-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="mt-4">
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-600 text-sm">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Achievements Section - Pushed Down More */}
      <div className="our-award bg-gray-100 mt-20 p-6 rounded-lg shadow-lg">
        <p className="text-teal-500 font-semibold text-sm">AWARDS</p>
        <h3 className="text-2xl font-bold">Our Achievements</h3>
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-center">
          <div>
            <p className="text-3xl font-bold">210K</p>
            <p className="text-gray-600 text-sm">Patient Done</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-teal-500">99%</p>
            <p className="text-gray-600 text-sm">Customer Satisfied</p>
          </div>
          <div>
            <p className="text-3xl font-bold">17+</p>
            <p className="text-gray-600 text-sm">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-teal-500">84</p>
            <p className="text-gray-600 text-sm">Doctor and Staff</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
