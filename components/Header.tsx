import logo from "@/public/assets/logo.png";
import { ChevronDown, Globe } from "lucide-react";
import Image from "next/image";
export default function Header() {
  return (
    <div className="h-[105px]  flex items-center justify-between">
      <div className="flex gap-5 ">
        <Image src={logo.src} alt="logo" width={30} height={20} />
        <h1 className="text-2xl font-bold text-white drop-shadow-lg ">
          HomeFinder
        </h1>
      </div>
      <ul
        id="header-ul"
        className="flex gap-8 text-white text-[16px] bg-[rgba(92,115,138,0.8)] h-10  items-center px-1.5 rounded-3xl shadow-md"
      >
        <li className="bg-white rounded-full text-[var(--second-color)] px-3 py-1 font-bold">
          Home
        </li>
        <li>Properties</li>
        <li className="flex items-center gap-1.5">
          Buy <ChevronDown className="text-xs -mb-1" />
        </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-5 items-center">
        <div className="flex gap-2 text-sm text-white">
          <Globe />
          Eng
          <ChevronDown />
        </div>
        <div className="bg-white rounded-md text-[var(--second-color)] px-4 py-2.5 text-sm font-bold">
          Sign Up
        </div>
      </div>
    </div>
  );
}
