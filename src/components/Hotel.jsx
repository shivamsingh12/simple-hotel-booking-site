import ImageGrid from "./ImageGrid";
import Ratings from "./Ratings";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "./Layout";

export default function Hotel() {
  const [card, setCard] = useState({});
  const { id } = useParams();
  const { user } = useContext(UserContext);
  useEffect(() => {
    async function getHotel() {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/hotels/${id}`
        );
        setCard({ ...response.data });
      } catch (e) {
        toast("Something Went Wrong");
      }
    }
    getHotel();
  }, [id]);
  return (
    <section className="text-white ">
      <ImageGrid />
      <div className="px-16">
        <div className="text-2xl font-semibold mb-3 mt-5">{card?.name}</div>
        <Ratings ratings={card?.ratings} reviews={card?.reviews} />
        <div className="mt-3">{card?.moreDescription}</div>

        <button className="p-3 mt-4 bg-blue-500 hover:bg-blue-400 rounded-md">
          <Link to={user?.name ? "/booking" : "/login?redirect=booking"}>
            Book Now
          </Link>
        </button>
      </div>
    </section>
  );
}
