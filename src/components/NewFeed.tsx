import React from "react";
import profile2 from "../assets/profile2.jpg";
import { AiOutlineUserAdd, AiFillLike, AiOutlineComment } from "react-icons/ai";
import { BiShare } from "react-icons/bi";
import meme2 from "../assets/meme2.jpg";

type Props = {};

function NewFeed({}: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg mt-2 ">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={profile2} className="h-10 w-10 object-cover rounded-full" />
          <div className="ml-5">
            <h2 className="dark:text-gray-200 text-gray-800">Sila</h2>
            <p className="text-sm">10 min agos</p>
          </div>
        </div>{" "}
        <AiOutlineUserAdd className="text-3xl text-cyan-800 bg-cyan-200 p-2 rounded-full cursor-pointer" />
      </div>
      <p className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat est
        illum laborum earum. Impedit hic accusamus illum quam, id quas
        explicabo. Sint aut ut accusantium dolorum fugiat aliquam possimus
        repellat?
      </p>

      <img
        src={meme2}
        alt=""
        className="mt-2 rounded-lg h-[25rem] w-[100%] mx-auto "
      />
      <div className="flex mt-5 items-center ">
        <AiFillLike className="ml-5 text-lg hover:text-red-600 cursor-pointer transition-all hover:scale-110" />
        <AiOutlineComment className="ml-5 text-lg hover:text-red-600 cursor-pointer transition-all hover:scale-110" />
        <BiShare className="ml-5 text-lg hover:text-red-600 cursor-pointer transition-all hover:scale-110" />
      </div>
    </div>
  );
}

export default NewFeed;
