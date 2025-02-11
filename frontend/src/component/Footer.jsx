import { Link } from "react-router";

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
        "Sunday - closed",
      ],
    },
  ];
  const socials = ["instagram", "linkedin", "facebook", "youtube"];
  const footEnd = ["Privacy Policy", "Terms of Services", "Support"];
  return (
    <div className="mt-12 bg-gray-50 px-6 py-12">
      <div className="grid grid-cols-4 gap-6">
        <div className="mt-12 space-y-8">
          <h1 className="text-xl font-bold max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2 max-md:transform">
            HealthCare
          </h1>
          <p className="max-w-60 font-medium text-zinc-700">
            We are many variations of passages available but the majority have
            suffered alteration in some form by injected humour or randomised
            words.
          </p>
          <ul className="flex">
            {socials.map((link, index) => {
              return (
                <li
                  key={index}
                  className="mx-4 text-xl transition-all duration-150 ease-in-out hover:scale-110 hover:text-zinc-700"
                >
                  <Link to="/" className="">
                    <i className={`fi fi-brands-${link} `}></i>
                  </Link>{" "}
                </li>
              );
            })}
          </ul>
        </div>

        {footerLinks.map((data, index) => {
          return (
            <div key={index} className="space-y-8">
              <p className="text-xl font-bold">{data.title}</p>
              <ul className="space-y-2">
                {data.links.map((data, index) => {
                  return (
                    <li key={index} className="text-md">
                      <i className="fi fi-rr-angle-small-right relative top-1"></i>
                      <Link
                        to="/"
                        className="transition-all duration-150 ease-in-out hover:pl-2"
                      >
                        {data}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      {/* footEnd */}
      <div className="mt-12">
        <hr className="mb-6 text-zinc-400" />
        <div className="flex justify-between text-xs font-medium text-zinc-700">
          <p className="pl-2">
            &copy;Copyright 2025 HealthCare All Right Reserved.
          </p>
          <ul className="flex gap-8">
            {footEnd.map((link, index) => (
              <li key={index} className="hover:text-zinc-900">
                <Link to="/">{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
