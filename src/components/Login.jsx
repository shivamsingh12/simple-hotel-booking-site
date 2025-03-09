import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { UserContext } from "./Layout";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const [user, setUser] = useState({});
  const { setUser: setLoggedInUser } = useContext(UserContext);
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  async function loginAction(e) {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8000/api/users/login",
        data: {
          ...user,
        },
      });
      setLoggedInUser(jwtDecode(response.data.accessToken));
      toast("Log In Success");
      searchParams.get("redirect")
        ? navigate(`/${searchParams.get("redirect")}`)
        : navigate("/");
    } catch (e) {
      toast("Error : " + JSON.stringify(e.response.data.message));
    }
  }
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://banner2.cleanpng.com/20180825/ook/kisspng-logo-brand-product-design-trademark-logos-fake-mock-up-illust-ss143531671-2-sra-so-1713948667494.webp"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold text-white">
          Log in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-white"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                required
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-white"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                id="password"
                autocomplete="current-password"
                required
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={loginAction}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Log in
            </button>
          </div>
        </form>
        <div className="mt-10 text-center text-sm/6 text-white font-semibold">
          NEW USER
          <Link to={"/signup"}>
            <div className="p-2 mt-2 bg-blue-500 hover:bg-blue-400 rounded-md">
              Register
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
