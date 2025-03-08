import Ratings from "./Ratings";
import { Link, useNavigate } from "react-router-dom";

export default function Card({ name, description, ratings, reviews }) {
  const navigate = useNavigate();
  return (
    <div
      role="button"
      onClick={() => navigate("/hotel")}
      className="flex max-w-[70%] cursor-pointer flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover overflow-hidden w-full  h-69 md:h-[224px] md:w-69 md:rounded-none md:rounded-s-lg"
        src="https://archive.org/download/placeholder-image/placeholder-image.jpg"
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold  text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <Ratings ratings={ratings} reviews={reviews} />
        <Link
          to={"/hotel"}
          className="text-white p-1 my-2 inline underline italic hover:text-blue-300"
        >
          More Details...
        </Link>
      </div>
    </div>
  );
}
