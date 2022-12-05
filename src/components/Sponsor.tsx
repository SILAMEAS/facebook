import React from "react";
import cellcard from "../assets/cellcard.jpg";

type Props = {};

function Sponsor({}: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-5">
      <h2>Sponsor</h2>
      <img src={cellcard} alt="" className="rounded-lg mt-5 h-full w-full" />
      <h2 className="my-5">Cellcard Play</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, suscipit
        ea doloribus recusandae beatae maiores odio dolorum odit reprehenderit,
        architecto tempore placeat pariatur velit quo, quisquam consequatur
        saepe numquam exercitationem!
      </p>
    </div>
  );
}

export default Sponsor;
