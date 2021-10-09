import React from "react";
import { Link } from "react-router-dom";

const Disease = ({ disease }) => {

  return (
      <div className="p-4 md:w-1/3  " >
      <div className="h-full hover:shadow-xl transform transition duration-300 hover:scale-105 cursor-pointer border-2 border-green-500 border-opacity-60 rounded-lg overflow-hidden ">
        <Link to={`/${disease?.name}/details`} >
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-semibold text-gray-700 mb-1">
            {disease?.data_updated_at}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {disease?.name}
          </h1>
          <p className="leading-relaxed mb-3 truncate">{disease?.symptoms}</p>
          <div className="flex items-center flex-wrap ">
            <Link to={`/${disease?.name}/details`} className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
    </Link>
      </div>
    </div>
  );
};

export default Disease;
