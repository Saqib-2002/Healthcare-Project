import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

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
    children: [{}],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
