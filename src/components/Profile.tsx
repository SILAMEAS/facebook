import React from "react";
import profile1 from "../assets/profile1.jpg";
import {
  AiOutlineUserAdd,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

import { MdLocationPin, MdWork } from "react-icons/md";

type Props = {};

function Profile({}: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-5">
      <div className="flex justify-between items-center ">
        <div className="flex items-center">
          <img src={profile1} className="h-10 w-10 object-fill rounded-full" />
          <div className="ml-5">
            <h1 className="dark:text-gray-200">Meas sila</h1>
            <p className="">3000 firends</p>
          </div>
        </div>
        <AiOutlineUserAdd className="text-xl" />
      </div>{" "}
      <hr className="my-5" />
      <div className="flex items-center">
        <MdLocationPin className="text-lg" />
        <p className="ml-5">Some place in Cambodai</p>
      </div>
      <div className="mt-2 flex items-center">
        <MdWork className="text-lg" />
        <p className="ml-5">Some Degree</p>
      </div>
      <hr className="my-5" />
      <div className="flex justify-between items-center mt-2">
        <p>Who views your profile?</p>
        <h2>5000</h2>
      </div>
      <div className="flex justify-between items-center mt-2">
        <p>Impress from your friends</p>
        <h2>1546</h2>
      </div>
      <hr className="my-5" />
      <h2>Socail medai</h2>
      <div className="flex justify-between mt-5">
        <div className="flex items-center">
          <AiOutlineTwitter className="text-lg" />
          <p className="ml-5 font-semibold">Twitter</p>
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex items-center">
          <AiFillLinkedin className="text-lg" />
          <p className="ml-5 font-semibold">LinkIn</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
