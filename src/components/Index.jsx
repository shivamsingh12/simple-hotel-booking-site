import { useEffect, useState } from "react";
import Card from "./Card";
import Explore from "./Explore";
import Stepper from "./Stepper";
import { toast } from "react-toastify";
import axios from "axios";
export default function Index() {
  const [card, setCard] = useState({});
  useEffect(() => {
    async function getHotel() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/hotels?skip=0&take=1"
        );
        setCard({ ...response.data[0] });
      } catch (e) {
        toast("Something Went Wrong");
      }
    }
    getHotel();
  }, []);
  return (
    <div className="flex justify-center flex-col mt-[100px] mx-auto">
      <div className="flex mx-auto  p-5 px-8 border-1 bg-blue-600 rounded-md py-[20px] mb-4">
        <div className="text-white font-bold text-2xl mr-4 mt-4 text-wrap max-w-md">
          Book Any Hotels, Do Web Checkin and More ...
        </div>
        <Card
          id={card?.id}
          name={card?.name}
          ratings={card?.ratings}
          reviews={card?.reviews}
          description={card?.description}
        />
      </div>

      <Stepper />
      <div className="mt-[100px] mb-[50px] ml-[88px] text-white text-4xl items-center justify-center font-semibold w-[575px]">
        Explore
      </div>
      <Explore />
    </div>
  );
}
