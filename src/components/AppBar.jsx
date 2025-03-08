import axios from "axios";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./Layout";
import { toast } from "react-toastify";

export default function AppBar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function logoutAction() {
    try {
      await axios.delete("http://localhost:8000/api/users/logout");
      setUser({});
      toast("Logout Success");
      navigate("/");
    } catch (e) {
      console.log(e.response.data.message);
    }
  }

  return (
    <div className="flex fixed z-[50] opacity-90  w-full justify-between p-4 bg-blue-600 text-white font-semibold align-baseline">
      <Link to={"/"}>
        <div className="flex">
          <img
            className="h-8 w-8"
            src="https://banner2.cleanpng.com/20180825/ook/kisspng-logo-brand-product-design-trademark-logos-fake-mock-up-illust-ss143531671-2-sra-so-1713948667494.webp"
          />
          <div className="px-4 text-3xl">Simple Hotel Booking Website</div>
        </div>
      </Link>
      <div className="group relative">
        <div
          role="button"
          onClick={() => (user.name ? null : navigate("/signup"))}
          className=" p-2 bg-blue-500 hover:bg-blue-400 rounded-md"
        >
          {user.name ? `Hi ${user.name}` : "login/signup"}
        </div>
        {user.name && (
          <div
            role="button"
            onClick={logoutAction}
            className="absolute group-hover:block hidden p-2 bg-blue-500 hover:bg-blue-400 rounded-md"
          >
            Log Out
          </div>
        )}
      </div>
    </div>
  );
}
