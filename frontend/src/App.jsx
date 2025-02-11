import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Appointment from "./component/Appointement"; 
import Success from "./pages/Sucess"; 
import Hero from "./component/Hero";
import About from "./pages/About"; 
import Service from "./pages/Service"; 

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

// ✅ Router setup (Navbar & Footer always present)
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />, 
    errorElement: <h1 className="text-center mt-20 text-3xl font-bold">404 Error - Page Not Found</h1>,
    children: [
      { index: true, element: <Hero /> }, // Home page
      { path: "appointment", element: <Appointment /> },
      { path: "success", element: <Success /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Service /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
