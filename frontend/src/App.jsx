import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Appointment from "./component/Appointement"; 
import Success from "./pages/Sucess"; 
import Hero from "./component/Hero";
import About from "./pages/About"; 
import Services from "./pages/Services"; // Only one import for Services
import Contact from "./component/Contact";
import DoctorTeam from "./pages/DoctorTeam";

// ✅ Root Layout (Navbar & Footer always visible)
const RootElement = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow"> {/* Ensures content pushes footer down */}
        <Outlet /> {/* Page content will render here */}
      </div>
      <Footer />
    </div>
  );
};

// ✅ 404 Page Component
const NotFound = () => (
  <div className="text-center mt-20">
    <h1 className="text-3xl font-bold">404 Error - Page Not Found</h1>
    <p className="text-lg text-gray-600 mt-2">The page you're looking for doesn't exist.</p>
  </div>
);

// ✅ Router setup (Navbar & Footer always present)
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />, 
    errorElement: <NotFound />, // Using a component instead of raw <h1>
    children: [
      { index: true, element: <Hero /> }, // Home page
      { path: "appointment", element: <Appointment /> },
      { path: "success", element: <Success /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      {path: "Contact",element:<Contact/>}, 
      {path:"team",element:<DoctorTeam/>},
      // 404 page

    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
