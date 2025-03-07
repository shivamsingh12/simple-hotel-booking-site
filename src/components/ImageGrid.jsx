export default function ImageGrid() {
  return (
    <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
        <div className="col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col">
          <a
            href="#"
            className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
          >
            <img
              src="https://archive.org/download/placeholder-image/placeholder-image.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
              View
            </h3>
          </a>
        </div>
        <div className="col-span-2 sm:col-span-1 md:col-span-2 ">
          <a
            href="#"
            className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
          >
            <img
              src="https://archive.org/download/placeholder-image/placeholder-image.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
              Living Space
            </h3>
          </a>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
            <a
              href="#"
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
            >
              <img
                src="https://archive.org/download/placeholder-image/placeholder-image.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                bed
              </h3>
            </a>
            <a
              href="#"
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
            >
              <img
                src="https://archive.org/download/placeholder-image/placeholder-image.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                Accessories
              </h3>
            </a>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1 md:col-span-1  h-auto md:h-full flex flex-col">
          <a
            href="#"
            className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
          >
            <img
              src="https://archive.org/download/placeholder-image/placeholder-image.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
              Bath
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
}
