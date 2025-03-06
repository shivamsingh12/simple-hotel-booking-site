import Card from "./Card";
import { useLocation, useNavigate } from "react-router-dom";

export default function Explore() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-5">
      <Card
        name={"Hotel #1"}
        ratings={3.5}
        reviews={40}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem quo culpa..."
        }
      />
      <Card
        name={"Hotel #1"}
        ratings={3.5}
        reviews={40}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem quo culpa..."
        }
      />
      <Card
        name={"Hotel #1"}
        ratings={3.5}
        reviews={40}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem quo culpa..."
        }
      />
      <Card
        name={"Hotel #1"}
        ratings={3.5}
        reviews={40}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem quo culpa..."
        }
      />
      <Card
        className="justify-start"
        name={"Hotel #1"}
        ratings={3.5}
        reviews={40}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem quo culpa..."
        }
      />
      <div
        role="button"
        onClick={() =>
          !location.pathname.includes("explore") ? navigate("/explore") : null
        }
        className=" flex text-white text-4xl border-2 rounded-md border-slate-500 hover:bg-gray-700 cursor-pointer items-center justify-center font-semibold w-[575px]"
      >
        {location.pathname.includes("explore")
          ? "Load More"
          : "Explore More..."}
      </div>
    </div>
  );
}
