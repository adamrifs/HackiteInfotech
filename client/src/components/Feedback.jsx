import React from "react";
import { cn } from "@/lib/utils";
// import avatar from "../assets/avatar.jpg";

const Feedback = ({ name, role, content}) => {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-80 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col p-6 bg-gray-900"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>

        <div className="flex flex-row items-center gap-3 z-10 !py-3 !px-5 ">
          {/* <img
            height="100"
            width="100"
            alt="Avatar"
            src={image}
            className="h-10 w-10 rounded-full border-2 object-cover"
          /> */}
          <div className="flex flex-col">
            <p className="font-normal text-left text-base !text-gray-50 relative z-10">
              {name}
            </p>
            <p className="text-sm !text-gray-400">{role}</p>
          </div>
        </div>

        <div className="flex-1 flex z-10 !p-5">
          <div>
            <p className="font-normal text-sm !text-gray-50">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
