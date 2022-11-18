import React from "react";
import { useNavigate } from "react-router-dom";
import { Morty } from "../../../assets";
import Image from "../../Image";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-green-500">
      <div className=" w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[60px] py-[60px] px-5">
        <div className="text-white text-3xl">
          <Image
            source={Morty}
            description="Logo"
            width={100}
            className="rounded-full"
          />
        </div>
        <div className="text-white text-3xl space-y-[20px] md:space-y-[30px]">
          <div className="text-2xl underline">Main Characters</div>
          <div
            onClick={() => navigate("/character-detail/1")}
            className="text-xl cursor-pointer hover:scale-110 duration-300 w-fit"
          >
            Rick
          </div>
          <div
            onClick={() => navigate("/character-detail/2")}
            className="text-xl cursor-pointer hover:scale-110 duration-300 w-fit"
          >
            Morty
          </div>
          <div
            onClick={() => navigate("/character-detail/3")}
            className="text-xl cursor-pointer hover:scale-110 duration-300 w-fit"
          >
            Summer
          </div>
        </div>
        <div className="text-white text-3xl space-y-[20px] md:space-y-[30px]">
          <div className="text-2xl underline">List</div>
          <div
            onClick={() => navigate("/characters")}
            className="text-xl cursor-pointer hover:scale-110 duration-300 w-fit"
          >
            Characters
          </div>
          <div
            onClick={() => navigate("/episodes")}
            className="text-xl cursor-pointer hover:scale-110 duration-300 w-fit"
          >
            Episodes
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
