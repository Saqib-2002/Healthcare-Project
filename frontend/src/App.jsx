import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"; // Corrected import
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Appointment from "./component/Appointement"; // Import the Appointment component
import Sucess from "./pages/sucess"; // Corrected the import for Success page

// RootElement layout (for consistent Navbar and Footer)
const RootElement = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Render child routes here */}
      <Footer />
    </>
  );
};

// Router setup with routes for Appointment and Success pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    errorElement: <h1>404 error</h1>,
    children: [
      {
        path: "/appointment", // Define the route for the Appointment component
        element: <Appointment />,
      },
      {
        path: "/sucess", // Define the route for the Success page
        element: <Sucess />, // When booking is successful, redirect here
      },
      // Add other routes here as needed
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
