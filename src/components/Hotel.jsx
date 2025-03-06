import ImageGrid from "./ImageGrid";
import Ratings from "./Ratings";
let lorem;

export default function Hotel() {
  return (
    <section class="text-white ">
      <ImageGrid />
      <div className="px-16">
        <div className="text-2xl font-semibold mb-3 mt-5">{"Hotel 1"}</div>
        <Ratings ratings={4.5} reviews={65} />
        <div className="mt-3">{lorem}</div>
        <button className="p-3 mt-4 bg-blue-500 hover:bg-blue-400 rounded-md">
          Book Now
        </button>
      </div>
    </section>
  );
}
lorem =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus obcaecati velit aperiam exercitationem, nobis soluta libero neque quo iusto quod enim fugit vitae voluptatum ipsa rerum officiis eum non quas? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus obcaecati velit aperiam exercitationem, nobis soluta libero neque quo iusto quod enim fugit vitae voluptatum ipsa rerum officiis eum non quas? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus obcaecati velit aperiam exercitationem, nobis soluta libero neque quo iusto quod enim fugit vitae voluptatum ipsa rerum officiis eum non quas";
