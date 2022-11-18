import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Popover } from "@headlessui/react";
import Image from "../../Image";
import { Morty } from "../../../assets";

const Header = () => {
  return (
    <div className="bg-green-500">
      <div className="w-full max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center py-5">
          <div>
            <div className="text-3xl text-white font-bold">
              <Link to="/">
                <Image
                  source={Morty}
                  description="Logo"
                  width={100}
                  className="rounded-full"
                />
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex space-x-10 text-white text-lg md:text-2xl">
            <Link to="/characters">Characters</Link>
            <Link to="/episodes">Episodes</Link>
          </div>
          <div className="block sm:hidden">
            <Popover className="relative">
              <Popover.Button className="outline-none">
                <FiMenu size={30} className="text-white" />
              </Popover.Button>

              <Popover.Panel className="absolute right-0 z-10 bg-white w-[150px] border-[1px] rounded-xl p-5 space-y-[30px]">
                <div>
                  <Link to="/characters">Characters</Link>
                </div>
                <div>
                  <Link to="/episodes">Episodes</Link>
                </div>
              </Popover.Panel>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
