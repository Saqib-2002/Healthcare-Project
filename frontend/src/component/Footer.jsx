import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        "About Us",
        "Our Doctor",
        "Terms Of Service",
        "Privacy Policy",
        "Our Services",
        "Latest Blog",
      ],
    },
    {
      title: "Support",
      links: [
        "Online Support",
        "FAQ's",
        "Free Consultancy",
        "24/7 Service",
        "Make a Call",
        "Contact Support",
      ],
    },
    {
      title: "Opening Hours",
      links: [
        "Monday - 8:00 - 18:00",
        "Tuesday - 8:00 - 18:00",
        "Wednesday - 8:00 - 18:00",
        "Thursday - 8:00 - 18:00",
        "Friday - 8:00 - 18:00",
        "Saturday - 8:00 - 18:00",
        "Sunday - Closed",
      ],
    },
  ];

  const socials = [
    { name: "Instagram", icon: "fi fi-brands-instagram", link: "#" },
    { name: "LinkedIn", icon: "fi fi-brands-linkedin", link: "#" },
    { name: "Facebook", icon: "fi fi-brands-facebook", link: "#" },
    { name: "YouTube", icon: "fi fi-brands-youtube", link: "#" },
  ];

  const footEnd = ["Privacy Policy", "Terms of Services", "Support"];

  return (
    <div className="mt-12 bg-gray-100 px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-gray-900">HealthCare</h1>
          <p className="max-w-xs text-gray-700">
            We provide high-quality dental care with a strong commitment to
            patient health and well-being.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 transition-all duration-200 hover:text-[#00efdf] hover:scale-110"
                title={social.name}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        {footerLinks.map((section, index) => (
          <div key={index} className="space-y-6">
            <p className="text-xl font-semibold text-gray-900">{section.title}</p>
            <ul className="space-y-2">
              {section.links.map((link, index) => (
                <li key={index} className="text-gray-700 hover:text-[#00efdf] transition-all duration-200">
                  <i className="fi fi-rr-angle-small-right text-[#00efdf] mr-2"></i>
                  <Link to="/">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Bottom */}
      <div className="mt-12">
        <hr className="mb-6 border-gray-400" />
        <div className="flex flex-col md:flex-row justify-between text-sm text-gray-700">
          <p>&copy; 2025 HealthCare. All Rights Reserved.</p>
          <ul className="flex gap-6 mt-3 md:mt-0">
            {footEnd.map((item, index) => (
              <li key={index} className="hover:text-[#00efdf] transition-all duration-200">
                <Link to="/">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
