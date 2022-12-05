import React from "react";
import profile1 from "../assets/profile1.jpg";
type Props = {};

function FriendOnline({}: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-5 mt-2">
      <h2>Friend list</h2>
      <div className="mt-2">
        <div className="flex items-center cursor-pointer rounded-lg px-2 py-1">
          <div className="relative">
            <img
              src={profile1}
              className="h-10 w-10 object-fill rounded-full"
            />
            <div className="bg-green-500 h-3 w-3 absolute bottom-0 rounded-full right-0"></div>
          </div>
          <div className="ml-5">
            <p className="dark:text-gray-200 text-gray-800 font-bold">RORO</p>
            <p className="text-sm">10 matual friends</p>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-center cursor-pointer rounded-lg px-2 py-1">
          <div className="relative">
            <img
              src={profile1}
              className="h-10 w-10 object-fill rounded-full"
            />
            <div className="bg-green-500 h-3 w-3 absolute bottom-0 rounded-full right-0"></div>
          </div>
          <div className="ml-5">
            <p className="dark:text-gray-200 text-gray-800 font-bold">RORO</p>
            <p className="text-sm">10 matual friends</p>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-center cursor-pointer rounded-lg px-2 py-1">
          <div className="relative">
            <img
              src={profile1}
              className="h-10 w-10 object-fill rounded-full"
            />
            <div className="bg-green-500 h-3 w-3 absolute bottom-0 rounded-full right-0"></div>
          </div>
          <div className="ml-5">
            <p className="dark:text-gray-200 text-gray-800 font-bold">RORO</p>
            <p className="text-sm">10 matual friends</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendOnline;
