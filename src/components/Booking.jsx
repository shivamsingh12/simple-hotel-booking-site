import { Link } from "react-router-dom";
export default function Booking() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://banner2.cleanpng.com/20180825/ook/kisspng-logo-brand-product-design-trademark-logos-fake-mock-up-illust-ss143531671-2-sra-so-1713948667494.webp"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold text-white">
          Booking For Hotel #1
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="name"
                className="block text-sm/6 font-medium text-white"
              >
                Name
              </label>
            </div>
            <div className="mt-2">
              <input
                name="name"
                id="name"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
