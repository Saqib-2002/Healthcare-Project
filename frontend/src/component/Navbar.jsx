import { Link } from "react-router";
const Navbar = () => {
  return (
    <div className="flex flex-col">
          <NavTopBar />
    </div>
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
            <Link key={index} to="/">
              <i
                className={`fi fi-brands-${data} mx-2 transition-all duration-300 ease-in-out hover:text-zinc-300`}
              ></i>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Navbar;
