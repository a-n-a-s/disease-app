import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Redirect = () => {
  const { name } = useParams();

  const [disease, setDisease] = useState({});

  useEffect(() => {
    const getDisease = async () => {
      const response = await fetch(
        `https://disease-info-api.herokuapp.com/diseases/${name}`
      )
        .then((res) => res.json())
        .then((json) => setDisease(json.disease))
        .catch(err => console.log(err))
    };
    getDisease();
  }, []);
  {
    console.log(disease);
  }
  return (
    <div className="my-4 mb-20 w-5/6 mx-auto  ">
      <h1 className="text-center text-5xl font-bold">{disease?.name}</h1>
      <div className="flex justify-center my-2 w-full">
        <span className="text-center text-gray-500 font-semibold">
          {disease?.data_updated_at}
        </span>
      </div>
      <div className="my-3">
        <h1 className=" text-3xl font-bold">Facts : </h1>
        {disease?.facts?.length !== 0 ? (
          disease?.facts?.map((fact, index) => (
            <p className="my-1 text-lg text-gray-600 font-semibold" key={index}>
              • {fact}
            </p>
          ))
        ) : (
          <p className="my-1 text-lg text-gray-600 font-semibold">
            {" "}
            No facts found{" "}
          </p>
        )}
      </div>
      <div className="my-5">
        <h1 className=" text-3xl font-bold">Diagnosis : </h1>
        {disease?.diagnosis ? (
          <p className="my-1 text-lg text-gray-600 font-semibold">
            • {disease?.diagnosis}
          </p>
        ) : (
          <p className="my-1 text-lg text-gray-600 font-semibold">
            {" "}
            No Diagnosis found{" "}
          </p>
        )}
      </div>
      <div className="my-5">
        <h1 className=" text-3xl font-bold">Preventions : </h1>
        {disease?.prevention ? (
          <p className="my-1 text-lg text-gray-600 font-semibold">
            • {disease?.prevention}
          </p>
        ) : (
          <p className="my-1 text-lg text-gray-600 font-semibold">
            {" "}
            No Preventions found{" "}
          </p>
        )}
      </div>
      <div className="my-5">
        <h1 className=" text-3xl font-bold">Symptoms : </h1>
        {disease?.symptoms ? (
          <p className="my-1 text-lg text-gray-600 font-semibold">
            • {disease?.symptoms}
          </p>
        ) : (
          <p className="my-1 text-lg text-gray-600 font-semibold">
            {" "}
            No Symptoms found{" "}
          </p>
        )}
      </div>
      <div className="my-5">
        <h1 className=" text-3xl font-bold">Transmission : </h1>
        {disease?.transmission ? (
          <p className="my-1 text-lg text-gray-600 font-semibold">
            • {disease?.transmission}
          </p>
        ) : (
          <p className="my-1 text-lg text-gray-600 font-semibold">
            {" "}
            No Transmission found{" "}
          </p>
        )}
      </div>
      <div className="my-5">
        <h1 className=" text-3xl font-bold">Treatment : </h1>
        {disease?.treatment ? (
          <p className="my-1 text-lg text-gray-600 font-semibold">
            • {disease?.treatment}
          </p>
        ) : (
          <p className="my-1 text-lg text-gray-600 font-semibold">
            {" "}
            No Treatment found{" "}
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <span className="mt-10 text-lg text-green-600 font-semibold">
          {disease.more}
        </span>
      </div>
    </div>
  );
};

export default Redirect;
