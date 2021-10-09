import React from "react";

const Hero = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              It is health that is real wealth and
              <br className="hidden lg:inline-block" />
              not pieces of gold and silver.
            </h1>
            <p className="mb-8 leading-relaxed">
              Good health is central to human happiness and well-being that
              contributes significantly to prosperity and wealth and even
              economic progress, as healthy populations are more productive,
              save more and live longer.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Get Started
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src="https://media.istockphoto.com/vectors/the-team-of-doctors-vector-id1210316719?k=20&m=1210316719&s=170667a&w=0&h=1JPcVFPVNLgZ_5uMy0Dl-HAOqrQW7rJHRz24a89UTuo="
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
