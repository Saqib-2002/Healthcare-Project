import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"; // Corrected import
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Appointment from "./component/Appointement"; // Import the Appointment component

const RootElement = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

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
      // Add other routes here as needed
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;