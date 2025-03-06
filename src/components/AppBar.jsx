import { Link } from "react-router-dom";

export default function AppBar() {
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
      <Link to={"signup"}>
        <div className="p-2 bg-blue-500 hover:bg-blue-400 rounded-md">
          login/signup
        </div>
      </Link>
    </div>
  );
}
