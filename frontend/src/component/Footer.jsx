export default function Footer() {
  return (
    <footer className="bg-gray-100 p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-gray-800">
        
        {/* HealthCare Section */}
        <div>
          <h3 className="text-xl font-semibold">HealthCare</h3>
          <p className="mt-2 text-sm">
            We provide high-quality dental care with a strong commitment to patient health and well-being.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#"><i className="fab fa-instagram text-xl"></i></a>
            <a href="#"><i className="fab fa-linkedin text-xl"></i></a>
            <a href="#"><i className="fab fa-facebook text-xl"></i></a>
            <a href="#"><i className="fab fa-youtube text-xl"></i></a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500">Our Doctor</a></li>
            <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-500">Our Services</a></li>
            <li><a href="#" className="hover:text-blue-500">Latest Blog</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-xl font-semibold">Support</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-500">Online Support</a></li>
            <li><a href="#" className="hover:text-blue-500">FAQs</a></li>
            <li><a href="#" className="hover:text-blue-500">Free Consultancy</a></li>
            <li><a href="#" className="hover:text-blue-500">24/7 Service</a></li>
            <li><a href="#" className="hover:text-blue-500">Make a Call</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact Support</a></li>
          </ul>
        </div>

        {/* Opening Hours Section */}
        <div>
          <h3 className="text-xl font-semibold">Opening Hours</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Monday - 8:00 - 18:00</li>
            <li>Tuesday - 8:00 - 18:00</li>
            <li>Wednesday - 8:00 - 18:00</li>
            <li>Thursday - 8:00 - 18:00</li>
            <li>Friday - 8:00 - 18:00</li>
            <li>Saturday - 8:00 - 18:00</li>
            <li>Sunday - Closed</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
