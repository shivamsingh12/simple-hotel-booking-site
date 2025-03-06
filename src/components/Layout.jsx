import AppBar from "./AppBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className="tracking-widest">
      <AppBar />
      <div className="md:pt-[100px] pt-[200px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
