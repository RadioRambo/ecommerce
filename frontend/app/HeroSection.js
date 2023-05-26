export default function HeroSection() {
  return (
    <div className=" bg-green-300 ">
      <div className="container mx-auto">
        <div className=" flex flex-col pb-10 md:pb-20 place-content-end h-[90vh] max-h-[1000px]  px-4 md:px-20">
          <div>
            <h1 className="text-7xl lg:text-8xl font-bold mb-10 min-w-full">
              Lovely <span className="text-green-900">plants</span>,<br /> for
              lovely <span className="text-green-900">people</span>
            </h1>
            <p className="text-gray-600  font-semibold text-base mb-10 md:mb-14 md:w-1/2 lg:w-1/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              optio cupiditate rem dolore? Inventore delectus excepturi
              accusamus repellat!
            </p>
            <a
              href="./products"
              className="bg-green-700 text-white font-semibold py-2 px-6 rounded-2xl"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
