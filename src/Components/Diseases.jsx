import React, { useEffect, useState } from "react";
import Disease from "./Disease";

const Diseases = () => {
  const [diseases, setDiseases] = useState([]);

  useEffect(() => {
    const getDiseases = async () => {
      const response = await fetch(
        "https://disease-info-api.herokuapp.com/diseases"
      )
        .then((res) => res.json())
        .then((json) => setDiseases(json.diseases));
    };
    getDiseases();
  }, []);
  console.log(diseases);
  return (
    <>
      <section className="text-gray-600 body-font" id="dis_con">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {diseases?.map((disease, index) => (
              <Disease disease={disease} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Diseases;
