import AppBar from "./AppBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState, createContext } from "react";

export const UserContext = createContext(null);

export default function Layout() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="tracking-widest">
        <AppBar />
        <div className="md:pt-[100px] pt-[200px]">
          <Outlet />
        </div>

        <Footer />
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          theme="dark"
        />
      </div>
    </UserContext.Provider>
  );
}
