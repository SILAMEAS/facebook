import React, { useEffect, useState } from "react";
import {
  BsSearch,
  BsFillMoonFill,
  BsQuestionCircle,
  BsFillSunFill,
} from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { MdNotificationsActive } from "react-icons/md";

type Props = {};

function Header({}: Props) {
  const [CurrenTheme, setCurrenTheme] = useState("");
  const changeTheme = (theme: string) => {
    if (theme == "light") {
      localStorage.them = "light";
      document.documentElement.classList.remove("dark");
      setCurrenTheme("light");
    } else {
      localStorage.them = "dark";
      document.documentElement.classList.add("dark");
      setCurrenTheme("dark");
    }
  };
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setCurrenTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setCurrenTheme("light");
    }
  }, []);
  return (
    <div className="bg-white fixed left-0 top-0 w-full dark:bg-gray-800">
      {" "}
      <div className="container mx-auto h-[10vh] flex justify-between ">
        <div className="flex items-center">
          <h1
            className="text-md font-bold lg:text-2xl text-white bg-blue-600 px-4 rounded-lg
        "
          >
            Facebook
          </h1>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="search"
              className=" hidden md:block"
            />
            <BsSearch className="-ml-8" />
          </div>
        </div>
        <ul className="flex items-center">
          <li className="ml-2 md:ml-5 cursor-pointer text-lg hover:text-black hover:scale-110 dark:text-gray-200">
            {CurrenTheme == "light" ? (
              <BsFillMoonFill
                onClick={() => {
                  changeTheme("dark");
                }}
              />
            ) : (
              <BsFillSunFill
                onClick={() => {
                  changeTheme("light");
                }}
              />
            )}
          </li>
          <li className="ml-2 md:ml-5 cursor-pointer text-lg hover:text-black hover:scale-110 dark:text-gray-200">
            <AiFillMessage />
          </li>
          <li className="ml-2 md:ml-5 cursor-pointer text-lg hover:text-black hover:scale-110 dark:text-gray-200">
            <MdNotificationsActive />
          </li>
          <li className="ml-2 md:ml-5 cursor-pointer text-lg hover:text-black hover:scale-110 dark:text-gray-200">
            <BsQuestionCircle />
          </li>
          <li className="ml-2 md:ml-5 cursor-pointer text-lg hover:text-black hover:scale-110 dark:text-gray-200">
            <button className="ml-2 hidden lg:block">Meas Sila</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
