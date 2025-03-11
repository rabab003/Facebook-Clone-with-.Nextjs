import Image from "next/image";
import img from "../public/Facebook_Logo_2023.png";
import HeaderIcon from "./HeaderIcon"; // Ensure this path is correct

import {
  FlagIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlayIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  ViewGridIcon,
  ChatIcon,
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline"; // Ensure this import is correct

export default function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center px-5 py-2 lg:px-10 shadow-md">
      {/* left */}
      <div className="flex items-center">
        <Image
          className="w-[30px] h-[30px] md:w-[40px] cursor-pointer md:h-[40px]"
          src={img}
          layout="fixed"
          alt="Logo"
        />

        <div className="flex ml-3 items-center rounded-full bg-gray-100 p-1 md:p-2">
          <MagnifyingGlassIcon className="h-6 cursor-pointer md:h-6 text-gray-600" />
          <input
            type="text"
            placeholder="search facebook"
            className="hidden md:inline-flex  ml-2 capitalize items-center bg-transparent outline-none"
          />
        </div>
      </div>

      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-1 md:space-x-2">
          {/* <HeaderIcon Icon={HomeIcon} active={true} /> */}
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingBagIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* right */}
      <div>
        {/* profile picture */}
        <p className="whitespace-nowrap font-semibold pr-3">rabab qasim</p>
        <ViewGridIcon className="Icon" />
        <ChatIcon className="Icon" />
        <BellIcon className="Icon" />
        <ChevronDownIcon className="Icon" />
      </div>
    </div>
  );
}
