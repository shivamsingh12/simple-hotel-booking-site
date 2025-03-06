import Card from "./Card";
import Explore from "./Explore";
import Stepper from "./Stepper";
export default function Index() {
  return (
    <div className="flex justify-center flex-col mt-[100px] mx-auto">
      <div className="flex mx-auto  p-5 px-8 border-1 bg-blue-600 rounded-md py-[20px] mb-4">
        <div className="text-white font-bold text-2xl mr-4 mt-4 text-wrap max-w-md">
          Book Any Hotels, Do Web Checkin and More ...
        </div>
        <Card
          name={"Hotel #1"}
          ratings={3.5}
          reviews={40}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem quo culpa..."
          }
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
