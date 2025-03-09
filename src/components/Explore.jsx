import Card from "./Card";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export default function Explore() {
  const navigate = useNavigate();
  const location = useLocation();
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function getHotel() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/hotels?skip=0&take=5"
        );
        setCards([...response.data]);
      } catch (e) {
        toast("Something Went Wrong");
      }
    }
    getHotel();
  }, []);

  async function getHotel() {
    const skip = cards.length;
    const take = skip % 2 == 0 ? 5 : 6;
    try {
      const response = await axios.get(
        `http://localhost:8000/api/hotels?skip=${skip}&take=${take}`
      );
      setCards((prev) => [...prev, ...response.data]);
    } catch (e) {
      toast("Something Went Wrong");
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-5">
      {cards.map((card) => (
        <Card
          key={card?.id}
          id={card?.id}
          name={card?.name}
          ratings={card?.ratings}
          reviews={card?.reviews}
          description={card?.description}
        />
      ))}

      <div
        role="button"
        onClick={() =>
          !location.pathname.includes("explore")
            ? navigate("/explore")
            : getHotel()
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
