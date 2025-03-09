import "./App.css";
import Index from "./components/Index";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Explore from "./components/Explore";
import Hotel from "./components/Hotel";
import Booking from "./components/Booking";
import Checkin from "./components/Checkin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "explore", element: <Explore /> },
      { path: "hotel/:id", element: <Hotel /> },
      { path: "booking", element: <Booking /> },
      { path: "checkin", element: <Checkin /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
