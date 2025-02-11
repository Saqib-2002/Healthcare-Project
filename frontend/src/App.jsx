import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./component/Navbar";

const RootElement = () => {
  return (
    <>
      <Navbar/>
    </>
  )
}

const router = createBrowserRouter([{
  path: "/",
  element: <RootElement />,
  errorElement: <h1>404 error</h1>,
  children: [
    {
      
    }
  ]
}])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}
export default App