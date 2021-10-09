import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="w-5/6 mx-auto flex flex-col gap-3">
      <h1 className="text-center text-4xl font-bold">About this Website</h1>
      <p className="font-semibold text-lg text-gray-700 ">
        This Website is Made With React (Popular JS Library to make Web Apps)
        and gives Information About 40+ Diseases around the Globe. And it made
        by keeping in mind to provide all round information of the disease. The
        Information about
        <br />
        • Facts
        <br />
        • Diagnosis
        <br />
        • Treatment
        <br />• Symptoms and more ... about a certain Disease.
      </p>

      <p className="font-semibold text-lg text-gray-700 ">
        This website is only compatable with Large Screens and is not responsive
        with mobile screens. PLease use a bigger screen for better expereince.
        The data of Diseases is fetched from a API - Disease.Info . This website
        has awesome UI and is user-friendly.
      </p>
      <p className="font-semibold text-lg text-gray-700 ">
        This Website has Cards and You Just Have to Click the Card to Get The
        Details Of The Disease. There is home button provided to bring you back
        to home . It also has a custom scrollbar and a smooth scroll behaviour.
      </p>
      <p className="font-semibold text-xl text-gray-700 ">
        Technologies Used :<li>React</li>
        <li>Disease API</li>
        <li>Tailwind Blocks And Tailwind CSS</li>
        <li>React Router For Navigation</li>
      </p>
      <p className="font-semibold text-xl text-gray-700 "> Watch A Demo :</p>
      <iframe src="https://drive.google.com/file/d/1vFcQ001McKe3FW-sk4fyuiC82i3fRMl6/preview" width="1200" height="500" allow="autoplay"></iframe>
      <Link className="font-semibold text-xl text-green-400 my-2">
        
        <span className="font-semibold text-xl text-gray-700">Github : </span>https://github.com/a-n-a-s/disease-app
      </Link>
      <span className="font-semibold text-xl text-gray-700">* Hosted On Netlify</span>
    </div>
  );
};

export default About;
