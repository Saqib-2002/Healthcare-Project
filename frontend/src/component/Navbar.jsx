import { useState } from "react";
import { NavLink } from "react-router";
const Navbar = () => {
  const data = ["Home", "Services", "Doctors", "Team", "Contact Us"];
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <nav className="">
      <NavTopBar />

      {/* Main Nav */}
      <div className="bg-gray-50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex justify-between">
            <button
              onClick={handleToggle}
              className={`mt-1 cursor-pointer text-lg duration-150 hover:scale-110 hover:text-yellow-500 md:hidden ${toggle ? "rotate-90" : "rotate-0"}`}
            >
              <i className={`fi fi-br-${toggle ? "cross" : "bars-sort"} `}></i>
            </button>
            <NavLink className="text-xl font-bold max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2 max-md:transform">
              HealthCare
            </NavLink>
          </div>
          <div className="flex flex-1 justify-center gap-x-8 max-md:hidden">
            {data.map((data, index) => {
              return (
                <NavLink
                  key={index}
                  className="text-center font-semibold transition-all hover:scale-105 hover:text-yellow-500"
                >
                  {data}
                </NavLink>
              );
            })}
          </div>
          <button className="text-1 rounded-md bg-yellow-300 px-8 py-4 text-sm font-semibold uppercase transition-all duration-300 ease-in-out hover:bg-yellow-400 max-sm:hidden">
            make appointment
          </button>
        </div>
      </div>
      {/* Sidebar */}
    </nav>
  );
};

const NavTopBar = () => {
  const data = [
    {
      title: "95 Brooklyn, New York 11213, US",
      icon: "marker",
    },
    {
      title: "help@thesmilespace.com",
      icon: "envelope",
    },
  ];
  const navRight = ["instagram", "linkedin", "facebook", "youtube"];

  return (
    <div className="bg-1 flex justify-between px-4 py-3 text-white max-md:hidden">
      <div className="flex gap-2">
        {data.map((data, index) => (
          <div key={index} className="pointer-events-none ml-4 flex gap-2">
            <i className={`fi fi-sr-${data.icon} h-4 w-4`}></i>
            <p className="text-sm">{data.title}</p>
          </div>
        ))}
      </div>
      <div>
        {navRight.map((data, index) => {
          return (
            <NavLink key={index} to="/">
              <i
                className={`fi fi-brands-${data} mx-2 transition-all duration-300 ease-in-out hover:text-zinc-300`}
              ></i>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
export default Navbar;
