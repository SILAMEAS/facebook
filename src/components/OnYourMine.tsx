import React from "react";
import profile1 from "../assets/profile1.jpg";
import { BsFillImageFill, BsFillCameraVideoFill } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";

type Props = {};

function OnYourMine({}: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
      <div className="flex items-center">
        <img src={profile1} className="h-10 w-10 object-fill rounded-full" />
        <input
          type="text"
          placeholder="what on your mine?"
          className="ml-5 rounded-full w-full text-sm"
        />
      </div>
      <hr className="my-5" />
      <div className="flex justify-between">
        <div className="flex items-center cursor-pointer hover:bg-gray-200 rounded-lg px-2 transition-all">
          <BsFillImageFill />
          <p className="ml-2">Image</p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-200 rounded-lg px-2 transition-all">
          <BsFillCameraVideoFill />
          <p className="ml-2">Video</p>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-200 rounded-lg px-2 transition-all">
          <MdAttachFile />
          <p className="ml-2">Attachment</p>
        </div>
        <div className="mr-2 lg:mr-0">
          <button>Post</button>{" "}
        </div>
      </div>
    </div>
  );
}

export default OnYourMine;
